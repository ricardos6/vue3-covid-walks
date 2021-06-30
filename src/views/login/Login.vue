<template>
  <div className="login">
    <form
      v-if="!loading"
      className="login__form"
      @submit.prevent="handleSubmit"
    >
      <input
        type="text"
        className="login__form__input"
        v-bind:placeholder="$t('etiquetaUsuario.descripcion')"
        v-model="login"
      />
      <input
        type="password"
        className="login__form__input"
        v-bind:placeholder="$t('etiquetaContraseña.descripcion')"
        v-model="password"
      />
      <button className="login__form__button">Iniciar sesión</button>
      <!-- TODO: <div
        className="login__form__error"
        v-bind:style="[
          error != null
            ? { opacity: 1, height: 'auto' }
            : { opcaity: 0, height: 0 },
        ]"
      > -->
      <!-- Accedemos a la funcion con el nombre errorLogin del hook de computed -->
        <div v-if="errorLogin" style="color:red">          
          Error al iniciar sesión
        </div>
        <!-- <IoIosInformationCircleOutline className="icon" /> -->
        <!-- <span className="message">Error al hacer iniciar sesión</span> -->
      <!-- </div> -->
    </form>

    <!-- TODO: <div v-if="loading" className="login__loading">
      <LottieAnimation animation="{LOTTIE_ANIMATION_TYPE.LOADING}" />
    </div> -->
  </div>
</template>

<script src="./Login.js"></script>
<style src="./login.scss" lang="scss"></style>
