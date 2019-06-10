import { mapState, mapGetters } from "vuex";
const mixin = {
  computed: {
    ...mapState(["appName"]),
    ...mapGetters(["username"])
  }
};

export default mixin;
