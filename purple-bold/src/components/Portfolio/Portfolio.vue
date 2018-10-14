<template>
  <div class="portfolio">
    <div class="portfolio__content">
      <h2 class="section--header">Portfolio</h2>
      <div class="portfolio__content__container">
        <div class="portfolio__content__container__navigation">
          <div class="portfolio__content__container__navigation__tags">
            <app-portfolio-nav
              :tagArray="tagArray">
            </app-portfolio-nav>
          </div>
          <div class="portfolio__content__container__navigation__search">
          </div>
        </div>
        <app-portfolio-grid
          :portfolioPieces='portfolioPieces'
          :tagArray="tagArray">
        </app-portfolio-grid>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioNav from "./PortfolioNav.vue";
import PortfolioGrid from "./PortfolioGrid.vue";

export default {
  components: {
    appPortfolioNav: PortfolioNav,
    appPortfolioGrid: PortfolioGrid
  },
  data() {
    return {
      isMounted: false,
      tagArray: [
        {
          name: "website"
        },
        {
          name: "logo"
        },
        {
          name: "branding"
        },
        {
          name: "graphic"
        }
      ],
      portfolioPieces: [
        {
          id: 0,
          name: "Nexus Technology Group",
          type: "Website",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, ullam alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 1,
          name: "Dima Duchet Artist Portfolio",
          type: "Logo",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 2,
          name: "Nexus Technology Group",
          type: "Graphic",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, ullam alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 3,
          name: "Dima Duchet Artist Portfolio",
          type: "Website",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 4,
          name: "Nexus Technology Group",
          type: "Website",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, ullam alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 5,
          name: "Dima Duchet Artist Portfolio",
          type: "Website",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 6,
          name: "Nexus Technology Group",
          type: "Branding",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, ullam alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 7,
          name: "Dima Duchet Artist Portfolio",
          type: "Website",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! v v"
        },
        {
          id: 8,
          name: "Nexus Technology Group",
          type: "Logo",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, ullam alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 9,
          name: "Dima Duchet Artist Portfolio",
          type: "Graphic",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 10,
          name: "Nexus Technology Group",
          type: "Website",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, ullam alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 11,
          name: "Dima Duchet Artist Portfolio",
          type: "Website",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 12,
          name: "Nexus Technology Group",
          type: "Website",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, ullam alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! v"
        },
        {
          id: 13,
          name: "Dima Duchet Artist Portfolio",
          type: "Logo",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 14,
          name: "Nexus Technology Group",
          type: "Website",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, ullam alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 15,
          name: "Dima Duchet Artist Portfolio",
          type: "Branding",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 16,
          name: "Nexus Technology Group",
          type: "Website",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, ullam alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 17,
          name: "Dima Duchet Artist Portfolio",
          type: "Logo",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! v"
        },
        {
          id: 18,
          name: "Nexus Technology Group",
          type: "Website",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, ullam alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 19,
          name: "Dima Duchet Artist Portfolio",
          type: "Website",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi!"
        }
      ]
    };
  },
  methods: {},
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

.portfolio
  display: flex
  justify-content: center
  margin-top: 30px
  &__content 
    display: flex 
    flex-direction: column
    width: 1100px
    border: 1px solid black
    &__container 

</style>