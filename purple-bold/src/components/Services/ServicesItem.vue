<template>
  <div class="services__content__container__item" v-if="isMounted">
      <div class="services__content__container__item__container">
          <div class="services__content__container__item__container__left">
              <h2 class="services__content__container__item__container__left__title"> {{ service.name }} </h2>
              <component :is="servicesImgComponent" 
                         :service="service"
                         :serviceName="serviceName">
                         </component>
          </div>
          <div class="services__content__container__item__container__middle">
              <div class="services__content__container__item__container__middle--arrow"></div>
              <div class="services__content__container__item__container__middle--line"></div>
          </div>
          <div class="services__content__container__item__container__right">
            <ul class="services__content__container__item__container__right__subcategories">
              <app-services-sublist :service="service" 
                                    :services="services" 
                                    :servicesIndex="index" 
                                    :servicesArray="servicesArray"
                                    :serviceName="serviceName"
                                    :ref="serviceName">
                                    </app-services-sublist>
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
  props: [
    "service",
    "services",
    "servicesIndex",
    "servicesArray",
    "serviceName"
  ],
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
      serviceList: ["Websites", "Creative", "Branding", "Marketing"],
      isMounted: false
    };
  },
  methods: {
    //each p description in right div gets a ref "description-index"
    //this function targets the same p ref as the index of the header clicked and gives it a class or removes a class
    getDescriptionHeight(index) {
      const el = event.target;
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
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.services__content__container__item
  width: 880px
  //background: lightskyblue
  margin: 50px 0px
  height: 100%
  @include edgesnap 
    width: 100%
    padding: 0px 20px
  @include tablet-portrait 
    margin: 50px 0px
  @include phone-small 
    padding: 0px
    margin: 40px 0px
  &__container
    display: flex
    align-items: center
    height: 100%
    @include tablet-portrait 
      flex-direction: column 
      align-items: center
      height: auto
    &__left
      display: flex
      flex-direction: column
      align-items: right
      width: 300px
      @include tablet-portrait 
        width: 100%
        margin-bottom: 20px 
        align-items: center
        width: auto 
      h2, &__title
        font-family: "Rubik", "Avenir", sans-serif 
        font-weight: 400
        font-size: 1.7em
        margin-bottom: 10px
        align-self: flex-end
        @include tablet-portrait 
          align-self: center
          margin-bottom: 20px
        @include phone-large 
          align-self: flex-start
    &__middle
      display: flex 
      flex-direction: column
      justify-content: center
      @include tablet-portrait 
        align-items: center
      // &--arrow 
      //   //this image must be the same stroke thickness as the width of the div next to it "--line"
      //   position: absolute
      //   height: 15px
      //   width: 15px 
      //   //must be the same as width/height - 1 / 2 (w/h of the SRC IMG)
      //   margin-left: -6px
      //   background:
      //     image: url('../../assets/images/services-arrow.svg')
      //     repeat: no-repeat
      //   @include tablet-portrait 
      //     transform: rotate(90deg)
      //     background-position: top
      //     margin-left: 0px
      //     margin-top: -4px
      &--line
      height: 100%
      margin: 0px 50px 
      width: 1px
      border-right: .12em solid $light-grey
      @include edgesnap 
        margin: 0px 25px
      @include tablet-portrait 
        transform: rotate(-180deg)
        width: 100%
        border-right: none
        border-bottom: 1px solid $light-grey
        margin: 15px 0px
        //background: yellow
    &__right 
      flex: 1
      //background: orange
      @include edgesnap 
        width: 100% 
      @include tablet-portrait 
        width: auto
        margin-top: 20px
    &__left, &__middle, &__right 
      @include tablet-portrait
        width: 60%
      @include tablet-phone 
        width: 100%
      ul, &__subcategories 
        display: flex 
        flex-direction: column 
        justify-content: center
        height: 100%
        list-style: none
                


</style>