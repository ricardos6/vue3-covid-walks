import { USER_INFO } from '../store/Login';

const getUserInfo = () => {
  let userInfo = localStorage.getItem(USER_INFO);

  return userInfo != null ? JSON.parse(userInfo) : null;
};

export default getUserInfo;
