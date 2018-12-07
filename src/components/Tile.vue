<template>
    <div class="tile">
    </div>
</template>

<script>
    export default {
        name: 'Tile',

        props: {
            tile: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .tile {
        flex: 1;
        background-color: white;
        border: solid 1px black;
    }
</style>
