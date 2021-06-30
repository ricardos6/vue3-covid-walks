import { Config } from '../config/Config';
import { serverMockConfig } from './mock/config';

const getQueryParams = url => {
  let params = url
    .slice(url.indexOf('?') + 1)
    .split('&')
    .map(item => ({ [item.split('=')[0]]: item.split('=')[1] }));

  let paramsObj = {};
  params.forEach(item => {
    paramsObj[Object.keys(item)[0]] = Object.values(item)[0];
  });

  return paramsObj;
};

const getMethod = options =>
  options && options.method ? options.method.toUpperCase() : 'GET';

const getMatchEndpointKey = url => {
  const endpointsKeys = Object.keys(serverMockConfig.endpoints);
  const endpointKey = endpointsKeys.filter(item => new RegExp(item).test(url));

  return endpointKey.length ? endpointKey[0] : null;
};

export const fetch = (url, options) => {
  let matchEndpointKey = getMatchEndpointKey(url);

  if (Config.useMockData && matchEndpointKey != null) {
    const httpMethod = getMethod(options);
    let urlData = serverMockConfig.endpoints[matchEndpointKey][httpMethod];

    if (typeof urlData == 'function') {
      urlData = urlData(
        httpMethod === 'GET' ? getQueryParams(url) : options.body
      );
    }

    if (urlData) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            json: () => new Promise(resolve => resolve(urlData))
          });
        }, Config.mockDataLoadTime);
      });
    }
  }

  return window.fetch(Config.serviceURL + url, options);
};
