<template>
  <div>
    <Claim msg="Welcome"/>
    <Search />
  </div>
</template>

<script>
import Search from "@/components/Search";
import Claim from "@/components/Claim";

export default {
  name: 'home',
  components: {
    Claim,
    Search,
  },
};
</script>
