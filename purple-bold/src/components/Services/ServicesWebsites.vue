<template>
  <div>
    <p>this is the website component</p>
    <button @click='testFunction'>Click Me</button>
  </div>
</template>

<script>
export default {
  props: ["services"],
  methods: {
    testFunction() {
      this.services.name = "Hello World This is Websites Talking";
    }
  }
};
</script>

<style scoped>
</style>