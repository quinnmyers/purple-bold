import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

export const eventBus = new Vue({
  methods: {
    handleColorUpdate(color) {
      console.log("this is event bus " + color);
      this.$emit("colorWasEdited", color);
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
