<template>
  <div id="userList" className="users">
    <div
      v-for="(user, i) in this.users"
      :key="i"
      class="user"
      @click="() => this.$emit('click-user', user)"
    >
      <img
        :src="user.image"
        v-bind:class="user.status == 'online' ? 'image active' : 'image'"
        alt="Foto del usuario "
      />
      <span class="name">{{ user.name }}</span>
    </div>
  </div>
</template>

<script src="./UserList.js"></script>
<style src="./userList.scss" lang="scss"></style>