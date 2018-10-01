<template>
    <div>
        <p>{{ services.name }}</p>
        <ul>
            <li v-for="sub in services.subCategories">
                <p> {{ sub.subName }} </p>
                <p> {{ sub.subDescription }} </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: ["services"]
};
</script>

<style scoped>
</style>