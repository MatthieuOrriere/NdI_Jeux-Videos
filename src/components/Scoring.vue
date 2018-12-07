<template>
    <div class="scoring">
        {{ score }} 🐱‍🐉
    </div>
</template>

<script>
    export default {
        name: 'Scoring',

        computed: {
            score: function () {
                return this.$store.state.score
            }
        }
    }
</script>

<style scoped lang="scss">
    .scoring {
        line-height: 40px;
        width: calc(100% - 60px);
        padding: 10px;
        margin: 20px;
        background: white;
        border: solid 3px rgb(222, 11, 118);
    }
</style>
