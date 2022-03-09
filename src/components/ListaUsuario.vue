<template>
  <h1>Lista de usuários</h1>

  <span v-for="(nome, i) in nomeSelecionados" :key="i">
    {{ nome }}{{ nomeSelecionados.length > 1 ? ", " : "" }}
  </span>

  <div class="lista">
    <div v-for="item in listaPessoas" :key="item.id">
      <Usuario
        @selecionado="adicionaFavorito($event)"
        @removeSelecionado="removeFavorito($event)"
        :usuario="item"
        :isFavorito="isFavorito(item.id)"
      />
    </div>
  </div>
</template>

<script>
  import Usuario from "@/components/Usuario.vue";
  import { computed, ref, onMounted } from "vue";
  import { usuarioStore } from "../store/cadastro";
  import { storeToRefs } from "pinia";

  export default {
    components: {
      Usuario,
    },

    setup() {
      const store = usuarioStore();
      const selecionados = ref([]);
      const { listaPessoas, isFavorito } = storeToRefs(store);

      const nomeSelecionados = computed(() => {
        return selecionados.value.map((x) => `${x.first_name} ${x.last_name}`);
      });

      onMounted(async () => {
        await store.buscaUsuarios("users?page=2");
        listaPessoas.value = store.listaPessoas;
      });

      return {
        listaPessoas,
        nomeSelecionados,
        isFavorito,
        adicionaFavorito: store.adicionaUsuario,
        removeFavorito: store.removeUsuario,
      };
    },
  };
</script>

<style>
  h1 {
    text-align: center;
  }

  .lista {
    display: grid;
    margin: 0 20px;
    grid-template-columns: repeat(4, minmax(200px, 400px));
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
</style>
