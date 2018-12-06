<template>
  <div class="game">
    <Area/>
  </div>
</template>

<script>
import Area from '@/components/Area'

export default {
  name: 'Game',
  components: {
    Area
  },

  data () {
    return {
      currentArea: null
    }
  },
  methods: {
    changeArea: function (newArea) {
      this.currentArea = newArea
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .game {
    height: 100%;
    width: 100%;
  }
</style>
