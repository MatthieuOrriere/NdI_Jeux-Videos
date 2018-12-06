<template>
    <div class="area">
        <div class="rowTile">
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
        </div>
        <div class="rowTile">
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
        </div>
        <div class="rowTile">
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
        </div>
        <div class="rowTile">
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
        </div>
        <div class="rowTile">
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
            <Tile/>
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

    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style scoped lang="scss">
    .area {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        .rowTile {
            display: flex;
            flex-direction: row;
            flex: 1;
        }
    }
</style>
