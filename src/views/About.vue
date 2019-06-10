<template>
  <div class="about">
    <h1>{{ appName }}</h1>
    <h1>{{ username }}</h1>
  </div>
</template>
<script>
import axios from "axios";
import mixin from "@/lib/mixin";
import { parse } from "@/lib/util";
import { getUserInfo } from "@/api/user";
export default {
  mixins: [mixin],
  mounted() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      const res = await getUserInfo();
      console.log(res);
    }
  }
}
</script>
