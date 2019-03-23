<template>
    <div class="loader-bar">
        <div class="loader-bar__indicator"></div>
    </div>
</template>

<script>
    export default {
        name: "Loading"
    }
</script>

<style lang="scss" scoped>
    .loader-bar {
        background-color: #E4E4E4;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;

        &__indicator {
            border-radius: inherit;
            transform: translateX(-90%);
            animation: loading 3s cubic-bezier(0.77, 0, 0.175, 1) infinite;

            &::before {
                content: '';
                display: block;
                height: 6px;
                background-color: #30B272;
                border-radius: inherit;
                width: 80%;
                margin-left: auto;
                margin-right: auto;
            }
        }
    }
    @keyframes loading {
        from {
            transform: translate3d(-90%, 0, 0);
        }
        to {
            transform: translate3d(90%, 0, 0);
        }
    }
</style>
