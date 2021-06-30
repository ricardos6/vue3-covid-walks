<template>
  <div id="home" className="home">
    <!-- $emit - Emite un evento que es "capturado" por el componente padre Home-->
    <UserList :users="friends" @click-user="this.onClickUser" />
    <div className="home__list">
      <Card
        v-for="(item, i) in this.walks"
        :key="i"
        :visible="this.itemsVisible"
        :data="item"
        @click-walk="this.onClickWalk"
      />
      <div>
        <ActiveWalkDetail />
      </div>
    </div>
    <button className="button" @click="this.onClickNewWalk">
      Añadir paseo
    </button>
  </div>
</template>

<script src="./Home.js"></script>
<style src="./home.scss" lang="scss"></style>
