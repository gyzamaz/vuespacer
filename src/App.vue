<template>
  <div class="app">
    <div class="nav">
      <router-link class="nav__left" to="/">home</router-link>
      <router-link class="nav_right" to="/about">about</router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
  .app{
    margin: 40px auto;
    width: 80%;
  }
  .nav {
    display: flex;
    justify-content: space-between;
  }
</style>
