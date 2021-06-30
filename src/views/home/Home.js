import UserList from "../../components/userList/UserList.vue";
import Card from "../../components/card/Card.vue";
import ActiveWalkDetail from "../../components/activeWalkDetail/ActiveWalkDetail.vue"
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();
    const walks = computed(() => store.state.Home.walks);

    return { walks };
  },
  // Este hook especifica los componentes usados
  components: { Card, UserList, ActiveWalkDetail },
  name: "Home",
  methods: {
    onClickUser(user) {
      window.location = "/friend/" + user.id;
    },
    onClickWalk(walkId) {
      window.location = "/walk/" + walkId;
    },
    onClickNewWalk() {
      window.location = "/new-walk";
    }
  },
  async mounted() {
    await this.$store.dispatch("Home/findUserFriends", this.$store.state.Login.userInfo.login);
  },
  data() {
    return {
      itemsVisible: true
    };
  },
  computed: {
    friends () {
      return this.$store.state.Home.friends
    }
  }
};