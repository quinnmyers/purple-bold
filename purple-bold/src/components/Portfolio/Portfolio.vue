<template>
  <div class="portfolio" v-if="isMounted" id="portfolio">
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
    <app-portfolio-item-modal
          :portfolioPiece="portfolioPieces[pieceIndex]"
          :imageArray='portfolioPieces[pieceIndex].altImages'
          >

    </app-portfolio-item-modal>
  </div>
</template>

<script>
import PortfolioNav from "./PortfolioNav.vue";
import PortfolioGrid from "./PortfolioGrid.vue";
import PortfolioItemModal from "./PortfolioItemModal.vue";
import { eventBus } from "../../main";

export default {
  components: {
    appPortfolioNav: PortfolioNav,
    appPortfolioGrid: PortfolioGrid,
    appPortfolioItemModal: PortfolioItemModal
  },
  data() {
    return {
      isMounted: false,
      pieceIndex: 0,
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
          name: "Nexus Technology Group 0",
          type: "Website",
          services: ["0000", "0000", "first item"],
          siteLink: "",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          altImages: [
            {
              src: "https://via.placeholder.com/10x10",
              alt: "lorasdfasfsfsfem ipsum"
            },
            {
              src: "https://via.placeholder.com/10x10",
              alt: "lorem ipsum"
            },
            {
              src: "https://via.placeholder.com/10x10",
              alt: "lorem ipsum"
            },
            {
              src: "https://via.placeholder.com/10x10",
              alt: "lorem ipsum"
            }
          ],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, ullam alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 1,
          name: "Dima Duchet Artist Portfolio 1",
          type: "Logo",
          services: ["website design", "web development", "logo design"],
          siteLink: "",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          altImages: [
            {
              src: "https://via.placeholder.com/100x100",
              alt: "lorasdfasfsfsfem ipsum"
            },
            {
              src: "https://via.placeholder.com/200x200",
              alt: "lorem ipsum"
            },
            {
              src: "https://via.placeholder.com/300x300",
              alt: "lorem ipsum"
            },
            {
              src: "https://via.placeholder.com/400x400",
              alt: "lorem ipsum"
            }
          ],
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi!!!"
        },
        {
          id: 2,
          name: "Nexus Technology Group 2",
          type: "Graphic",
          services: ["33333", "333333", "third item"],
          siteLink: "",
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, ullam alias repellat quibusdam sint sunt laudantium quasi!"
        },
        {
          id: 3,
          name: "Dima Duchet Artist Portfolio 3",
          type: "Website",
          services: ["website design", "web development", "logo design"],
          siteLink: "",
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
          services: ["website design", "web development", "logo design"],
          siteLink: "",
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
          services: ["website design", "web development", "logo design"],
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
          services: ["website design", "web development", "logo design"],
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
          services: ["website design", "web development", "logo design"],
          mainImg: {
            src: "https://via.placeholder.com/231x329",
            alt: "sample alt text"
          },
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. DIMA dima dima dima dima eaque placeat expedita a nobis debitis iusto tempora soluta sequi omnis accusantium nesciunt, waddup with it you already know that this is the coolest shit around alias repellat quibusdam sint sunt laudantium quasi! v v"
        }
      ]
    };
  },
  methods: {
    selectedPiece(index) {
      return `potfolioPieces[index]`;
    }
  },
  mounted() {
    this.isMounted = true;
    eventBus.$on("itemSelected", index => {
      // this.selectedPiece(index);
      this.pieceIndex = index;
    });
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
  margin-bottom: 50px
  &__content 
    display: flex 
    flex-direction: column
    width: 1100px
    @include edgesnap 
      width: 100%
    &__container 

</style>