<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container">
      <router-link to="/">
        <img src="../assets/logo.png" alt="Things To Do" />
        <h1>{{ usuarioAutenticado ? "Welcome" : "." }}</h1>
      </router-link>
      <button
        v-if="usuarioAutenticado"
        class="btn btn-warning"
        @click="cerrarSesion"
      >
        Cerrar Sesión
      </button>
      <div v-if="!usuarioAutenticado">
        <button class="btn btn-outline-warning">
          <router-link to="/ingreso/">
            Inicia Sesión
          </router-link>
        </button>
        <button class="btn btn-warning ml-3">
          <router-link to="/registro/" style="color: var(--color-negro);">
            Registrate
          </router-link>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["usuarioAutenticado"]),
  },
  methods: {
    ...mapActions(["cerrarSesion"]),
  },
};
</script>

<style lang="scss">
nav {
  a {
    color: var(--color-blanco);
    display: flex;
    align-items: center;
    &:hover {
      color: var(--color-amarillo);
      text-decoration: none;
    }
  }
}
button a {
  &:hover {
    color: var(--color-negro);
  }
}
</style>
