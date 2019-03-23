<template>
  <div class="claim__wrapper">
    <p class="claim__heading">{{ msg }}</p>
    <p class="claim__sub">Images from API NASA</p>
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
