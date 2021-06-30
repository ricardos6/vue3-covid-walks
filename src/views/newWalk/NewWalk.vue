<template>
  <div className="new_walk">
    <form className="new_walk__form" @submit.prevent="this.onClickAdd">
      <span>Distancia: </span>
      <input
        className="new_walk__form__input"
        type="number"
        v-model="distance"
      />
      <span>Tiempo: </span>
      <input
        className="new_walk__form__input"
        type="time"
        placeholder="Tiempo"
        v-model="time"
      />
      <span>Fecha: </span>
      <input
        className="new_walk__form__input"
        type="date"
        placeholder="Fecha"
        v-model="date"
      />
      <p>
        <button className="new_walk__form__button">Añadir</button>
      </p>
    </form>
  </div>
</template>

<script src="./NewWalk.js"></script>
<style src="./newWalk.scss" lang="scss"></style>