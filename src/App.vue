<template>
  <div class="app__wrapper">
    <transition name="fade">
      <HeroImage v-if="step === 0" />
    </transition>
    <transition name="slide">
      <img src="./assets/images/logo.jpg" class="app__logo"  v-if="step === 1" >
    </transition>
    <div class="navigation">
      <router-link class="navigation__element" :to="{name: 'home', params: { step : 0 } }">home</router-link>
      <router-link class="navigation__element" to="/about" step="0">about</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import HeroImage from "@/components/HeroImage";
const { mapState: mapStateStep } = createNamespacedHelpers('step');


export default {
  components: {
    HeroImage
  },
  computed: {
    ...mapStateStep({
      step: state => state.step,
    }),
  },
  created() {
    this.$store.dispatch('step/setStep', 0)
  },
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Neuton:400,700&amp;subset=latin-ext');

  body {
    font-family: 'Neuton', serif;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .slide-enter-active, .slide-leave-active {
    transition: margin-top .20s ease;
  }
  .slide-enter, .slide-leave-to {
    margin-top: -50px;
  }
  .app__wrapper {
    margin: 40px auto;
    width: 80vw;
    position: relative;
  }
  .app__logo {
    position: absolute;
    top: 10px;
    width: 80px;
    height: 60px;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .navigation {
    display: flex;
    justify-content: space-around;

    &__element {
      font-size: 18px;
      font-weight: 800;
    }
  }
</style>
