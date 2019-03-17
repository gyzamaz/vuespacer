<template>
  <div class="wrapper">
    <p class="claim">{{ msg }}</p>
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

<style scoped lang="scss" />
