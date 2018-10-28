<template>
  <div class="portfolio__grid" v-if="isMounted">
    <transition-group name="grid" tag="div" class="portfolio__grid__container">
      <template v-for="(piece,index) in filteredPortfolioPieces">
      <div :key="index" :class="[`item portfolio__grid__container__item`, piece.type.toLowerCase(), visibleClass]"
      :ref="`portfolio-grid-item`" @click="itemSelected(index)">
        <h4>{{ piece.type }}</h4>
        <p>{{ piece.description.substr(0, 99)  }}</p>
      </div>
      </template>
    </transition-group>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: ["portfolioPieces", "tagArray"],
  data() {
    return {
      isMounted: false,
      categoryArray: [],
      selectedCategories: [],
      isVisible: false,
      visibleClass: ""
    };
  },
  methods: {
    loadPanels() {
      const itemArray = [...this.$refs["portfolio-grid-item"]];
      let index = 0;
      itemArray.forEach(function(i) {
        const el = itemArray[index];
        setTimeout(() => {
          el.classList.add("is-visible");
        }, index * 100);
        index++;
      });
    },
    itemSelected(index) {
      eventBus.openModal(index);
      eventBus.selected(true);
    }
  },
  computed: {
    //provides the grid with the list of items to display
    filteredPortfolioPieces() {
      //checks to see if nothing is selected (selectedCategories array is empty)
      if (this.selectedCategories.length === 0) {
        //if nothing is selected, it shows the entire array unfiltered
        return this.portfolioPieces;
      } else {
        //if there are selections, it filters the array for each category inside of the
        //selectedCategories array and checks it against the piece.type of the portfolio piece
        this.visibleClass = "is-visible";
        return this.portfolioPieces.filter(piece =>
          this.selectedCategories.includes(piece.type.toLowerCase())
        );
      }
    }
  },
  mounted() {
    this.isMounted = true;
    this.$nextTick(this.loadPanels);
    //populating selectedCategory array
    eventBus.$on("categoryWasChanged", category => {
      //checks to see if selectedCategories array includes selection (tag button)
      if (this.selectedCategories.includes(category)) {
        //if the array already includes the category (it's selected) then it
        //filters over the array to remove that category
        return (this.selectedCategories = this.selectedCategories.filter(
          item => item != category
        ));
      } else {
        //if the array doesn't already include that category selection, it
        //adds that category to the array
        setTimeout(() => {
          this.selectedCategories.push(category);
        }, 268.75);
      }
    });
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.portfolio__grid
  margin-top: 20px
  &__container
    display: grid 
    grid-gap: 20px
    grid-template-columns: repeat(auto-fill, minmax(254px,1fr))
    grid-auto-rows: 43px
    @include edgesnap 
      width: 100%
      background: pink
      padding: 0px 20px
      // margin-left: 10px
    &__item 
      display: flex
      transition: all 1s
      margin-right: 10px
      cursor: pointer
      //display: inline-block
      //flex-direction: column
      //border: 1px solid red
      opacity: 0
      box-shadow: 0px 0px 10px 1px rgba(218,218,218,1);
      border-radius: 4px
      width: 258px
      @include edgesnap
        width: auto
      @include phone-large 
        margin-right: 0px
      &.is-visible 
        display: flex
        opacity: 1
        flex-direction: column
        //transform: rotate(0deg) scale(1)
      //&:hover 
      // transform: scale(1.01)
      &.website 
        grid-row-end: span 6
      &.logo
        grid-row-end: span 3
      &.graphic 
        grid-row-end: span 3
      &.branding
        grid-row-end: span 4

  // .masonry-container 
  //   width: 55%
  //   margin: 0 auto

.grid-enter, 
  opacity: 1
  transform: translateY(300px)

.grid-leave-to
  opacity: 0

.grid-leave-active 
  //position: absolute
  opacity: 0
  transform: translateX(-1800px) scale(0.3)
  //right: 0


</style>