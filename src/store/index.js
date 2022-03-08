import { createStore } from "vuex";
import { pessoas } from "./mutations-types";

const { ADD_PESSOAS } = pessoas;
const store = createStore({
  state: {
    listaPessoas: [],

    listaFavoritos: [],
  },
  getters: {
    totalFavoritos(state) {
      return state.listaFavoritos.length;
    },

    isFavorito: (state) => (id) => {
      return state.listaFavoritos.some((x) => x.id === id);
    },
  },
  mutations: {
    ADD_FAVORITO(state, payload) {
      const usuarioSelecionado = state.listaPessoas.find(
        (x) => x.id === payload
      );
      state.listaFavoritos = [...state.listaFavoritos, usuarioSelecionado];
    },

    REMOVER_FAVORITO(state, payload) {
      state.listaFavoritos = state.listaFavoritos.filter(
        (x) => x.id !== payload
      );
    },

    ADD_PESSOAS(state, payload) {
      state.listaPessoas = payload;
    },
  },
  actions: {
    async adicionaPessoas({ commit }, payload) {
      const req = await fetch(`https://reqres.in/api/${payload}`);
      const pessoas = await req.json();
      commit(ADD_PESSOAS, pessoas);
    },
  },
});

export default store;
