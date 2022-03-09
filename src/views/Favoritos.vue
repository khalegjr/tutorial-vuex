<template>
  <h1>Lista de Favoritos</h1>
  <div class="lista">
    <div v-for="item in listaFavoritos" :key="item.id">
      <div class="card">
        <div class="imagem-container">
          <img :src="item.avatar" alt="imagem avatar" />
        </div>
        <span>{{ item.first_name + " " + item.las_name }}</span>
        <a class="favorito" @click="removeFavorito(item.id)">
          <span>X</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import { usuarioStore } from "../store/usuario";
  import { storeToRefs } from "pinia";

  export default {
    components: {},

    setup() {
      const store = usuarioStore();
      const { listaFavoritos } = storeToRefs(store);

      return {
        listaFavoritos,
        removeFavorito: store.removeUsuario,
      };
    },
  };
</script>

<style scoped>
  .favorito span {
    font-size: 25px;
    color: #f04f47;
    text-align: center;
  }
</style>
