import TheHeader from "./components/header/TheHeader.vue";
import { useStore } from "vuex";

export default {
  name: "App",
  // setup se ejecuta antes de que el componente sea creado, una vez se resuelvan las props
  // tampoco se pujede acceder a las variables de data()
  setup() {
    const store = useStore();
    store.dispatch("Home/findWalks");
  },
  components: {
    TheHeader,
  },
};