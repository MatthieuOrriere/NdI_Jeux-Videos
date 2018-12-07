<template>
    <div class="map">
        <div class="mapBox">
            <div v-for="areaX in map.areas"
                    :key="areaX"
                    class="mapRow">
                <div v-for="areaY in areaX"
                        :key="areaY"
                        class="mapTile"
                        :class="{ 'current': currentArea === areaY }"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Map',

        props: {
            map: {
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
    .map {
        min-height: 60px;
        width: calc(100% - 60px);
        padding: 10px;
        margin: 20px;
        background: white;
        border: solid 3px rgb(222, 11, 118);
        overflow: auto;
        .mapBox {
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            .mapRow {
                display: flex;
                flex-direction: row;
                .mapTile {
                    height: 40px;
                    width: 40px;
                    margin: 1px;
                    background-color: black;
                    &.current {
                        background-color: rgb(222, 11, 118);
                    }
                }
            }
        }
    }
</style>
