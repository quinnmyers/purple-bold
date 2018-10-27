<template>
  <section class="footer">
    <div class="footer__content">
      <div class="footer__content__top">
        <img src="../assets/images/brand.svg" alt="Purple and Bold Logo">
        <div class="footer__content__top__left"></div>
        <div class="footer__content__top__right"></div>
      </div>
      <div class="footer__content__bottom">Copyright &copy; {{ year }} Myers Consulting LLC, dba Purple and Bold</div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      year: ""
    };
  },
  methods: {
    getYear() {
      // return getFullYear().toString;
    }
  },
  mounted() {
    const d = new Date();
    const fullYear = d.getFullYear();
    this.year = fullYear;
  }
};
</script>

<style scoped lang="sass">
@import '../normalize.scss'
@import '../base.sass'

.footer 
  display: flex 
  justify-content: center
  height: 200px 
  width: 100% 
  &__content
    display: flex
    flex-direction: column 
    justify-content: space-between
    width: 1100px
    &__top 
      display: flex
      justify-content: center
      align-items: center
      flex: 1
      width: 100%
      height: 20%
      img 
        height: 50px
        margin-bottom: -5px
      &__left 
      &__right 
    &__bottom 
      display: flex
      justify-content: center
      font-size: 0.9em
      font-family: $subfont
      margin-bottom: 5px

</style>

Copyright © 2018 MH Sub I, LLC dba Nolo ®