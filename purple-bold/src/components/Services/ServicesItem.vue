<template>
  <div class="services__content__container__item">
      <div class="services__content__container__item__container">
          <div class="services__content__container__item__container__left">
              <h2 class="services__content__container__item__container__left__title"> {{ service.name }} </h2>
              <component :is="servicesImgComponent" :service="service"></component>
          </div>
          <div class="services__content__container__item__container__middle">
              <div class="services__content__container__item__container__middle--arrow"></div>
              <div class="services__content__container__item__container__middle--line"></div>
          </div>
          <div class="services__content__container__item__container__right">
            <ul class="services__content__container__item__container__right__subcategories">
              <app-services-sublist :service="service" :servicesIndex="index" :servicesArray="servicesArray"></app-services-sublist>
            </ul>
          </div>
      </div>
  </div>
</template>

<script>
import ServicesWebsites from "./ServicesWebsites.vue";
import ServicesCreative from "./ServicesCreative.vue";
import ServicesBranding from "./ServicesBranding.vue";
import ServicesMarketing from "./ServicesMarketing.vue";
import ServicesSublist from "./ServicesSublist.vue";
import VueSlideUpDown from "vue-slide-up-down";

export default {
  props: ["service", "servicesIndex", "servicesArray"],
  components: {
    appServicesWebsites: ServicesWebsites,
    appServicesCreative: ServicesCreative,
    appServicesBranding: ServicesBranding,
    appServicesMarketing: ServicesMarketing,
    appServicesSublist: ServicesSublist,
    VueSlideUpDown: VueSlideUpDown
  },
  data() {
    return {
      index: this.servicesIndex,
      active: [false, false, false],
      serviceList: ["Websites", "Creative", "Branding", "Marketing"]
    };
  },
  methods: {
    //each p description in right div gets a ref "description-index"
    //this function targets the same p ref as the index of the header clicked and gives it a class or removes a class
    getDescriptionHeight(index) {
      const el = event.target;
      //console.log(index.toString());
      const targetIndex = index;
      const expansionTarget = this.$refs[`description-${index.toString()}`][0];
      if (expansionTarget.classList.contains("expanded")) {
        expansionTarget.classList.remove("expanded");
      } else {
        expansionTarget.classList.add("expanded");
      }
    }
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
              cursor: pointer
            &__arrow
              margin-left: 20px
              height: 23px 
              width: 23px 
              background: red
              &.expanded 
                background: green
          &__description
            background: yellow
            overflow: hidden 
            height: auto
            width: 100%
            transition: all .5s ease
            &.expanded 
              height: auto
            &__text
              display: flex
              font-family: 'Avenir', sans-serif
              margin-bottom: 20px
              font-size: 0.95em
              line-height: 1.25em
              overflow: hidden
              color: black
              max-height: 55px
              transition: all .5s ease
              transform: translateY(-100%)
              &.expanded 
                color: red
                max-height: 600px
                transform: translateY(0px)
                


</style>