<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
import { mapActions } from "vuex";
export default {
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(["cargarLocalStorage"]),
  },
  created() {
    this.cargarLocalStorage();
  },
};
</script>
<style lang="scss">
:root {
  --color-negro: #15191d;
  --color-blanco: #e0e0e0;
  --color-amarillo: #ffc107;
}
html {
  font-size: 62.5%;
}
body {
  background-color: var(--color-negro);
  color: var(--color-blanco);
  font-size: 1.5rem;
}
a {
  text-decoration: none;
  color: var(--color-negro);
  &:hover {
    color: var(--color-negro);
    text-decoration: none;
  }
}
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 3rem;
  position: relative;
  margin: 5rem 0;
  &:before {
    position: absolute;
    content: "";
    bottom: -2rem;
    left: 0;
    width: 10%;
    height: 1rem;
    border-radius: 2rem;
    background-color: var(--color-amarillo);
  }
}
button {
  font-size: 2rem !important;
}
/* #nav {
  &.router-link-exact-active {
    color: #42b983;
  }
} */

.form-texto {
  background-color: transparent;
  padding: 1.5rem;
  color: var(--color-blanco);
  font-size: 2rem;
}
</style>
