<template>
  <div class="container">
    <h2>Ingresar</h2>
    <form class="container" @submit.prevent="procesarFormulario()">
      <input
        class="form-control form-texto mb-5"
        type="email"
        placeholder="Escribe tu Email"
        v-model.trim="email"
      />
      <input
        class="form-control form-texto mb-5"
        type="password"
        placeholder="Escribe tu Contraseña"
        v-model.trim="password"
      />
      <button
        :disabled="bloquear"
        class="btn btn-outline-warning form-control"
        type="submit"
      >
        Ingresar
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    bloquear() {
      if (!this.email.includes("@")) {
        return true;
      }
      if (this.password.length > 5) {
        return false;
      }

      return true;
    },
  },
  methods: {
    ...mapActions(["ingresoUsuario"]),
    procesarFormulario() {
      this.ingresoUsuario({ email: this.email, password: this.password });
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style></style>
