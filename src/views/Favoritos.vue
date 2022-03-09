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
  import { onMounted, ref } from "vue";
  import { usuarioStore } from "../store/usuario";

  export default {
    components: {},

    setup() {
      const store = usuarioStore();
      const listaFavoritos = ref([]);

      onMounted(() => {
        listaFavoritos.value = store.listaFavoritos;
      });

      function removeFavorito(idUsuario) {
        listaFavoritos.value = listaFavoritos.value.filter(
          (x) => x.id !== idUsuario
        );
      }

      return {
        listaFavoritos,
        removeFavorito,
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
