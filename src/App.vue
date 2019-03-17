<template>
  <div class="app__wrapper">
    <HeroImage />
    <div class="navigation">
      <router-link class="navigation__element" to="/">home</router-link>
      <router-link class="navigation__element" to="/about">about</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Neuton:400,700&amp;subset=latin-ext');

  body {
    font-family: 'Neuton', serif;
  }
  .app__wrapper {
    margin: 40px auto;
    width: 80%;
 }
  .navigation {
    display: flex;
    justify-content: space-between;

    &__element {
      font-size: 18px;
      font-weight: 800;
    }
  }
</style>
<script>
  import HeroImage from "./components/HeroImage";
  export default {
    components: {HeroImage}
  }
</script>
