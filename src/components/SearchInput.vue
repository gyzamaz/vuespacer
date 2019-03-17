<template>
    <div class="search__wrapper">
        <div class="search__element">
            <label class="search__label"
                   for="search">
                Search
            </label>
            <input class="search__input"
                   id="search"
                   type="text"
                   name="search"
                   v-model="searchValue"
                   @input="handleInput"
                   placeholder="search..">
        </div>
        <div>
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

    export default {
        name: "SearchInput",
        data() {
            return {
                searchValue: '',
                results: []
            }
        },
        methods: {
            // eslint-disable-next-line
            handleInput: debounce( function() {
                axios.get(`${API}?q=${this.searchValue}&media_type=image`)
                    .then((response) => {
                        console.log(response);
                        this.results = response.data.collection.items;

                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }, 650)
        }
    }
</script>

<style lang="scss" scoped>
    .search {
        &__wrapper {
            margin: 0;
            padding: 40px 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &__element {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-top: 40px;
        }
        &__input {
            height: 30px;
            border: 0;
            border-bottom: 2px solid lightcoral;
            background-color: transparent;

            &:focus {
                border-bottom-color: #bb5e3b;
                outline: none;
            }
        }
        &__label {
            border-left: 4px solid lightcoral;
            padding-left: 12px;
        }
    }
</style>
