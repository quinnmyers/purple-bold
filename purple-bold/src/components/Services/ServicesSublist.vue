<template>
  <div>
    <li v-for="(sub, index) in service.subCategories" class="services__content__container__item__container__right__subcategories__item">
      <div class="services__content__container__item__container__right__subcategories__item__title">
        <h3 class="services__content__container__item__container__right__subcategories__item__title__name" 
        @click="expandSubComponent(index)"> {{ sub.subName }} </h3>
        <div class="services__content__container__item__container__right__subcategories__item__title__arrow expanded"><p>V</p></div>
      </div>
      <template v-if="testing">
        <vue-slide-up-down :active="servicesArray[index].expanded" :duration="600" class="services__content__container__item__container__right__subcategories__item__description">
         <div class="services__content__container__item__container__right__subcategories__item__description">
          <p class="services__content__container__item__container__right__subcategories__item__description__text " :ref="'description-' + index "> {{ sub.subDescription }} </p>
      </div>
      </vue-slide-up-down>
      </template>
    </li>
  </div>
</template>

<script>
import VueSlideUpDown from "vue-slide-up-down";

export default {
  data() {
    return {
      testing: false
    };
  },
  props: ["service", "servicesIndex", "servicesArray"],
  components: {
    VueSlideUpDown: VueSlideUpDown
  },
  methods: {
    expandSubComponent(index) {
      this.servicesArray[index].expanded = !this.servicesArray[index].expanded;
    },
    mountFunction() {
      this.testing = true;
    }
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
        background: pink
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
        height: auto
        transition: all .5s ease
        //removed for library testing
        //transform: translateY(-100%)
        &.expanded 
          color: red
          max-height: 600px
          transform: translateY(0px)
              

</style>