<template>
<section id="contact">
    <div class="contact">
        <div class="Contact__title">
            <h2>Contact Us</h2>
        </div>
        <div class="contact__body">
            <div class="flex__col contact__body__left">
                <div class="flex__col transback contact__body__left--name">
                    <label for="name">Name *</label>
                    <input type="text" v-model="messageData.yourName" name="name">
                </div>
                <div class="flex__col transback contact__body__left--company">
                    <label for="company">Company</label>
                    <input type="text" v-model="messageData.company" name="company">
                </div>
                <div class="flex__col transback contact__body__left--telephone">
                    <label for="Telephone">Telephone *</label>
                    <input type="text" v-model="messageData.telephone" name="Telephone">
                </div>
                <div class="flex__col transback contact__body__left--email">
                    <label for="email">Email *</label>
                    <input type="text" v-model="messageData.email" name="email">
                </div>
                <div class="flex__col transback contact__body__left--details">
                    <label> Project Details</label>
                    <div class="tag">
                       <div class="tag__bubbles" v-for="(tag, index) in tags" :key="index" @click="addTag(index)">
                            <p>{{ tag }}</p>
                        </div>
                        <input type="text" v-model="customTag"> 
                        <button @click="addCustomTag">+</button>
                    </div>
                    <h4>Budget</h4>
                    <div>
                       <p>${{ messageData.price[0] }}  - ${{ messageData.price[1] }} </p> 
                    </div>
                    
                    <vue-slider ref="slider" v-bind="vueSliderOptions"  v-model="messageData.price"></vue-slider>
                </div>
            </div>
            <div class="flex__col contact__body__right">
                <div class="flex__col contact__body__right--compose">
                    <p>Hello. My name is <span class="contact__body__right--ul">{{ messageData.yourName }}</span>  from <span class="contact__body__right--ul">{{ messageData.company }}</span> and I need: </p>
                    <div class="tag">
                        <transition-group name="tag-in">
                        <div class="tag__bubbles" v-for="(tag, index) in messageData.pickedTags" :key="index" @click="removeTag(index)">
                            <p>{{ tag }}  <button class="tag__bubbles--del">x</button></p>
                        </div>
                        </transition-group>
                    </div>
                    <p class="pb"> You can reach me by phone at <span class="contact__body__right--ul"> {{messageData.telephone}} </span> or <br> at my email <span class="contact__body__right--ul">{{ messageData.email }}</span></p>
                    <p class="pb">I am looking to spend between <span class="contact__body__right--ul"> {{messageData.price[0]}} </span> and <span class="contact__body__right--ul"> {{messageData.price[1]}} </span> .</p>
                </div>
                <div class="flex__col transback contact__body__right--missed">
                    <label for="missed">Did We Miss Anything?</label>
                    <textarea name="missed" v-model="messageData.missed" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div> 
        <div class="contact__send">
            
        <form action="https://formspree.io/l33t.ppl@gmail.com"
            method="POST">
            <textarea name="message" id="contact__send--message" ref="realmessage" cols="3" rows="1"></textarea>
            <input type="submit" ref="submit" value="Send Message">
        </form>
    </div>
    </div>
    
   
    
</section>
</template>
<script>
import vueSlider from "vue-slider-component";
export default {
  data() {
    return {
      messageData: {
        yourName: "",
        company: "",
        telephone: "",
        email: "",
        missed: "",
        price: [1500, 4000],
        pickedTags: []
      },
      vueSliderOptions: {
        min: 900,
        max: 10000,
        tooltip: false,
        sliderStyle: [
          {
            background: "#f7f3f3"
          }
        ],
        bgStyle: {
          backgroundColor: "#f7f3f3"
        },
        processStyle: {
          background: "#f7f3f3"
        }
      },

      tags: ["Website", "Branding", "Marketing"],

      customTag: "Enter your own"
    };
  },
  mounted() {
    this.blocksubmit();
  },
  methods: {
    // this is called when you click on one of the given tags and moves it into the message
    addTag(i) {
      this.messageData.pickedTags.push(this.tags[i]);
    },
    // this is called when you enter a custom tag and it will add it to the message
    addCustomTag() {
      this.messageData.pickedTags.push(this.customTag);
    },
    removeTag(i) {
      this.messageData.pickedTags.splice(i, 1);
    },
    // this is called from the watchers and all it does if take in all of the input fields and put them into the hidden text feild that is sent out
    pushMessage() {
      const message = `hello. my name is ${this.messageData.yourName} from ${
        this.messageData.company
      } and I need: ${
        this.messageData.pickedTags
      } you can reach me at my email ${this.messageData.email} or by phone at ${
        this.messageData.telephone
      } I am looking to spend between ${this.messageData.price[0]} and ${
        this.messageData.price[1]
      } here are some extra details ${this.messageData.missed}`;
      this.$refs.realmessage.value = message;
      this.blocksubmit();
    },
    blocksubmit() {
      if (
        !this.messageData.yourName ||
        !this.messageData.telephone ||
        !this.messageData.email
      ) {
        this.$refs.submit.disabled = true;
      } else {
        this.$refs.submit.disabled = false;
      }
    }
  },

  watch: {
    //these watchers watch for a changes on the input fields and call the funcion to push it to the real text field
    "messageData.yourName": function() {
      this.pushMessage();
    },
    "messageData.company": function() {
      this.pushMessage();
    },
    "messageData.telephone": function() {
      this.pushMessage();
    },
    "messageData.email": function() {
      this.pushMessage();
    },
    "messageData.missed": function() {
      this.pushMessage();
    },
    "messageData.price": function() {
      this.pushMessage();
    },
    "messageData.pickedTags": function() {
      this.pushMessage();
    }
  },
  components: {
    vueSlider
  }
};
</script>
<style lang="sass" scoped>
    @import '../../normalize.scss'
    @import '../../base.sass'
    $gradient: linear-gradient(to right bottom, #eaa26e, #ff9e89, #ff9eab, #ffa4d1, #fab1f5);
    $inputback: #f7f3f3
    $cardback: rgba(255, 255, 255, .4)
    $inputColor: black
    $maintextcolor: white
    $disabled: #fc3a3a45

    section
        width: 100vw
        height: 100vh
        color: $maintextcolor
        background-image: $gradient
        display: flex
        justify-content: center
        align-items: center
        @include edgesnap
            padding: 20px
        @include tablet-phone
            height: auto
            padding: 10px
        .contact
            width: 1100px
            @include edgesnap
                width: 100%
            h2
                padding-bottom: 50px
                font-size: 2em
            input:focus 
                outline: none
                box-shadow: 0px 0px 7px 1px rgba(250,177,245,1);//rgba(234,162,110,1);
            &__body
                display: flex
                justify-content: center
                justify-content: space-between
                @include tablet-phone
                    flex-direction: column
                &__left
                    width: 48%
                    @include tablet-phone
                        width: 100%
                    .contact__body__left--details
                        input
                            color: $maintextcolor
                        button
                            display: flex
                            justify-content: center
                            align-items: center
                            border: 1px solid $maintextcolor
                            border-radius: 100%
                            height: 1.5em
                            width: 1.5em
                            transform: translateY(25%)
                        h4
                            margin-bottom: 20px
                        p
                            text-align: center
                &__right
                    width: 48%
                    overflow: hidden
                    @include tablet-phone
                        width: 100%
                    textarea
                        border: none
                        background: $inputback
                        margin-top: 20px 
                        color: $inputColor
                        resize: none
                        &:focus 
                            outline: none
                            box-shadow: 0px 0px 7px 1px rgba(250,177,245,1);//rgba(234,162,110,1);
                    .tag
                        min-height: 62px
                        flex-wrap: wrap
                        span
                            height: 100%
                        &__bubbles
                            height: 75%
                    .tag-in-enter-active
                        animation: tag-in 1.5s forwards
                    .tag-in-leave-active
                        animation: tag-out 2s forwards

                .flex__col
                    display: flex
                    flex-direction: column
                .pb
                    padding-bottom: 64px
                .transback
                    background: $cardback
                    padding: 10px
                    margin-bottom: 20px
                    border-radius: 5px
                input
                    color: $inputColor
                    border: none
                    background: $inputback
                    font-size: 1.1rem
                    padding: 6px
                .contact__body__right--compose
                    font-size: 1.2rem
                    .contact__body__right--ul
                        border-bottom: 2px solid white
                        display: inline-block
                        min-width: 50px
            .tag
                display: flex
                flex-wrap: wrap
                span
                    display: flex
                    flex-wrap: wrap 
                input
                    background: none
                    border-bottom: 2px solid white
                &__bubbles
                    background: $cardback
                    border-radius: 15px
                    padding: 5px
                    margin: 5px
                    &--del
                        height: 1.5em
                        width: 1.5em
                     
                        border: 1px solid white
                        border-radius: 100%
            &__send
                display: flex
                justify-content: flex-end
                align-self: flex-end
                input
                    margin-top: 20px
                    font-size: 1.4em
                    border-radius: 15px
                    padding: .5em 1em
                    border: 2px solid $maintextcolor
                    transition: .8s 
                    &:disabled
                        background: $disabled
                        box-shadow: 0px 0px 5px 0px $disabled
                        animation: disabled 3s infinite
                #contact__send--message
                    visibility: hidden
    @keyframes tag-in 
        0%    
            transform: translatex(-300%)
        100%  
            transform: translatex(0%)
    @keyframes tag-out 
        0%    
            transform: translatex(0%)
        100%  
            transform: translatex(-500%)
    @keyframes disabled 
        0%    
            opacity: 1
        50%  
            opacity: .4
        100%
            opacity: 1

</style>


