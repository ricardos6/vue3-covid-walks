export default {
  // Este hook especifica los componentes usados
  components: {},
  name: "NewWalk",
  methods: {
    onClickAdd() {
      window.location = "/";
    },
  },
  data() {
    return {
      distance: '',
      time: '',
      date: ''
    };
  }
};