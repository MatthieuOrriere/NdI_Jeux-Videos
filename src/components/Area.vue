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
    </div>
</template>

<script>
import Tile from '@/components/Tile'

export default {
    name: 'Area',
    components: {
        Tile
    },

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
    }
}
</script>

<style scoped lang="scss">
    .area {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100vh;
        margin: auto;
        .rowTile {
            display: flex;
            flex-direction: row;
            flex: 1;
        }
    }
</style>
