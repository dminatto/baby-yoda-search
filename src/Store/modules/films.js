import {generateCodeFrame} from "vue-template-compiler";

export default {
  namespaced: true,
  state: {
    results: null
  },
  mutations: {
    setResults(state, payload) {
      state.results =  payload.results
    },
    getFilms(state){
      return state.results;
    }
  },
  actions: {
    async findFilms({commit, state}) {
      try {
        const res = await fetch(`https://swapi.dev/api/films/`);
        const json = await res.json();
        commit('setResults', json)
      } catch (err) {
        console.error('err', err);
      }
    }
  }
}
