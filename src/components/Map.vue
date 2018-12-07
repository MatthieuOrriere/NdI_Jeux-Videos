<template>
    <div class="map">
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
        }
    }
</script>

<style scoped lang="scss">
    .map {
        position: relative;
    }
</style>
