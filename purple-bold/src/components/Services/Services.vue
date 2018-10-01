<template>
  <div>
    <section class="services">
      <div class="services__content">
        <div class="services__content__container">
        </div>
        <template v-for="(service, index) in services">
          <app-services-item :services="service"></app-services-item>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import ServicesItem from "./ServicesItem.vue";

export default {
  data() {
    return {
      services: [
        {
          name: "Websites",
          imgSrc: "",
          altText: "",
          subCategories: [
            {
              subName: "Custom Web Development",
              subDescription:
                "Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure."
            },
            {
              subName: "Websites 2",
              subDescription:
                "Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure."
            },
            {
              subName: "Websites 2",
              subDescription:
                "Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure."
            }
          ]
        },
        {
          name: "Creative",
          imgSrc: "",
          altText: "",
          subCategories: [
            {
              subName: "Web Design",
              subDescription:
                "Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure."
            },
            {
              subName: "Logo Design",
              subDescription:
                "Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure."
            },
            {
              subName: "Other Creative Services",
              subDescription:
                "Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure."
            }
          ]
        },
        {
          name: "Branding",
          imgSrc: "",
          altText: "",
          subCategories: [
            {
              subName: "New Brand Development",
              subDescription:
                "Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure."
            },
            {
              subName: "Logo Design",
              subDescription:
                "Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure."
            },
            {
              subName: "Printed Materials",
              subDescription:
                "Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure."
            }
          ]
        },
        {
          name: "Marketing",
          imgSrc: "",
          altText: "",
          subCategories: [
            {
              subName: "SEO",
              subDescription:
                "Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure."
            },
            {
              subName: "Email Marketing",
              subDescription:
                "Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure."
            },
            {
              subName: "Analytics",
              subDescription:
                "Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure."
            }
          ]
        }
      ]
    };
  },
  components: {
    appServicesItem: ServicesItem
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.services 
  display: flex
  justify-content: center
  height: 500px
  &__content 
    background: pink
    width: 1100px
    @include edgesnap 
      width: 100% 
      padding: 0px 20px 
    

</style>