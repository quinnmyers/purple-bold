<template>
    <div class="wraper">
        <button   @click="play"></button>
        <button   @click="pause" ></button>
        <button   @click="reverse" ></button>
    </div>
</template>
<script>
export default {
  methods: {
    play() {
      this.$emit("play");
    },
    pause() {
      this.$emit("pause");
    },
    reverse() {
      this.$emit("reverse");
    }
  }
};
</script>
<style lang="sass" scoped>
    @import '../../normalize.scss'
    @import '../../base.sass'
    .wraper
        display: flex
        flex-direction: column
        background-color: $blue-grey
        border-radius: 3px
        box-shadow: 0px 0px 19px -4px rgba(16,43,63,1)
        align-items: center
        justify-content: space-around
        width: 100%
        button
            width: 50px
            height: 50px
            background: red
</style>
