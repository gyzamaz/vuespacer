<template>
    <div class="modal__outer">
        <div class="modal__inner">
            <button class="close" id="show-modal" @click="$emit('closeModal')">x</button>
            <div class="modal__photo">
                <img :src=photo />
            </div>
            <div class="modal__desc">
                <h2 class="title">
                    {{ title }}
                </h2>
                <p class="desc">
                    {{ desc }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Modal",
        props: {
            itemModal: {
                type: Object,
                required: true
            }
        },
        data(){
            return {
                all: this.itemModal,
                title: null,
                photo: null,
                desc: null
            }
        },
        mounted() {
            this.title = this.itemModal.data[0].title;
            this.photo = this.itemModal.links[0].href;
            this.desc = this.itemModal.data[0].description.substring(0, 200);
        }
    }
</script>
<style scoped lang="scss">
    .modal {
        &__outer{
            display: block;
            width: 70vw;
            max-width: 100%;
            height: 400px;
            max-height: 100%;
            position: fixed;
            z-index: 100;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: white;
            box-shadow: 0 0 200px 60px rgba(0, 0, 0, 0.8);
        }
        &__inner {
            position: absolute;
            top: 0;
            left: 0;
            width: 88%;
            height: 82%;
            overflow: auto;
            padding: 4% 8% 4% 4%;
            display: grid;
            grid-template-columns: 50% 40%;
            grid-gap: 5%;
        }
        &__photo {
            height: auto;
            text-align: center;

            img {
                width: 100%;
                height: auto;
            }
        }
    }
    .title {
        width: 100%;
        padding: 0;
        margin: 0;
    }
    .close {
        position: absolute;
        top: 30px;
        right: 20px;
        padding: 6px 14px;
        font: 700 18px/120% 'Arial';
        border: 1px solid #000;

        &:hover {
            cursor: pointer;
            background-color: #000;
            color: #f0f8ff;
        }
    }
</style>
