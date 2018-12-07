<template>
  <div class="game">
    <Area
      :area="areaList[currentArea]"
    />
  </div>
</template>

<script>
import Area from '@/components/Area'

export default {
  name: 'Game',
  components: {
    Area
  },

  data: function () {
    return {
      mapList: {},
      areaList: {},
      tileList: {}
    }
  },

  computed: {
    currentMap: {
      get: function () {
        return this.$store.state.currentMap
      },
      set: function (id) {
        this.$store.commit('setCurrentMap', id)
      }
    },
    currentArea: {
      get: function () {
        return this.$store.state.currentArea
      },
      set: function (id) {
        this.$store.commit('setCurrentArea', id)
      }
    }
  },

  created: function () {
    let mapId = this.randomUuid()
    this.addMapList(mapId, 'map1')

    const MAX_AREA_X = 9
    const MAX_AREA_Y = 9
    const MAX_TILE_X = 9
    const MAX_TILE_Y = 9

    let areaListX = []
    for (let areaX = 0; areaX < MAX_AREA_X; areaX++) {
      let areaListY = []
      for (let areaY = 0; areaY < MAX_AREA_Y; areaY++) {

        let tileListX = []
        for (let tileX = 0; tileX < MAX_TILE_X; tileX++) {
          let tileListY = []
          for (let tileY = 0; tileY < MAX_TILE_Y; tileY++) {
            let tileId = this.randomUuid()
            this.addTileList(tileId, 'img', 'traversable', 'lifecost')
            tileListY.push(tileId)
          }
          tileListX.push(tileListY)
        }

        let areaId = this.randomUuid()
        this.addAreaList(areaId, areaX, areaY, tileListX)
        areaListY.push(areaId)
      }
      areaListX.push(areaListY)
    }
    this.addMapArea(mapId, areaListX)
    console.log('finished')

    this.$nextTick(function () {
      this.changeMap(Object.keys(this.mapList)[0])
      this.changeArea(Object.keys(this.areaList)[0])
    })
  },

  methods: {
    changeMap: function (newMap) {
      console.log(newMap)
      this.currentMap = newMap
    },
    changeArea: function (newArea) {
      console.log(newArea)
      this.currentArea = newArea
    },

    addMapList (id, name) {
      this.$set(this.mapList, id, {
        id,
        name,
        areas: null
      })
    },
    addAreaList (id, x, y, tiles) {
      this.$set(this.areaList, id, {
        id,
        x,
        y,
        tiles
      })
    },
    addTileList (id, img, traversable, lifecost) {
      this.$set(this.tileList, id, {
        id,
        img,
        traversable,
        lifecost
      })
    },

    addMapArea (id, areas) {
      this.$set(this.mapList[id], 'areas', areas)
    },

    randomUuid: function () {
      return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
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
