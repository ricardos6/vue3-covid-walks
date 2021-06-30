<template>
  <!-- $emit - Emite un evento que es "capturado" por el componente padre Home-->
  <div
    v-bind:class="this.visible ? 'card visible' : 'card'"
    @click="$emit('click-walk', this.data.id)"
  >
    <div class="content">{{ this.data.name }}</div>
    <div class="options">
      <div>{{ $t("elemento1.descripcion") }}</div>
      <div>{{ $t("elemento2.descripcion") }}</div>
      <div>{{ $t("elemento3.descripcion") }}</div>
    </div>
  </div>
</template>

<script src="./Card.js"></script>
<style src="./card.scss" lang="scss"></style>

