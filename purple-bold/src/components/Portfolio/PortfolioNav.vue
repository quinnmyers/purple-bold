<template>
  <ul>
    <li
      v-for="tag in tagArray"> {{ tag.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ["tagArray"]
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