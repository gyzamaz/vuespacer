<template>
    <div class="modal__outer">
        <div class="modal__inner">
            <button class="close" id="show-modal" @click="$emit('closeModal')">x</button>
            <div class="modal__photo"></div>
            <div class="modal__desc">
                <h2 class="title"></h2>
                <p class="desc"></p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Modal",
    }
</script>
<style scoped lang="scss">
    .modal {
        &__outer{
            background-color: #f0f8ff;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
        }
        &__inner {
            display: flex;
            height: 100%;
            padding: 50px;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        &__photo {
            max-width: 90%;
            height: auto;
            background-color: #000;

            img {
                width: 100%;
            }
        }
        &__desc {}
    }
    .title {}
    .desc {}
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
