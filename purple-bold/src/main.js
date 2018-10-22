import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { VueMasonryPlugin } from "vue-masonry";
import Lightbox from "vue-pure-lightbox";

Vue.use(VueMasonryPlugin);
Vue.use(Lightbox);

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
    },
    openModal(index) {
      this.$emit("itemSelected", index);
    },
    selected(bool) {
      this.$emit("selected", bool);
    },
    closeModal(bool) {
      this.$emit("selected", bool);
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
