<template>
    <section class="testimonials">
        <div class="testimonials__content">
            <div class="testimonials__content--title">
                <h2>Testimonials</h2>
            </div> 
            <app-carousel></app-carousel>

            <p>Need help with your 
              <span class="testimonials__content--flickerChange">
                <transition name="flicker">
                  <span>
                   {{ flickerChange }} 
                  </span>
                
                </transition>
                </span> 
                </p>
            <button>get a free quote</button>
        </div>
    </section>
</template>
<script>
import Carousel from "./Carousel.vue";
export default {
  data() {
    return {
      flickerChange: "new website",
      flickerOptions: ["idea", "brand", "cards", "marketing", "new website"]
    };
  },
  mounted() {
    this.flickerword(true, this.flickerOptions);
  },
  methods: {
    flickerword(on, wordlist) {
      //  "on" turns random on and off
      // "wordlist" is the list of words to loop thoutgh
      let i = 0;
      setInterval(trigger => {
        //   gets a random number between 0 and the length of the array
        const randomPick = Math.floor(Math.random() * wordlist.length);
        // checks to see if you passed true if you did then random is on if not it
        // will loop thorough liner
        if (on) {
          const newWord = wordlist[randomPick];
          this.flickerChange = newWord;
        } else {
          const newWord = wordlist[i];
          this.flickerChange = newWord;
        }
        i++;
        //reset the counterS
        if (i >= this.flickerOptions.length) {
          i = 0;
        }
      }, 3000);
    }
  },
  components: {
    appCarousel: Carousel
  }
};
</script>
<style lang="sass" scoped>
    @import '../../normalize.scss'
    @import '../../base.sass'
    .testimonials
        background: $light-grey
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        padding-bottom: 20px
        padding-top: 20px
        .testimonials__content
            display: flex
            flex-direction: column
            width: 1100px
            padding-bottom: 20px
            @include edgesnap
                width: 100%
                padding: 30px
              
            
            &--title
                padding-top: 20px
                padding-bottom: 33px
                h2 
                    font-size: 2rem
            &--flickerChange
                text-decoration: underline
                transition: 2s
            p
                margin-top: 20px
                padding: 20px 0
            button  
                text-transform: uppercase
                padding: 6px
                width: 20%
                border: solid 2px gray
                border-radius: 3px
                @include tablet-portrait
                  width: 40%
                  
</style>


