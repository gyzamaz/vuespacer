<template>
  <div class="content__wrapper">
    <Claim msg="Welcome"/>
    <SearchInput v-model="searchValue" @input="searchInput"/>
    <div class="content__results">
      <ul>
        <li v-for="item in results" :key="item.data[0].nasa_id">
          {{ item.data[0].title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import API from '@/assets/services/APIServices';
import Claim from "@/components/Claim";
import SearchInput from "@/components/SearchInput";

export default {
  name: 'home',
  components: {
    SearchInput,
    Claim,
  },
  data() {
    return {
      searchValue: '',
      results: []
    }
  },
  methods: {
    // eslint-disable-next-line
    searchInput: debounce( function() {
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
              .then((response) => {
                this.results = response.data.collection.items;
              })
              .catch((error) => {
                console.log(error)
              })
    }, 650)
  },

};
</script>

<style lang="scss" scoped>
  .content__wrapper {
    align-content: center;
    justify-content: center;
  }
</style>
