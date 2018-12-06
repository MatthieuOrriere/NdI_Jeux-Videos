<template>
    <div class="tile">
    </div>
</template>

<script>
    export default {
        name: 'Tile',

        data () {
            return {
                img: '',
                traversable: true,
                lifecost: 0
            }
        }
    }
</script>

<style scoped lang="scss">
    .tile {
        flex: 1;
        border: solid 1px black;
    }
</style>
