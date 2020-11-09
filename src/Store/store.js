import Vue from "vue";
import Vuex from "vuex"

import Persona from './modules/persona'
import Films from './modules/films'


Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
      Persona,
      Films
    }
})
