<template>
  <ul>
    <li
      v-for="(tag, index) in tagArray"
      @click="categorySelected(index)"> 
      {{ tag.name }}
    </li>
  </ul>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: ["tagArray"],
  methods: {
    categorySelected(index) {
      const category = this.tagArray[index].name;
      eventBus.updateCategory(category);
      // const hexColor = this.colors[index].hex;
      // const rgbColor = this.colors[index].rgb;
      // eventBus.handleColorUpdate(hexColor, rgbColor);
    }
  },
  mounted() {
    console.log(this.tagArray);
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

ul
  list-style: none 
  li 
    display: inline
    cursor: pointer
    font-family: $subfont
    font-size: .9em
    border: 1px solid black 
    margin: 0px 5px
    padding: 4px 15px
    border-radius: 100px
    &:nth-child(1)
      margin-left: 0px

</style>