<template>
  <transition name="fade">
    <div class="portfolio__item__overlay" v-if="itemSelected" @click.self='closeModal'>
    <div class="portfolio__item__overlay__modal">
      <div class="portfolio__item__overlay__modal__left">
        <div class="portfolio__item__overlay__modal__left__container">
          <div class="portfolio__item__overlay__modal__left__container__image">
            <img :src="portfolioPiece.mainImg.src" :alt="portfolioPiece.mainImg.alt">
          </div>
            <div class="portfolio__item__overlay__modal__left__container__lightbox">
              <gallery :images="images" :index="index" @close="index = null"></gallery>
              <div
                class="image"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '100%', backgroundSize: 'contain' }"
                >
              </div>
            </div>
          </div>
        </div>
        <div class="portfolio__item__overlay__modal__right">
          <div class="portfolio__item__overlay__modal__right__info">
            <div class="portfolio__item__overlay__modal__right__info--name">
              <h3>
                {{ portfolioPiece.name }}
              </h3>
            </div>
           <div class="portfolio__item__overlay__modal__right__info--services">
             <ul>
                <li v-for="(service, index) in portfolioPiece.services" :key="index">
                  <p>{{ service }}</p>
               </li>
             </ul>
            </div>
            <div class="portfolio__item__overlay__modal__right__info--description">
              {{ portfolioPiece.description }}
            </div>
          </div>
        <!-- need to make this visible only if the type of the piece is a website -->
          <div class="portfolio__item__overlay__modal__right__link"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import VueGallery from "vue-gallery";
import { eventBus } from "../../main";

export default {
  props: ["portfolioPiece", "selected", "imageArray"],
  components: {
    gallery: VueGallery
  },
  data() {
    return {
      images: [],
      itemSelected: false,
      index: null
    };
  },
  methods: {
    fillImageArray() {
      // this.images = [...this.portfolioPiece.altImages];
      const newArray = [...this.imageArray];
      newArray.forEach(image => {
        this.images.push(image.src);
      });
      console.log(this.images);
    },
    closeModal() {
      eventBus.selected(false);
    }
  },
  // created() {
  //   eventBus.$on("selected", bool => {
  //     this.itemSelected = bool;
  //   });
  // },
  watch: {
    imageArray: function() {
      this.images = [];
      const newArray = [...this.imageArray];
      newArray.forEach(image => {
        this.images.push(image.src);
      });
      console.log(this.images);
    },
    itemSelected: function() {
      if (this.itemSelected) {
        const el = document.getElementsByTagName("body")[0];
        el.style.height = "100vh";
        el.style.overflow = "hidden";
      } else {
        const el = document.getElementsByTagName("body")[0];
        el.style.height = "auto";
        el.style.overflow = "auto";
      }
    }
  },
  mounted() {
    this.fillImageArray();
    this.itemSelected = this.selected;
    eventBus.$on("selected", bool => {
      this.itemSelected = bool;
    });
  }
};
</script>

<style scoped lang="sass">
@import '../../tnsCss.sass'

.image 
  float: left
  background-size: cover
  background-repeat: no-repeat
  background-position: center center
  border: 1px solid #ebebeb
  margin: 5px
.portfolio__item__overlay
    height: 100vh 
    width: 100vw 
    background: rgba(0,0,0,0.5)
    display: flex
    justify-content: center 
    align-items: center
    transform: translate(-50%, -50%)
    position: fixed
    top: 50%
    left: 50%
    &__modal 
        display: flex 
        justify-content: space-between
        align-items: center
        border-radius: 3px
        height: 580px 
        width: 1000px
        background: white
        padding: 20px 20px
        &__left, &__right 
          background: pink 
          height: 100%
          width: 49%
        &__left
          background: pink
          &__container
            display: flex 
            flex-direction: column
            width: 100% 
            height: 100% 
            //background: lightskyblue
            &__image
              display: flex 
              justify-content: center 
              align-items: flex-start
              width: 100% 
              height: 70% 
              background: orange
            &__lightbox 
              display: flex
              width: 100%
              height: 30% 
              // background: khaki
              .tiny__slider
                width: 100% 
                overflow: hidden
                height: 80px
        &__right 
          display: flex
          &__info 
            &--name 
            &--services
              ul 
                list-style: none
                li
                  display: inline-block
            &--description

.fade-enter-active, .fade-leave-active 
  transition: opacity .5s

.fade-enter, .fade-leave-to 
  opacity: 0

</style>