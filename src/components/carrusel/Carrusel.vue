<template>
  <div class="container">
    <Carousel>
      <Slide v-for="image in this.images" :key="image.id">
        <div class="image">
          <img :src="image.url" alt="Descripcion de la foto" />
          <p class="legend">Legend {{ image.id }}</p>
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script src="./Carrusel.js"></script>
<style src="./carrusel.scss" lang="scss"></style>