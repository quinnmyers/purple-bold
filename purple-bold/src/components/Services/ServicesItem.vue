<template>
    <div>
        <div class="services__content__container__item">
            <div class="services__content__container__item__container">
                <div class="services__content__container__item__container__left">
                    <h2 class="services__content__container__item__container__left__title"> {{ services.name + "  " + servicesIndex }} </h2>
                    <component :is="servicesImgComponent" :services="services"></component>
                </div>
                <div class="services__content__container__item__container__middle">
                    <div class="services__content__container__item__container__middle--line"></div>
                </div>
                <div class="services__content__container__item__container__right">
                    <ul class="services__content__container__item__container__right__subcategories">
                        <li v-for="sub in services.subCategories" class="services__content__container__item__container__right__subcategories__item">
                            <h3 class="services__content__container__item__container__right__subcategories__item__name"> {{ sub.subName }} </h3>
                            <p class="services__content__container__item__container__right__subcategories__item__description"> {{ sub.subDescription }} </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- <p>{{ services.name }}</p>
        <ul>
            <li v-for="sub in services.subCategories">
                <p> {{ sub.subName }} </p>
                <p> {{ sub.subDescription }} </p>
            </li>
        </ul> -->
    </div>
</template>

<script>
import ServicesWebsites from "./ServicesWebsites.vue";
import ServicesCreative from "./ServicesCreative.vue";
import ServicesBranding from "./ServicesBranding.vue";
import ServicesMarketing from "./ServicesMarketing.vue";

export default {
  props: ["services", "servicesIndex"],
  components: {
    appServicesWebsites: ServicesWebsites,
    appServicesCreative: ServicesCreative,
    appServicesBranding: ServicesBranding,
    appServicesMarketing: ServicesMarketing
  },
  data() {
    return {
      index: this.servicesIndex,
      serviceList: ["Websites", "Creative", "Branding", "Marketing"]
    };
  },
  computed: {
    servicesImgComponent() {
      return `app-services-${this.serviceList[this.index].toLowerCase()}`;
    }
  }
};
</script>

<style scoped>
</style>