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
      <template v-for="(piece,index) in portfolioPieces">
        <template v-if="categoryArray.includes(piece.type.toLowerCase())">
          <div :class="[`item portfolio__grid__container__item`, piece.type.toLowerCase()]">
            <h4>{{ piece.type }}</h4>
            <p>{{ piece.description.substr(0, 99)  }}</p>
          </div>
        </template>
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
      categoryArray: []
    };
  },
  methods: {
    populateCategoryArray() {
      const limit = this.tagArray.length;
      let counter = 0;
      while (counter < limit) {
        this.categoryArray.push(this.tagArray[counter].name);
        console.log("pushing: " + this.tagArray[counter].name);
        counter++;
      }
      console.log(this.categoryArray);
    }
  },
  mounted() {
    this.populateCategoryArray();
    this.$nextTick(() => {
      this.isMounted = true;
    });
    eventBus.$on("categoryWasChanged", category => {
      console.log("grid speaking, category is: " + category);
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
  margin-top: 60px
  &__container
    display: grid 
    grid-gap: 14px
    grid-template-columns: repeat(auto-fill, minmax(264px,1fr))
    grid-auto-rows: 100px
    &__item 
      border: 1px solid red
      width: 264px
      &.website 
        grid-row-end: span 3
      &.logo
        grid-row-end: span 1
      &.graphic 
        grid-row-end: span 2
      &.branding
        grid-row-end: span 1

  // .masonry-container 
  //   width: 55%
  //   margin: 0 auto

</style>