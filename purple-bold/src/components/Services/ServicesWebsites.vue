<template>
<div class="websites">
 <div class="websites__container" v-if="isMounted">
    <div class="websites__container__editor">
      <div class="websites__container__editor__top">
        <div class="websites__container__editor__top__nav">
          <div class="websites__container__editor__top__nav--red"></div>
          <div class="websites__container__editor__top__nav--yellow"></div>
          <div class="websites__container__editor__top__nav--green"></div>
        </div>
      </div>
      <div class="websites__container__editor__main">
        <div class="websites__container__editor__main__numbers">
          <ul class="websites__container__editor__main__numbers__list">
            <li class="websites__container__editor__main__numbers__list__item"
                v-for="number in sideNumberArray">{{ number }}</li>
          </ul>
        </div>
        <img class="websites__container__editor__main--codeblock" 
             :src="codeBlockImage.src" 
             :alt="codeBlockImage.alt"
             > 
      </div>
    </div>
  </div>

</div>
 
</template>

<script>
export default {
  data() {
    return {
      isMounted: false,
      sideNumberArray: [],
      codeBlockImage: {
        src: require("../../assets/images/websites-code-block.svg"),
        alt: "programming code inside of a text editor"
      }
    };
  },
  props: ["service"],
  methods: {
    fillNumbersArray() {
      let counter = 1;
      let numberOfSideNumbers = 12;
      while (counter <= numberOfSideNumbers) {
        this.sideNumberArray.push(counter.toString());
        counter++;
      }
      console.log(this.sideNumberArray);
    }
  },
  mounted() {
    this.isMounted = true;
    this.fillNumbersArray();
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

//upper left nav item colors
$red: #FF564F
$yellow: #FFB62A
$green: #25C63A

//general items 
$border-radius: 3.5px
$nav-circle-size: .45em

//dark color themes
$topbar-dark: #191d33
$editor-dark: #1F243D
$numbers-dark: #5A639A



.websites__container 
  display: flex
  width: 300px 
  height: 185px
  box-shadow: 0px 0px 15px 4px rgba(235,235,235,1)
  border-radius: $border-radius
  &__editor 
    background: $editor-dark
    height: 100% 
    width: 100%
    border-radius: $border-radius
    &__top 
      //must be the same as the height of the .main div of editor
      height: 12%
      background: $topbar-dark
      border-top-left-radius: $border-radius
      border-top-right-radius: $border-radius
      &__nav 
        height: 100%
        display: flex
        align-items: center
        &--red, &--yellow, &--green
          background: pink 
          height: $nav-circle-size
          width: $nav-circle-size
          border-radius: 100%
          margin-left: .225em
          &:nth-child(1)
            margin-left: 10px
        &--red 
          background: $red
        &--yellow
          background: $yellow
        &--green
          background: $green 
    &__main 
      display: flex
      //must be the same as the .top height %
      height: calc(100% - 12%)
      &__numbers
        display: flex
        height: 100%
        align-items: center
        justify-content: center
        &__list
          margin-left: 13px
          list-style: none
          &__item
            color: $numbers-dark
            font-size: 0.55em 
            font-family: "Inconsolata", sans-serif
            margin: 2px 0px
      &--codeblock, img 
        align-self: flex-start
        margin-top: 10px 
        margin-left: 10px
        height: 106px

</style>  
