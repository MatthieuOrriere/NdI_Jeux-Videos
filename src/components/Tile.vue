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
        &.plain-grass-tile{
            background-image: url("../assets/plain/grass-tile.png");
        }
        &.plain-grass-tile-second {
            background-image: url("../assets/plain/grass-tile-second.png");
        }
        &.plain-blue-ground {
            background-image: url("../assets/plain/blue-ground.png");
        }
        &.plain-flowers {
            background-image: url("../assets/plain/flowers.png");
        }
        &.block-bricks {
            background-image: url("../assets/block/bricks.png");
        }
        &.block-sea {
            background-image: url("../assets/block/sea.png");
        }
        background-size: cover;
    }
</style>
