import { createStore } from "vuex";
import router from "../router";
export default createStore({
  state: {
    tareas: [],
    tarea: {
      id: "",
      name: "",
      description: "",
      time: "",
      categories: [],
      date: "",
    },
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    cargar(state, payload) {
      state.tareas = payload;
    },
    set(state, payload) {
      state.tareas.push(payload);
    },
    eliminar(state, payload) {
      state.tareas = state.tareas.filter((item) => item.id !== payload);
    },
    tarea(state, payload) {
      if (!state.tareas.find((item) => item.id === payload)) {
        router.push("/");
        return;
      }
      state.tarea = state.tareas.find((item) => item.id === payload);
    },
    update(state, payload) {
      state.tareas = state.tareas.map((item) =>
        item.id === payload.id ? payload : item
      );
      router.push("/");
    },
  },
  actions: {
    cerrarSesion({ commit }) {
      commit("setUser", null);
      localStorage.removeItem("usuario");
      router.push("/ingreso");
    },
    async ingresoUsuario({ commit }, usuario) {
      try {
        const res = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC3dzgDYgAZUGZi6kgFKweaH3PlDJS1cvw`,
          {
            method: "POST",
            body: JSON.stringify({
              email: usuario.email,
              password: usuario.password,
              returnSecureToken: true,
            }),
          }
        );
        const userDB = await res.json();
        console.log(userDB);
        if (userDB.error) {
          return console.log(userDB.error);
        }
        commit("setUser", userDB);
        localStorage.setItem("usuario", JSON.stringify(userDB));
        router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
    async registrarUsuario({ commit }, usuario) {
      try {
        const res = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC3dzgDYgAZUGZi6kgFKweaH3PlDJS1cvw`,
          {
            method: "POST",
            body: JSON.stringify({
              email: usuario.email,
              password: usuario.password,
              returnSecureToken: true,
            }),
          }
        );
        const userDB = await res.json();
        console.log(userDB);
        if (userDB.error) {
          console.log(userDB.error);
          return;
        }
        commit("setUser", userDB);
        localStorage.setItem("usuario", JSON.stringify(userDB));
        router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
    async cargarLocalStorage({ commit, state }) {
      if (localStorage.getItem("usuario")) {
        commit("setUser", JSON.parse(localStorage.getItem("usuario")));
      } else {
        return commit("setUser", null);
      }
      try {
        const res = await fetch(
          `https://things-to-do-f934e-default-rtdb.firebaseio.com/tareas/${state.user.localId}.json?auth=${state.user.idToken}`
        );
        const dataDB = await res.json();
        const arrayTareas = [];
        for (let id in dataDB) {
          arrayTareas.push(dataDB[id]);
        }
        commit("cargar", arrayTareas);
      } catch (error) {
        console.log(error);
      }
    },
    async setTareas({ commit, state }, tarea) {
      try {
        const res = await fetch(
          `https://things-to-do-f934e-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(tarea),
          }
        );
        const dataDB = await res.json();
        console.log(dataDB);
      } catch (error) {
        console.error(error);
      }
      commit("set", tarea);
    },
    async deleteTareas({ commit, state }, id) {
      try {
        await fetch(
          `https://things-to-do-f934e-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`,
          {
            method: "DELETE",
          }
        );
        commit("eliminar", id);
      } catch (error) {
        console.log(error);
      }
    },
    setTarea({ commit, state }, id) {
      commit("tarea", id);
    },
    async updateTarea({ commit, state }, tarea) {
      try {
        const res = await fetch(
          `https://things-to-do-f934e-default-rtdb.firebaseio.com/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`,
          {
            method: "PATCH",
            body: JSON.stringify(tarea),
          }
        );
        const dataDB = await res.json();
        commit("update", dataDB);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    usuarioAutenticado(state) {
      return !!state.user;
    },
  },
  modules: {},
});
