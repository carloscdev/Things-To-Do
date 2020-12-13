<template>
  <div class="home__contenedor table-responsive">
    <table class="table table-dark ">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
          <th scope="col">Duración</th>
          <th scope="col">Categoría</th>
          <th scope="col">Fecha Registro</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="t in tareas" :key="t.id">
          <td>{{ t.name }}</td>
          <td>{{ t.description }}</td>
          <td>{{ t.time }}</td>
          <td>{{ t.categories.join(", ") }}</td>
          <td>{{ t.date }}</td>
          <td>
            <button
              @click="deleteTareas(t.id)"
              class="btn btn-outline-danger btn-sm form-control"
            >
              Eliminar
            </button>
            <br />
            <button class="btn btn-warning btn-sm form-control mt-2">
              <router-link
                :to="{
                  name: 'Editar',
                  params: {
                    id: t.id,
                  },
                }"
              >
                Editar
              </router-link>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["tareas"]),
  },
  methods: {
    ...mapActions(["deleteTareas"]),
  },
};
</script>

<style></style>
