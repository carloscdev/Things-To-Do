<template>
  <div class="container">
    <h2>Registrate</h2>
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
        type="password"
        placeholder="Escribe tu Contraseña"
        v-model.trim="pass1"
      />
      <input
        class="form-control form-texto mb-5"
        type="password"
        placeholder="Confirma tu contraseña"
        v-model.trim="pass2"
      />
      <button
        :disabled="bloquear"
        class="btn btn-outline-warning form-control"
        type="submit"
      >
        Registrar
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
      pass1: "",
      pass2: "",
    };
  },
  computed: {
    ...mapState(["error"]),
    bloquear() {
      if (!this.email.includes("@")) {
        return true;
      }
      if (this.pass1.length > 5 && this.pass1 === this.pass2) {
        return false;
      }

      return true;
    },
  },
  methods: {
    ...mapActions(["registrarUsuario"]),
    async procesarFormulario() {
      await this.registrarUsuario({ email: this.email, password: this.pass1 });
      if (this.error.tipo !== null) {
        return;
      }
      this.email = "";
      this.pass1 = "";
      this.pass2 = "";
    },
  },
};
</script>

<style></style>
