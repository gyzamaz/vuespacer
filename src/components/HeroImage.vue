<template>
    <div class="hero-image__wrapper"></div>
</template>

<script>
    export default {
        name: "HeroImage"
    }
</script>

<style scoped>
    .hero-image__wrapper {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-image: url(../../src/assets/images/bg.jpg);
        z-index: -1;
        background-size: auto 100%;
    }
</style>
