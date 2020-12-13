<template>
  <div class="container">
    <h2>Registrate</h2>
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
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      pass1: "",
      pass2: "",
    };
  },
  computed: {
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
    procesarFormulario() {
      this.registrarUsuario({ email: this.email, password: this.pass1 });
      this.email = "";
      this.pass1 = "";
      this.pass2 = "";
    },
  },
};
</script>

<style></style>
