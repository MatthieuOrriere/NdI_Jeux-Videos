<template>
    <div class="tile"
        :class="tile.img">
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
        &.plain-grass {
            background-image: url("../assets/plain/grass.png");
        }
        background-size: cover;
    }
</style>
