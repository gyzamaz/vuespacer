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
                   placeholder="search example: moon"
                   @input="searchChange"
                   :class="{ 'search__input--dark': step }"
            >
        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchInput",
        props: {
            value: {
                required: true,
                type: String,
            },
            step: {
                required: true,
                type: Boolean
            }
        },
        methods:{
            searchChange(e) {
                this.$emit('input', e.target.value)
            }
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
            font: 400 16px/120% 'Neuton', serif;

            &:focus {
                border-bottom-color: #bb5e3b;
                outline: none;
            }
            &--dark {
                color: #353535;
            }
        }
        &__label {
            border-left: 4px solid lightcoral;
            padding-left: 12px;
        }
    }
</style>
