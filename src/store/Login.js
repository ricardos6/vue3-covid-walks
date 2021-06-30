import { fetch } from '../server';
import getUserInfo from '../utils/ApplicationUtils';

export const USER_INFO = 'USER_INFO';

export const LoginModule = {
  namespaced: true,
  state: {
    userInfo: getUserInfo(),
    loading: false,
    error: null
  },

  // Mutations are functions that effect the STATE
  mutations: {
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
      state.error = false;
    },

    LOGIN_ERROR(state) {
      state.error = true;
      state.userInfo = null;
    }
  },

  // Actions are functions you call throughout your application that call mutations
  actions: {
    async login({ commit }, credentials) {
      await fetch('/login', {
        method: 'POST',
        body: {
          ...credentials
        }
      })
        .then(response => response.json())
        .then(userInfo => {
          if (userInfo.error) {
            commit('LOGIN_ERROR');
          } else {
            localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
            commit('SET_USER_INFO', userInfo);
          }
        });
    }
  },
  modules: {}
};