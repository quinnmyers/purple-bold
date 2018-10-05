<template>
  <div>
    <p>this is the website component</p>
    <button @click='testFunction'>Click Me</button>
  </div>
</template>

<script>
export default {
  props: ["service"],
  methods: {
    testFunction() {
      this.service.subCategories[1].subName =
        "Hello World This is Websites Talking";
    }
  },
  mounted() {
    console.log(this.service.subCategories[1].expanded);
  }
};
</script>

<style scoped>
</style>