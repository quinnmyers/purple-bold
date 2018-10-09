<template>
    <div v-if="isMounted">
        <div class="branding__container">
          <div class="branding__container__left">
            <div class="branding__container__left__swatch" ref="left-swatch">
              <template v-for="(smallSwatch, index) in leftSmallSwatches">
                <div class="branding__container__left__swatch--small" :ref="`${serviceName}${index}`"></div>
              </template>
            </div> 
            <div class="branding__container__left--hex"></div> 
            <div class="branding__container__left--rgb"></div>
          </div>
          <div class="branding__container__middle">
            <div class="branding__container__middle--swatch" ref="middle-swatch"></div>
            <div class="branding__container__middle--hex"></div> 
            <div class="branding__container__middle--rgb"></div>
          </div>
          <div class="branding__container__right">
            <div class="branding__container__right--big-heading"><p>Big Heading</p></div>
            <div class="branding__container__right--heading"><p>Heading</p></div>
            <div class="branding__container__right--subheading" ref="subheading"><p>Subheading</p></div>
            <div class="branding__container__right--bodytext"><p>Body Text</p></div>
            <div class="branding__container__right--caption"><p>Caption</p></div>
            <div class="branding__container__right--captionuppercase"><p>UPPERCASE</p></div>
            <div class="branding__container__right--label"><p>Label</p></div>
            <div class="branding__container__right--hyperlink" ref="hyperlink"><p>Hyperlink</p></div>
          </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: ["service", "serviceName"],
  data() {
    return {
      isMounted: false,
      leftSwitch: {
        background: "#433F4C"
      },
      leftSmallSwatches: [
        {
          background: "#5C5C60"
        },
        {
          background: "#858F91"
        },
        {
          background: "#BDBDBE"
        },
        {
          background: "#E5E5E6"
        }
      ],
      middleSwatch: {
        background: "#7CBDF1"
      }
    };
  },
  methods: {
    styleSmallSwatches() {
      const limit = this.leftSmallSwatches.length;
      let counter = 0;
      while (counter < limit) {
        const el = this.$refs[`${this.serviceName}` + counter][0];
        el.style.background = this.leftSmallSwatches[counter].background;
        counter++;
      }
    },
    styleText() {
      const link = this.$refs["hyperlink"];
      link.style.color = this.middleSwatch.background;
      const subHeading = this.$refs["subheading"];
      subHeading.style.color = this.middleSwatch.background;
    },
    updateColor(color) {
      const el = this.$refs["middle-swatch"];
      el.style.background = color;
      const link = this.$refs["hyperlink"];
      link.style.color = color;
      const subHeading = this.$refs["subheading"];
      subHeading.style.color = color;
    }
  },
  created() {
    eventBus.$on("colorWasEdited", color => {
      this.updateColor(color);
    });
  },
  mounted() {
    this.isMounted = true;
    this.$nextTick(this.styleSmallSwatches);
    this.$nextTick(this.styleText);
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

div 
  .branding__container
    display: flex
    justify-content: space-between
    width: 300px 
    height: 160px
    &__left
      display: flex 
      width: 28%
      &__swatch 
        display: flex
        flex-direction: column
        justify-content: flex-end
        align-items: flex-end
        width: 100%
        background: #433F4C
        height: 130px 
        border-radius: 7px
        &--small 
          height: 12px 
          width: 32px 
          border-radius: 2px 
          margin: 2px 5px  
          background: red
          &:nth-last-child(1)
            margin-bottom: 6px
        &--1
        &--2
        &--3
        &--4
      &--hex 
      &--rgb     
    &__middle
      display: flex 
      width: 28%
      &--swatch
        display: flex 
        width: 100%
        background: #7CBDF1
        height: 130px
        border-radius: 7px 
      &--hex 
      &--rgb
    &__right
      display: flex 
      flex-direction: column
      justify-content: space-between
      width: 28% 
      height: 100% 
      font-family: 'Helvetica', sans-serif
      &--big-heading
        font-weight: bold
        font-size: .9em
        color: black
      &--heading
        font-size: 0.8em
        font-weight: bold
      &--subheading
        font-size: 0.6em
        font-weight: bold
      &--bodytext
        font-size: 0.5em
      &--caption
        font-size: 0.5em
        color: $grey
      &--captionuppercase
        font-size: 0.5em
        color: $grey
      &--label
        font-size: 0.5em
        color: $grey
      &--hyperlink
        font-size: 0.3em

</style>