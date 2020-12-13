<template>
  <div class="container">
    <h2>Editando: {{ tarea.name }}</h2>
    <form @submit.prevent="updateTarea(tarea)">
      <Formulario :tarea="tarea" />
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Formulario from "../components/Formulario.vue";
export default {
  components: { Formulario },
  computed: {
    ...mapState(["tarea"]),
  },
  methods: {
    ...mapActions(["setTarea", "updateTarea"]),
  },
  created() {
    this.setTarea(this.$route.params.id);
  },
};
</script>

<style></style>
