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
  import { computed, onMounted } from "vue";
  import { useStore } from "vuex";

  export default {
    components: {},

    setup() {
      const store = useStore();
      const listaFavoritos = computed(() => store.state.listaFavoritos);

      onMounted(() => {});

      function removeFavorito(idUsuario) {
        store.dispatch("removeFavorito", idUsuario);
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
