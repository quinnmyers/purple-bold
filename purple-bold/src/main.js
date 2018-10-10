import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

export const eventBus = new Vue({
  methods: {
    handleColorUpdate(hexColor, rgbColor) {
      this.$emit("colorWasEdited", hexColor);
      // this.$emit("colorWasEdited", rgbColor);
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
