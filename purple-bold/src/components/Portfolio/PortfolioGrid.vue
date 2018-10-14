<template>
<div class="container">
  <div v-masonry transition-duration="0.3s" item-selector=".item" :origin-top="true" :horizontal-order="false">
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
  </div>
</div>
      
</template>

<script>
export default {
  props: ["portfolioPieces"]
};
</script>

<style scoped lang="sass">
.container 
  display: flex 
  background: red
</style>