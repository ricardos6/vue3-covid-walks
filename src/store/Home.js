import { fetch } from '../server';

export const HomeModule = {
  namespaced: true,
  state: {
    loading: false,
    walks: [],
    friends: []
  },
  // Mutations are functions that effect the STATE
  mutations: {
    FIND_WALKS(state, walks) {
      state.walks = walks;
    },
    FIND_FRIENDS(state, friends) {
      state.friends = friends;
    }
  },

  // Actions are functions you call throughout your application that call mutations
  actions: {
    async findWalks({ commit }) {
      await fetch('/walks')
      .then(response => response.json())
      .then(walks => {
        commit('FIND_WALKS', walks);
      });      
    },

    async findUserFriends({ commit }, userName) {
      await fetch('/friends?user=' + userName)
      .then(response => response.json())
      .then(friends => {
        commit('FIND_FRIENDS', friends);
      });      
    }
  },
  modules: {

  }
};