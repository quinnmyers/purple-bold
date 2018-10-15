<template>
  <!-- <div v-masonry transition-duration="0.3s" item-selector=".item" :origin-top="true" :horizontal-order="false">
    <div class="row">
      <div v-masonry-tile class="col-md-4" v-for="(piece, index) in portfolioPieces">
        <div class="card m-4" style="width: 18rem;">
          <img class="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title"><strong>{{ piece.name }}</strong></h5>
            <p class="card-text">{{ piece.description }}</p>
          </div>
        </div>
      </div>  
    </div>
  </div> -->
  <!-- this shit works -->
  <!-- <div class="portfolio__grid">
    <div v-masonry transition-duration="1s" item-selector=".item" class="masonry-container">
      <div v-masonry-tile class="item" v-bind:key="index" v-for="(item, index) in blocks">
        <p>{{item.title}} - {{index}}</p>
      </div>
    </div>
  </div> -->
  <div class="portfolio__grid" v-if="isMounted">
    <div class="portfolio__grid__container">
      <template v-for="(piece,index) in filteredPortfolioPieces">
        <!-- <template v-if="categoryArray.includes(piece.type.toLowerCase())"> -->
          <div :class="[`item portfolio__grid__container__item`, piece.type.toLowerCase(), `{is-visible: isVisible}`]"
               :ref="`portfolio-grid-item`">
            <h4>{{ piece.type }}</h4>
            <p>{{ piece.description.substr(0, 99)  }}</p>
          </div>
        <!-- </template> -->
      </template>
    </div>
  </div>


  <!-- piece.type.toLowerCase() === website ||
                        piece.type.toLowerCase() === branding ||
                        piece.type.toLowerCase() === logo ||
                        piece.type.toLowerCase() === graphic -->
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
      isVisible: true
    };
  },
  methods: {
    // loadPanels() {
    //   //const limit = this.$refs["portfolio-grid-item"].length;
    //   //console.log(this.$refs["portfolio-grid-item"][0]);
    //   const itemArray = [...this.$refs["portfolio-grid-item"]];
    //   console.log(itemArray);
    //   let index = 0;
    //   itemArray.forEach(function(i) {
    //     const el = itemArray[index];
    //     setTimeout(() => {
    //       el.classList.add("is-visible");
    //     }, index * 100);
    //     index++;
    //   });
    // }
    // console.log("grid refs: ", this.$refs["portfolio-grid-item"][2]);
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
        return this.portfolioPieces.filter(piece =>
          this.selectedCategories.includes(piece.type.toLowerCase())
        );
      }
    }
  },
  mounted() {
    this.isMounted = true;
    // this.$nextTick(this.loadPanels);
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

  // name: "hello",
  // data() {
  //   return {};
  // },
  // mounted: function() {
  //   this.$redrawVueMasonry();
  // },
  // methods: {
  //   reDraw: function() {
  //     this.$redrawVueMasonry();
  //   }
  // }
};
</script>

<style scoped lang="sass">
.portfolio__grid
  margin-top: 20px
  &__container
    display: grid 
    grid-gap: 20px
    grid-template-columns: repeat(auto-fill, minmax(254px,1fr))
    grid-auto-rows: 43px
    &__item 
      //border: 1px solid red
      opacity: 1
      box-shadow: 0px 0px 10px 1px rgba(218,218,218,1);
      border-radius: 4px
      width: 258px
      transition: all .3s ease-in-out
      &.is-visible 
        display: flex
        opacity: 1
        flex-direction: column
        transform: rotate(0deg) scale(1)
      &:hover 
        transform: scale(1.01)
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

</style>