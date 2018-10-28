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
                :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '100%', backgroundSize: 'contain', backgroundPosition: 'bottom' }"
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
                  <p>{{ service }}&nbsp; &nbsp;</p>
               </li>
             </ul>
            </div>
            <div class="portfolio__item__overlay__modal__right__info--description">
              {{ portfolioPiece.description }}
            </div>
          </div>
        <!-- need to make this visible only if the type of the piece is a website -->
          <div class="portfolio__item__overlay__modal__right__link">
            <button class="portfolio__item__overlay__modal__right__link--button" type="button">
              <a :href="`http://${portfolioPiece.siteLink}`" target="_blank">Visit Live Site</a>
            </button>
          </div>
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
      modalLiveLinkButtonText: "Visit Live Site",
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
@import '../../normalize.scss'
@import '../../base.sass'

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
    z-index: 1000
    &__modal 
        display: flex 
        justify-content: space-between
        align-items: center
        border-radius: 3px
        height: 580px 
        width: 1000px
        background: white
        padding: 20px 20px
        @include edgesnap 
          width: 90%
        @include tablet-portrait 
          height: 500px
        @include tablet-phone 
          height: auto
          flex-direction: column
        &__left, &__right 
          background: pink 
          height: 100%
          width: 49%
          @include tablet-phone 
            width: 100%
        &__left
          background: pink
          
          &__container
            display: flex 
            flex-direction: column
            justify-content: space-between
            width: 100% 
            height: 100% 
            //background: lightskyblue
            // @include tablet-phone 
            //   flex-direction: row 
            //   width: 100%
            &__image
              display: flex 
              justify-content: center 
              align-items: flex-start
              width: 100% 
              flex: grow
              background: orange
              @include phone-large 
                height: 200px
                img 
                  height: 200px
            &__lightbox 
              display: flex
              width: 100%
              height: 30%
              @include tablet-portrait 
                height: 20%
              @include tablet-phone 
                height: 80px
                background: red 
                margin-top: 15px 
                margin-bottom: 20px
              @include phone 
                margin-top: 0px 
              .tiny__slider
                width: 100% 
                overflow: hidden
                height: 80px
              .image 
                margin: 0px 3px
        &__right 
          display: flex
          flex-direction: column 
          justify-content: space-between
          font-size: 12pt
          &__info 
            display: flex 
            flex-direction: column
            @include tablet-portrait 
              font-size: 10pt 
            @include phone-large 
              font-size: 9pt
            &--name 
              font-family: $mainfont
              font-size: 1.4em
              margin-bottom: 0.2em
              h3 
                font-weight: $normal
            &--services
              font-family: $subfont
              font-size: 0.9em
              color: grey
              margin-bottom: 2.1em
              ul 
                list-style: none
                li
                  display: inline-block
              @include phone-large 
                margin-bottom: 15px
            &--description
              display: flex  
              font-family: $subfont 
              font-size: 0.95em
              overflow: scroll
              margin-bottom: 30px
              @include phone-large 
                margin-bottom: 15px
              @include phone 
                max-height: 120px
                overflow: scroll
          &__link, a 
            color: rgb(240,129,148)
            text-decoration: none
            a:visited 
              color: rgb(240,129,148)
              text-decoration: none
            &--button
              display: flex 
              flex-direction: column 
              justify-content: center
              align-items: center
              color: rgb(240,129,148)
              height: 45px
              width: 100%
              border: .08em solid rgb(240,129,148)
              border-radius: 3px
              font-size: .9em
              letter-spacing: .05em
              font-weight: $light
              @include phone-large 
                height: 35px 
                font-size: 0.8em

                

.fade-enter-active, .fade-leave-active 
  transition: opacity .5s

.fade-enter, .fade-leave-to 
  opacity: 0

</style>