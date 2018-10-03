<template>
  <div class="services__content__container__item">
      <div class="services__content__container__item__container">
          <div class="services__content__container__item__container__left">
              <h2 class="services__content__container__item__container__left__title"> {{ services.name }} </h2>
              <component :is="servicesImgComponent" :services="services"></component>
          </div>
          <div class="services__content__container__item__container__middle">
              <div class="services__content__container__item__container__middle--arrow"></div>
              <div class="services__content__container__item__container__middle--line"></div>
          </div>
          <div class="services__content__container__item__container__right">
              <ul class="services__content__container__item__container__right__subcategories">
                  <li v-for="sub in services.subCategories" class="services__content__container__item__container__right__subcategories__item">
                    <div class="services__content__container__item__container__right__subcategories__item__title">
                      <h3 class="services__content__container__item__container__right__subcategories__item__title__name"> {{ sub.subName }} </h3>
                      <div class="services__content__container__item__container__right__subcategories__item__title__arrow"></div>
                    </div> 
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

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.services__content__container__item
  width: 880px
  background: lightskyblue
  margin: 60px 0px
  height: 100%
  &__container
    display: flex
    height: 100%
    &__left
      display: flex 
      flex-direction: column
      background: green
      width: 300px
      h2, &__title
        font-family: "Rubik", "Avenir", sans-serif 
        font-weight: $medium
        margin-bottom: 10px
        align-self: flex-end
    &__middle
      display: flex 
      flex-direction: column
      justify-content: center
      &--arrow 
        //this image must be the same stroke thickness as the width of the div next to it "--line"
        position: absolute
        height: 15px
        width: 15px 
        //must be the same as width/height - 1 / 2 (w/h of the SRC IMG)
        margin-left: -6px
        background:
          image: url('../../assets/images/services-arrow.svg')
          repeat: no-repeat
      &--line
      height: 100%
      margin: 0px 50px 
      width: 1px 
      background: $grey 
    &__right 
      flex: 1
      background: orange
      ul, &__subcategories 
        list-style: none
        li, &__item
          &__title 
            display: flex 
            align-items: center
            margin-bottom: 5px
            h3, &__name
              font-family: 'Rubik', 'Avenir', sans-serif 
              font-weight: $normal 
              font-size: 1.4em
            &__arrow
              margin-left: 20px
              height: 23px 
              width: 23px 
              background: red
          p, &__description
            font-family: 'Avenir', sans-serif
            margin-bottom: 20px
            font-size: 0.95em
            line-height: 1.25em



</style>