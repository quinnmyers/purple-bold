import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

export const eventBus = new Vue({
  methods: {
    handleColorUpdate(hexColor, rgbColor) {
      //may want to consider breaking these up to two different events
      //causes some event listeners to fire twice
      this.$emit("colorWasEdited", hexColor);
      this.$emit("hexColorChanged", rgbColor);
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
