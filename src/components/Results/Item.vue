<template>
    <div class="item" :style="style" />
</template>

<script>
export default {
    name: "Item",
    props: {
        item: {
            type: [ Object ],
            require: true
        }
    },
    data() {
        return {
            photo: this.item.links[0].href,
            title: this.item.data[0].title,
        }
    },
    computed: {
        style() {
            return `backgroundImage: url("${this.photo}")`
        }
    }
}
</script>

<style scoped lang="scss">
    .item {
        height: 20vw;
        background-repeat: no-repeat;
        background-position: 50%;

        @media screen and (max-width: 768px){
            height: 30vw;
        }
    }
</style>
