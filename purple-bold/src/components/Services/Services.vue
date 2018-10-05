<template>
  <section class="services">
    <div class="services__content">
      <h2 class="section--header">Services</h2>
      <div class="services__content__container">
      </div>
      <template v-for="(service, index) in services">
        <app-services-item :service="service" :servicesIndex="index" :servicesArray="servicesArray[index]"></app-services-item>
      </template>
    </div>
  </section>
</template>

<script>
import ServicesItem from "./ServicesItem.vue";

export default {
  components: {
    appServicesItem: ServicesItem
  },
  data() {
    return {
      servicesArray: [],
      services: [
        {
          name: "Websites",
          imgSrc: "",
          altText: "",
          subCategories: [
            {
              subName: "Custom Web Development",
              subDescription:
                "Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure. Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure. Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure. Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure.",
              expanded: false
            },
            {
              subName: "Websites 2",
              subDescription:
                "Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure.",
              expanded: false
            },
            {
              subName: "Websites 2",
              subDescription:
                "Est magna deserunt eu ex reprehenderit in dolor aliquip velit. Laboris aliqua occaecat qui aliquip exercitation do esse irure.",
              expanded: false
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
  mounted() {
    this.getServicesArray();
  },
  methods: {
    getServicesArray() {
      const serviceCount = this.services.length;
      let counter = 0;
      while (counter < serviceCount) {
        const subCount = this.services[counter].subCategories.length;
        let subCounter = 0;
        this.servicesArray.push([]);
        while (subCounter < subCount) {
          this.servicesArray[counter].push({ expanded: false });
          subCounter++;
        }
        counter++;
      }
    }
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.services 
  display: flex
  justify-content: center
  height: auto
  &__content 
    display: flex 
    flex-direction: column
    justify-content: center 
    align-items: center
    background: pink
    width: 1100px
    @include edgesnap 
      width: 100% 
      padding: 0px 20px 
    

</style>