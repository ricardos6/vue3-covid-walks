import Carrusel from "../../components/carrusel/Carrusel.vue";
import {
  ref
} from 'vue'

export default {
  name: "WalkInfo",
  // Este hook especifica los componentes usados
  components: {
    Carrusel
  },
  setup() {
    const center = ref([40, 40])
    const projection = ref('EPSG:4326')
    const zoom = ref(8)
    const rotation = ref(0)
    return {
      center,
      projection,
      zoom,
      rotation
    }
  }
};