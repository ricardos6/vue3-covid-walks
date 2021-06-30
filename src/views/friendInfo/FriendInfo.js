export default {
  name: "FriendInfo",
  methods: {
    onClickFriendInfo() {
      window.location = '/';
    }
  },
  data() {
    return {
      id: this.$route.params.id
    };
  }
};