import { createStore } from "vuex";

const store = createStore({
  state: {
    listaPessoas: [
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
      {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
      },
    ],

    listaFavoritos: [
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
    ],
  },
  getters: {
    totalFavoritos(state) {
      return state.listaFavoritos.length;
    },
  },
  mutations: {},
  actions: {},
});

export default store;
