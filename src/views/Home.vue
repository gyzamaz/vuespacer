<template>
  <div>
    <Claim msg="Welcome"/>
    <SearchInput />
  </div>
</template>

<script>
import Claim from "@/components/Claim";
import SearchInput from "@/components/SearchInput";

export default {
  name: 'home',
  components: {
    SearchInput,
    Claim,
  },
};
</script>
