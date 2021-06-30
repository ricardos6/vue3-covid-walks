import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default {
  // Este hook especifica los componentes usados
  components: { Carousel, Slide, Pagination },
  name: "Carrusel",
  data() {
    return {
      id: this.$route.params.id,
      images: [
        {
          id: 1,
          url: 'https://www.runtastic.com/blog/wp-content/uploads/2017/12/ES_ActivityTab_Yellow_And-1.png'
        },
        {
          id: 2,
          url: 'https://www.runtastic.com/blog/wp-content/uploads/2017/12/ES_Progress_DetailView_And-2.png'
        }
      ]
    };
  }
};