<template>
<div :class="['content__wrapper', {'flex-start' : step === 1}]">
    <Loading v-if="loading" />
    <Claim msg="Welcome" v-if="step === 0"/>
    <SearchInput v-model="searchValue" @input="searchInput" :step="step === 1"/>
    <div class="content__results">
      <Item v-for="item in results"
            :item="item"
            :key="item.data[0].nasa_id"
            v-if="step === 1 && results && !loading"
            @click.native="handleShowModal(item)"
      />
    </div>
    <Modal v-if="showModal"
           :item-modal="itemModal"
           @closeModal="showModal = false"
    />
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import axios from 'axios';
import debounce from 'lodash.debounce';
import API from '@/assets/services/APIServices';
import Claim from "@/components/Claim";
import SearchInput from "@/components/SearchInput";
import Item from "@/components/Results/Item";
import Modal from "@/components/Modal";
import Loading from "@/components/Loading";
const { mapState: mapStateStep } = createNamespacedHelpers('step');

export default {
  name: 'home',
  components: {
    Loading,
    Modal,
    Item,
    SearchInput,
    Claim,
  },
  data() {
    return {
      showModal: false,
      itemModal: null,
      searchValue: '',
      results: [],
      loading: false,
    };
  },
  computed: {
    ...mapStateStep({
      step: state => state.step,
    }),
  },
  methods: {
    // eslint-disable-next-line
    searchInput: debounce(function () {
      this.loading = true;
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          this.results = response.data.collection.items;
          this.loading = false;
          this.$store.dispatch('step/setStep', 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 650),
    handleShowModal(item){
        this.itemModal = item;
        this.showModal = true;
    },
  },
};
</script>
<style lang="scss" scoped>
  .content {
    &__wrapper {
      align-content: center;
      justify-content: center;
    }
    &__results {
      display: grid;
      grid-template-columns: 25vw 25vw 25vw;
      grid-gap: 2vw;

      @media screen and (max-width: 768px){
        grid-template-columns: 38vw 38vw;
        grid-gap: 4vw;
      }
    }
  }
  .flex-start {
      justify-content: start;

  }
</style>
