<template>
    <div class="tile"
        :class="tile.img">
        <div v-if="tile.character"
            class="character"
            :class="tile.character">

        </div>
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
        &.block-lack {
            background-image: url("../assets/block/Lack.png");
        }
        &.block-rock {
            background-image: url("../assets/block/Rock.png");
        }
        &.block-sea {
            background-image: url("../assets/block/sea.png");
        }
        background-size: cover;
        .character {
            height: 100%;
            width: 100%;
            &.character-fox {
                background-image: url("../assets/character/Fox.png");
            }
            &.character-fox-angry {
                background-image: url("../assets/character/FoxAngry.png");
            }
            &.character-knight {
                background-image: url("../assets/character/Knight.png");
            }
            &.character-pirat-parrot {
                background-image: url("../assets/character/PiratParrot.png");
            }
            background-size: cover;
        }
    }
</style>
