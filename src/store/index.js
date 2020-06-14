import Vue from 'vue'
import Vuex from 'vuex'

import todo from './modules/todo'

import { mergeDeep } from '../common/misc/functions'

Vue.use(Vuex)

const STATE_NAME = 'state-todo';

const store = new Vuex.Store({
  modules: {
    todo
  },

  mutations: {
    __initStore(state) {
      if (localStorage.getItem(STATE_NAME)) {
        this.replaceState(mergeDeep(state, JSON.parse(localStorage.getItem(STATE_NAME))));
      }
    }
  }
});

store.commit('__initStore', store.state);

store.subscribe((mutation, state) => {
  localStorage.setItem(STATE_NAME, JSON.stringify(state));
});

export default store;
