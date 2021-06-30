export default {
  name: "Login",
  // En este hook no existe la referencia this
  // Se usa para inicializar los datos del componente
  setup() {},
  data() {
    return {
      login: "",
      password: ""
    };
  },
  // Este hook especifica los componentes usados
  components: {},
  // Este hook nos permite ocultar logica
  computed: {
    // Aqui lo usamos para obtener el estado de Vuex
    errorLogin () {
      return this.$store.state.Login.error
    },
    loading () {
      return this.$store.state.Login.loading
    }
  },
  methods: {
    // Lanzamos la accion de login pasandole la info
    // que llamara al backend
    async handleSubmit() { 
      await this.$store
        .dispatch("Login/login", {
          login: this.login,
          password: this.password,
        })
        .then(() => {
          if (!this.$store.state.Login.error) {
            window.location = "/";
          }
        });
    },
  }
};