import {generateCodeFrame} from "vue-template-compiler";

export default {
  namespaced: true,
  state: {
    query: '',
    entries: [],
    next: null,
    hasNext: false,
    previous: null,
    hasPrevious: false,
  },
  mutations: {
    setDados(state, payload) {
      state.entries = payload.results;
      state.previous = payload.previous;
      state.hasNext = (state.next !== null)
      state.next = payload.next;
      state.hasPrevious = (state.previous !== null)
    },
    getDados(state) {
      return state.entries;
    },
    setQuery(state, payload) {
      state.query = payload;
    },
    getQuery(state) {
      return state.query;
    },
    hasNext(state){
      return state.hasNext;
    },
    hasPrevious(state){
      return state.hasPrevious
    }
  },
  actions: {
    async getCaracteristics({commit, state}) {
      try {
        const res = await fetch(`https://swapi.dev/api/people/`);
        const json = await res.json();
        console.log('json', json)
        commit('setDados', json)
      } catch (err) {
        console.error('err', err);
      }
    },
    async getNext({commit, state}) {
      try {
        const res = await fetch(state.next);
        const json = await res.json();
        commit('setDados', json)
      } catch (err) {
        console.error('err', err);
      }
    },
    async getPrevious({commit, state}) {
      try {
        const res = await fetch(state.previous);
        const json = await res.json();
        commit('setDados', json)
      } catch (err) {
        console.error('err', err);
      }
    },
    async findPeople ({commit, state}) {
      try {
        let string = state.query;
        const res = await fetch(`https://swapi.dev/api/people/?search=${string}`);
        const json = await res.json();
        commit('setDados', json)
      } catch (err) {
        console.error('err', err);
      }
    },
  }
}


