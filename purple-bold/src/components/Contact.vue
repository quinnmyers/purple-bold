<template>
<section id="contact">
    <div class="contact">
        <div class="Contact__title">
            <h2>Contact Us</h2>
        </div>
        <div class="contact__body">
            <div class="flex__col contact__body__left">
                <div class="flex__col transback contact__body__left--name">
                    <label for="name">Name</label>
                    <input type="text" v-model="name" name="name">
                </div>
                <div class="flex__col transback contact__body__left--company">
                    <label for="company">Company</label>
                    <input type="text" v-model="company" name="company">
                </div>
                <div class="flex__col transback contact__body__left--telephone">
                    <label for="Telephone">Telephone</label>
                    <input type="text" v-model="telephone" name="Telephone">
                </div>
                <div class="flex__col transback contact__body__left--email">
                    <label for="email">Email</label>
                    <input type="text" v-model="email" name="email">
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
                    
                </div>
            </div>
            <div class="flex__col contact__body__right">
                <div class="flex__col contact__body__right--compose">
                    <p>Hello. My name is <span class="contact__body__right--ul">{{ name }}</span>  and I need: </p>
                    <div class="tag">
                    <div class="tag__bubbles" v-for="(tag, index) in pickedTags" :key="index" @click="removeTag(index)">
                            <p>{{ tag }}  <span class="tag__bubbles--del">x</span></p>
                        </div>
                    </div>
                    <p> You can reach me at my email <span class="contact__body__right--ul">{{ email }}</span> or <br> by phone at <span class="contact__body__right--ul"> {{telephone}} </span></p>
                    <p>I am looking to spend between <span class="contact__body__right--ul"> {{pricelow}} </span> and <span class="contact__body__right--ul"> {{pricehigh}} </span> .</p>
                </div>
                <div class="flex__col transback contact__body__right--missed">
                    <label for="missed">Did We Miss Anything?</label>
                    <textarea name="missed" v-model="missed" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div> 
        <div class="contact__send">
        <form action="https://formspree.io/l33t.ppl@gmail.com"
            method="POST">
            <textarea name="message" id="contact__send--message" ref="realmessage" cols="30" rows="10"></textarea>
            <input type="submit" value="Send">
        </form>
    </div>
    </div>
    
   
    
</section>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      company: "",
      telephone: "",
      email: "",
      missed: "",
      pricelow: 900,
      pricehigh: 10000,
      tags: ["Website", "Branding", "Marketing"],
      pickedTags: [],
      customTag: "Enter your own"
    };
  },
  methods: {
    addTag(i) {
      this.pickedTags.push(this.tags[i]);
    },
    addCustomTag() {
      this.pickedTags.push(this.customTag);
    },
    removeTag(i) {
      this.pickedTags.splice(i, 1);
    }
  },
  watch: {
    name: function() {
      const message = `hello. my name is ${this.name} and I need: ${
        this.pickedTags
      } you can reach me ato my email ${this.email} or by phone at ${
        this.telephone
      } I am looking to spend between ${this.pricelow} and ${this.pricehigh}  `;
      this.$refs.realmessage.value = message;
    }
  }
};
</script>
<style lang="sass" scoped>
@import '../normalize.scss'
@import '../base.sass'

$gradient: linear-gradient(to right bottom, #eaa26e, #ff9e89, #ff9eab, #ffa4d1, #fab1f5);
$inputback: #f7f3f3
$cardback: rgba(255, 255, 255, .4)

section
    width: 100vw
    height: 100vh
    color: white
    background-image: $gradient
    display: flex
    justify-content: center
    align-items: center
    .contact
        width: 1100px
        @include edgesnap
            width: 100%
        &__body
            display: flex
            justify-content: center
            justify-content: space-around
            &__left
                width: 47%
                &--details
            
            &__right
                width: 47%
                textarea
                    border: none
                    background: $inputback
                    margin-top: 20px 
            .flex__col
                display: flex
                flex-direction: column
            .transback
                background: $cardback
                padding: 10px
                margin-bottom: 20px
                border-radius: 5px
            input
                color: black
                border: none
                background: $inputback
            .contact__body__right--ul
                border-bottom: 1px solid white
                min-width: 100px
        .tag
            display: flex
            input
                background: none
                border-bottom: 1px solid white
            &__bubbles
                background: $cardback
                border-radius: 15px
                padding: 5px
                margin: 5px
                &--del
                    width: 1em
                    height: 1em
                    border: 1px solid white
                    border-radius: 100%
        &__send
            display: flex
            justify-content: flex-end
            align-self: flex-end
            #contact__send--message
                visibility: hidden
</style>


