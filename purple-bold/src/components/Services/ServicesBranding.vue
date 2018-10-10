<template>
    <div v-if="isMounted">
        <div class="branding__container">
          <div class="branding__container__left">
            <div class="branding__container__left__swatch" ref="left-swatch">
              <template v-for="(smallSwatch, index) in leftSmallSwatches">
                <div class="branding__container__left__swatch--small" @click="updateLeftSwatch(index)" :ref="`${serviceName}${index}`"></div>
              </template>
            </div> 
            <div class="branding__container__left--hex"><p>{{ leftSwatch.hexBottom }}</p></div> 
            <div class="branding__container__left--rgb"><p>{{ leftSwatch.rgbBottom }}</p></div>
          </div>
          <div class="branding__container__middle">
            <div class="branding__container__middle--swatch" ref="middle-swatch"></div>
            <div class="branding__container__middle--hex"><p>{{ middleSwatch.hexBottom }}</p></div> 
            <div class="branding__container__middle--rgb"><p>{{ middleSwatch.rgbBottom }}</p></div>
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
      leftSwatch: {
        background: "#433F4C",
        hexBottom: "#433F4C",
        rgbBottom: "rgb(67, 63, 76)"
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
        background: "#7CBDF1",
        hexBottom: "#7CBDF1",
        rgbBottom: "rgb(124, 189, 241)"
      }
    };
  },
  methods: {
    styleSwatches() {
      const leftSwatch = this.$refs["left-swatch"];
      leftSwatch.style.background = this.leftSwatch.background;
      const middleSwatch = this.$refs["middle-swatch"];
      middleSwatch.style.background = this.middleSwatch.background;
    },
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
    },
    updateLeftSwatch(index) {
      const limit = this.leftSmallSwatches.length;
      let counter = 0;
      //clears border styling of all other small swatches each time fucntion is ran
      while (counter < limit) {
        const el = this.$refs[`${this.serviceName}` + counter][0];
        el.style.border = "none";
        counter++;
      }
      const backGroundColor = this.leftSmallSwatches[index].background;
      const leftSwatch = this.$refs["left-swatch"];
      const eventTarget = this.$refs[`${this.serviceName}` + index][0];
      leftSwatch.style.background = backGroundColor;
      eventTarget.style.border = "1px solid white";
    }
  },
  created() {
    eventBus.$on("colorWasEdited", hexColor => {
      this.updateColor(hexColor);
    });
    // eventBus.$on("colorWasEdited", rgbColor => {
    //   console.log("this is branding talking: " + rgbColor);
    // });
  },
  mounted() {
    this.isMounted = true;
    this.$nextTick(this.styleSmallSwatches);
    this.$nextTick(this.styleSwatches);
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
      flex-direction: column
      justify-content: space-between
      width: 28%
      &__swatch 
        display: flex
        flex-direction: column
        justify-content: flex-end
        align-items: flex-end
        width: 100%
        height: 130px 
        border-radius: 7px
        transition: all .25s ease
        &--small 
          height: 12px 
          width: 32px 
          border-radius: 2px 
          margin: 2px 5px  
          &:nth-last-child(1)
            margin-bottom: 6px
        &--1
        &--2
        &--3
        &--4
      &--hex, &--rgb
        font-family: 'Helvetica', sans-serif
        font-size: .55em
        margin-left: 2px
      &--hex 
        font-weight: bold
      &--rgb     
        color: $grey
    &__middle
      display: flex 
      flex-direction: column
      justify-content: space-between
      width: 28%
      &--swatch
        display: flex 
        width: 100%
        height: 130px
        border-radius: 7px
      &--hex, &--rgb 
        font-family: 'Helvetica', sans-serif
        font-size: .55em
        margin-left: 2px
      &--hex 
        font-weight: bold
      &--rgb     
        color: $grey
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