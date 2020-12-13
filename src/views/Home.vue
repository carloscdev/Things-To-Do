<template>
  <div class="home container">
    <h2>Registra tus metas</h2>
    <form @submit.prevent="procesarFormulario()">
      <Formulario :tarea="tarea" />
    </form>
    <hr />
    <h2>Lista de metas</h2>
    <ListaTareas />
  </div>
</template>

<script>
import Formulario from "../components/Formulario.vue";
import { mapActions } from "vuex";
import ListaTareas from "../components/ListaTareas.vue";
const shortid = require("shortid");
const fecha = new Date();
const fechaHoy =
  fecha.getDate() + "-" + (fecha.getMonth() + 1) + "-" + fecha.getFullYear();
export default {
  components: { Formulario, ListaTareas },
  name: "Home",
  data() {
    return {
      tarea: {
        id: "",
        name: "",
        description: "",
        time: "Corto",
        categories: ["Desarrollo"],
        date: fechaHoy,
      },
    };
  },
  created() {
    this.cargarLocalStorage();
  },
  methods: {
    ...mapActions(["setTareas", "cargarLocalStorage"]),
    procesarFormulario() {
      if (this.tarea.name === "" || this.tarea.description === "") {
        alert("No hay datos");
        return;
      }

      this.tarea.id = shortid.generate();
      this.setTareas(this.tarea);

      this.tarea = {
        id: "",
        name: "",
        description: "",
        time: "",
        categories: [],
        date: fechaHoy,
      };
    },
  },
};
</script>
