<template>
    <div class="area" ref="area">
        <div v-for="(tileX, indexX) in area.tiles"
                :key="area.id + indexX"
                class="rowTile">
            <Tile v-for="(tileY, indexY) in tileX"
                :key="area.id + indexY"
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
            x: 50,
            y: 50
        }
    },

    VELOCITY: 50,

    props: {
        map: {
            type: Object,
            required: true
        },
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
        },
        playerX: {
            get: function () {
                return this.x
            },
            set: function (newValue) {
                this.x = newValue
                if (this.x <= 0) {
                    this.$store.commit('setCurrentArea', this.map.areas[this.area.y - 1][this.area.x])
                    this.x = this.$refs.area.offsetHeight - (this.$options.VELOCITY * 2)
                } else if (this.x >= this.$refs.area.offsetHeight) {
                    this.$store.commit('setCurrentArea', this.map.areas[this.area.y + 1][this.area.x])
                    this.x = (this.$options.VELOCITY * 2)
                }
            }
        },
        playerY: {
            get: function () {
                return this.y
            },
            set: function (newValue) {
                this.y = newValue
                if (this.y <= 0) {
                    this.$store.commit('setCurrentArea', this.map.areas[this.area.y][this.area.x - 1])
                    this.y = this.$refs.area.offsetWidth - (this.$options.VELOCITY * 2)
                } else if (this.y >= this.$refs.area.offsetWidth) {
                    this.$store.commit('setCurrentArea', this.map.areas[this.area.y][this.area.x + 1])
                    this.y = (this.$options.VELOCITY * 2)
                }
            }
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
