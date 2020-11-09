import {generateCodeFrame} from "vue-template-compiler";

export default {
  namespaced: true,
  state: {
    url: '',
    entries: {
      name: '',
      year: '',
    }
  },
  mutations: {
    async setUrl(state, payload) {
      state.url = payload.url;
    },
    setDados(state, payload) {
      state.entries.name = payload.title;
      state.entries.year = payload.year;
    }
  },
  actions: {
    async getFilms({commit, state}) {
      try {
        let a = `${state.url}`;
        console.log(a)
        const res = await fetch(a);
        const json = await res.json();
        console.log('json', json)
        commit('setDados', json)
      } catch (err) {
        console.error('err', err);
      }
    }
  }
}
