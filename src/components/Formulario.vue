<template>
  <div class="form-group row form-contenedor">
    <label for="name" class="col-sm-3 col-form-label"
      >Asigna un nombre :
    </label>
    <div class="col-sm-9">
      <input
        type="text"
        class="form-control form-texto"
        id="name"
        v-model.trim="tarea.name"
      />
    </div>
    <label for="name" class="col-sm-3 col-form-label mt-5"
      >Escribe un comentario :
    </label>
    <div class="col-sm-9 mt-5">
      <input
        type="text"
        class="form-control form-texto"
        id="name"
        v-model.trim="tarea.description"
      />
    </div>
    <div class="col-sm-3 mt-5">Elige categoría(s) :</div>
    <div class="col-sm-9 mt-5">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="desarrollo"
          value="Desarrollo"
          v-model="tarea.categories"
        />
        <label class="form-check-label" for="desarrollo">Desarrollo</label>
        <input
          class="form-check-input ml-5"
          type="checkbox"
          id="design"
          value="Diseño"
          v-model="tarea.categories"
        />
        <label class="form-check-label" for="design">Diseño</label>
        <input
          class="form-check-input ml-5"
          type="checkbox"
          id="mkt"
          value="Marketing"
          v-model="tarea.categories"
        />
        <label class="form-check-label" for="mkt">Marketing</label>
      </div>
    </div>
    <div class="col-sm-3 mt-5">Define el tiempo :</div>
    <div class="col-sm-9 mt-5">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          id="Corto"
          value="Corto"
          v-model="tarea.time"
        />
        <label class="form-check-label" for="Corto">Corto (1-2 semanas)</label>
        <input
          class="form-check-input ml-5"
          type="radio"
          id="Mediano"
          value="Mediano"
          v-model="tarea.time"
        />
        <label class="form-check-label" for="Mediano"
          >Mediano (3-4 semanas)</label
        >
        <input
          class="form-check-input ml-5"
          type="radio"
          id="Largo"
          value="Largo"
          v-model="tarea.time"
        />
        <label class="form-check-label" for="Largo">Largo (Más de 1 mes)</label>
      </div>
      <button
        class="btn btn-outline-warning mt-5 form-control"
        type="submit"
        :disabled="bloquear"
      >
        Guardar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tarea: Object,
  },
  computed: {
    bloquear() {
      return this.tarea.name === "" || this.tarea.description === ""
        ? true
        : false;
    },
  },
};
</script>

<style></style>
