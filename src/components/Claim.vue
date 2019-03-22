<template>
  <div class="claim__wrapper">
    <p class="claim__heading">{{ msg }}</p>
    <p class="claim__sub">Lorem impsum. Images from Nasa</p>
  </div>
</template>

<script>
export default {
  name: 'Claim',
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
  .claim__wrapper {
    text-align: center;
  }
</style>
