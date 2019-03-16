<template>
  <div class="home">
    <HelloWorld msg="Welcome"/>
    <Search />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Search from "../components/Search";

export default {
  name: 'home',
  components: {
    Search,
    HelloWorld,
  },
};
</script>
