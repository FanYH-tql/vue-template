import Vue from "vue";
import Router from "vue-router";
import routes from "./router";
Vue.use(Router);
const router = new Router({
  mode: "history",
  routes
});
router.beforeEach((to, from, next) => {
  next();
  // console.log(to, from, next);
});
router.afterEach((to, from) => {
  console.log(to, from);
});

export default router;
