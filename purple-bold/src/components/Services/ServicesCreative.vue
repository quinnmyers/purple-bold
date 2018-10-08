<template>
    <div v-if="isMounted">
      <ul class="creative__color__palette">
        <li class="creative__color__palette--color" v-for="(color, index) in colors" :style="styleBackground(index)" @click="colorSubHeaders(index)">
        </li>
      </ul>
      <p class="services__creative__cta">Click a color...</p>
      <p class="services__creative__cta">...see, it's not that easy</p>
    </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: ["service"],
  data() {
    return {
      isMounted: false,
      colorUpdate: "",
      colors: [
        {
          name: "Turqoise",
          hex: "#1abc9c"
        },
        {
          name: "Emerald",
          hex: "#2ecc71"
        },
        {
          name: "Peter River",
          hex: "#3498db"
        },
        {
          name: "Amethyst",
          hex: "#9b59b6"
        },
        {
          name: "Wet Ashpalt",
          hex: "#34495e"
        },
        {
          name: "Green Sea",
          hex: "#16a085"
        },
        {
          name: "Nehpritis",
          hex: "#27ae60"
        },
        {
          name: "Belize Hole",
          hex: "#2980b9"
        },
        {
          name: "Wisteria",
          hex: "#8e44ad"
        },
        {
          name: "Midnight Blue",
          hex: "#2c3e50"
        },
        {
          name: "Sun Flower",
          hex: "#f1c40f"
        },
        {
          name: "Carrot",
          hex: "#e67e22"
        },
        {
          name: "Alizarin",
          hex: "#e74c3c"
        },
        {
          name: "Clouds",
          hex: "#ecf0f1"
        },
        {
          name: "Concrete",
          hex: "#95a5a6"
        },
        {
          name: "Orange",
          hex: "#f39c12"
        },
        {
          name: "Pumpkin",
          hex: "#d35400"
        },
        {
          name: "Pomegranate",
          hex: "#c0392b"
        },
        {
          name: "Silver",
          hex: "#bdc3c7"
        },
        {
          name: "Asbestos",
          hex: "#7f8c8d"
        }
      ]
    };
  },
  methods: {
    colorSubHeaders(index) {
      const color = this.colors[index].hex;
      eventBus.handleColorUpdate(color);
    },
    styleBackground(index) {
      return `backgroundColor: ${this.colors[index].hex}`;
    }
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style scoped lang="sass">
@import '../../normalize.scss'
@import '../../base.sass'

div 
  .creative__color__palette
    display: flex
    flex-wrap: wrap
    width: 300px
    justify-content: flex-end 
    list-style: none
    margin-bottom: 13px
    &--color 
      border-radius: 2px
      box-shadow: 0px 0px 10px 3px rgba(218,218,218,1);
      height: 35px 
      width: 15% 
      background: red
      margin: 4px 5px
      transition: all 0.15s ease-in
      &:hover 
        transform: scale(1.1)
        box-shadow: 0px 0px 10px 3px rgba(200,200,200,1);
  p
    text-align: right 
    font-family: 'Rubik', 'Avenir', sans-serif
    color: $grey 
    font-weight: $medium
    line-height: 20px
    font-size: .95em
        
</style>