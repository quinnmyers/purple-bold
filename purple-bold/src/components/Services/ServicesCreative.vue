<template>
    <div>
        <p>this is the services creative image</p>
        <button @click='testFunction'>Click Me</button>
    </div>
</template>

<script>
export default {
  props: ["service"],
  methods: {
    testFunction() {
      this.service.subCategories[2].subName =
        "Hello World This is Creative Talking";
    }
  }
};
</script>

<style scoped>
</style>