<template>
  <div class="container">
    <h2>Ingresar</h2>
    <form class="container" @submit.prevent="procesarFormulario()">
      <div v-if="error.tipo !== null" class="alert alert-danger">
        {{ error.mensaje }}
      </div>
      <input
        class="form-control form-texto mb-5"
        :class="[error.tipo === 'email' ? 'is-invalid' : '']"
        type="email"
        placeholder="Escribe tu Email"
        v-model.trim="email"
      />
      <input
        class="form-control form-texto mb-5"
        :class="[error.tipo === 'password' ? 'is-invalid' : '']"
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
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState(["error"]),
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
    async procesarFormulario() {
      await this.ingresoUsuario({ email: this.email, password: this.password });
      if (this.error.tipo !== null) {
        return;
      }
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style></style>
