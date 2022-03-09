import { createStore } from "vuex";
import { pessoas } from "./mutations-types";

const { ADD_PESSOAS, ADD_FAVORITO, REMOVER_FAVORITO } = pessoas;
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
      const { data } = await req.json();
      commit(ADD_PESSOAS, data);
    },

    adicionaFavorito({ commit }, payload) {
      commit(ADD_FAVORITO, payload);
    },

    removeFavorito({ commit }, payload) {
      commit(REMOVER_FAVORITO, payload);
    },
  },
});

export default store;
