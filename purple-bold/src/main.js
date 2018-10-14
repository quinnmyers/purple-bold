import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { VueMasonryPlugin } from "vue-masonry";

Vue.use(VueMasonryPlugin);

Vue.config.productionTip = false;

export const eventBus = new Vue({
  methods: {
    handleColorUpdate(hexColor, rgbColor) {
      //may want to consider breaking these up to two different events
      //causes some event listeners to fire twice
      this.$emit("colorWasEdited", hexColor);
      this.$emit("hexColorChanged", rgbColor);
    },
    updateCategory(category) {
      this.$emit("categoryWasChanged", category);
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
