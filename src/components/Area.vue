<template>
    <div class="area">
        <div
                v-for="tileX in area.tiles"
                :key="tileX"
                class="rowTile">
            <Tile
                v-for="tileY in tileX"
                :key="tileY"
                :tile="tileList[tileY]"/>
        </div>
        <img class="player"
                :style="{ top: playerX + 'px', left: playerY + 'px' }"
                src="../assets/character/Owl.png"/>
    </div>
</template>

<script>
import Tile from '@/components/Tile'

export default {
    name: 'Area',
    components: {
        Tile
    },

    data: function () {
        return {
            playerX: 0,
            playerY: 0
        }
    },

    VELOCITY: 50,

    props: {
        area: {
            type: Object,
            required: true
        },
        tileList: {
            type: Object,
            required: true
        }
    },

    computed: {
        currentArea: function () {
            return this.$store.state.currentArea
        }
    },

    mounted: function () {
        window.addEventListener('keydown', event => {
            if (event.keyCode === 38) {
                this.moveUp()
            } else if (event.keyCode === 40) {
                this.moveDown()
            } else if (event.keyCode === 37) {
                this.moveLeft()
            } else if (event.keyCode === 39) {
                this.moveRight()
            }
        })
    },

    methods: {
        moveUp: function () {
            this.playerX -= this.$options.VELOCITY
        },
        moveDown: function () {
            this.playerX += this.$options.VELOCITY
        },
        moveLeft: function () {
            this.playerY -= this.$options.VELOCITY
        },
        moveRight: function () {
            this.playerY += this.$options.VELOCITY
        }
    }
}
</script>

<style scoped lang="scss">
    .area {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100vh;
        border-left: solid 3px rgb(222, 11, 118);
        border-right: solid 3px rgb(222, 11, 118);
        overflow: hidden;
        .rowTile {
            display: flex;
            flex-direction: row;
            flex: 1;
        }
        .player {
            position: absolute;
            height: 11.11%;
            width   : 11.11%;
            z-index: 1;
        }
    }
</style>
