<template>
  <div v-if="isMounted">
    <li v-for="(sub, index) in service.subCategories" class="services__content__container__item__container__right__subcategories__item">
      <div class="services__content__container__item__container__right__subcategories__item__title">
        <h3 class="services__content__container__item__container__right__subcategories__item__title__name" 
        @click="expandSubComponent(index)" :ref="'title-' + sub.recolor"> {{ sub.subName }} </h3>
        <div class="services__content__container__item__container__right__subcategories__item__title__arrow" :class="{ expanded: servicesArray[index].expanded }"></div>
      </div>
        <vue-slide-up-down :active="servicesArray[index].expanded" :duration="600" class="services__content__container__item__container__right__subcategories__item__description">
         <div class="services__content__container__item__container__right__subcategories__item__description">
          <p class="services__content__container__item__container__right__subcategories__item__description__text " :ref="'description-' + index "> {{ sub.subDescription }} </p>
      </div>
      </vue-slide-up-down>
    </li>
  </div>
</template>

<script>
import VueSlideUpDown from "vue-slide-up-down";
import { eventBus } from "../../main";

export default {
  data() {
    return {
      isMounted: true,
      counter: 0
    };
  },
  props: ["service", "services", "servicesIndex", "servicesArray"],
  components: {
    VueSlideUpDown: VueSlideUpDown
  },
  methods: {
    expandSubComponent(index) {
      this.servicesArray[index].expanded = !this.servicesArray[index].expanded;
    },
    updateColor(color) {
      const counter = this.services[1].subCategories.length;
      if (this.$refs["title-true"]) {
        let limit = this.$refs["title-true"].length;
        let elementId = Math.floor(this.getRandomNumber(0, limit));
        if (this.counter < limit) {
          const el = this.$refs["title-true"][this.counter];
          el.style.color = color;
          this.counter++;
        } else {
          this.$refs["title-true"][0].style.color = "#000000";
          this.$refs["title-true"][1].style.color = "#000000";
          this.$refs["title-true"][2].style.color = "#000000";
          this.counter = 0;
        }
      }
    },
    getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    },
    mountFunction() {
      this.isMounted = true;
    }
  },
  created() {
    eventBus.$on("colorWasEdited", color => {
      this.updateColor(color);
    });
  },
  mounted() {
    this.mountFunction();
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.services__content__container__item__container__right__subcategories
  li, &__item
    &__title 
      display: flex 
      align-items: center
      margin-bottom: 5px
      @include tablet-portrait 
        justify-content: space-between
        //background: pink
      h3, &__name
        font-family: 'Rubik', 'Avenir', sans-serif 
        font-weight: $normal 
        font-size: 1.5em
        cursor: pointer
      &__arrow
        margin-left: 20px
        height: 20px 
        width: 20px
        //transform: rotate(0deg)
        //transition: transform 0.5s forwards
        background: 
          image: url('../../assets/images/services-title-arrow.svg')
          position: center 
          size: contain
          repeat: no-repeat
        &.expanded 
          animation: arrow-grow 0.5s forwards
    &__description
      //background: yellow
      overflow: hidden 
      height: auto
      width: 100%
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
        height: auto
        transition: all .5s ease
        //removed for library testing
        //transform: translateY(-100%)
        &.expanded 
          color: red
          max-height: 600px
          transform: translateY(0px)
              
@keyframes arrow-grow 
  0% 
    transform: scale(1) rotate(0deg)
  50% 
    transform: scale(1.2)
  100%
    transform: scale(1) rotate(-180deg)
</style>