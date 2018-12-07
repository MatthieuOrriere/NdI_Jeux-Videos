<template>
  <div class="game">
    <div class="game-border"></div>
    <Area v-if="currentArea"
        :map="mapList[currentMap]"
        :area="areaList[currentArea]"
        :tile-list="tileList"/>
    <div class="game-border">
      <Map v-if="currentMap"
          :map="mapList[currentMap]"/>
      <ArrowKey/>
    </div>
  </div>
</template>

<script>
import Area from '@/components/Area'
import Map from '@/components/Map'
import ArrowKey from '@/components/ArrowKey'
import { tileOneOne } from '@/mixins/TileOneOne'

export default {
  name: 'Game',
  components: {
    Area,
    Map,
    ArrowKey
  },
  mixins: [
    tileOneOne
  ],

  data: function () {
    return {
      mapList: {},
      areaList: {},
      tileList: {},
      myMap: [],
      cpt: 1,
      listBlock: {}
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

    for (let x = 0; x < MAX_AREA_X; x++) {
      this.myMap[x] = []
      for (let y = 0; y < MAX_AREA_Y; y++) {
        this.myMap[ x ][ y ] = 0
      }
    }

    for (let x = 0; x < MAX_AREA_X; x++) {
      for (let y = 0; y < MAX_AREA_Y; y++) {
        if (this.myMap[x][y] === 0) {
          let rand = this.randomNumber()
          let max = this.defineSizeMax(rand)
          this.checkAndSetBlock(max, x, y)
        }
      }
    }

    console.log(this.myMap.join('\n'))
    console.log(this.listBlock)

    let areaListX = []
    for (let areaX = 0; areaX < MAX_AREA_X; areaX++) {
      let areaListY = []
      for (let areaY = 0; areaY < MAX_AREA_Y; areaY++) {

        let tileListX = []
        for (let tileX = 0; tileX < MAX_TILE_X; tileX++) {
          let tileListY = []
          for (let tileY = 0; tileY < MAX_TILE_Y; tileY++) {
            let tileId = this.randomUuid()
            this.addTileList(tileId, 'plain-grass-tile', 'traversable', 'lifecost')
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

    addMapList: function (id, name) {
      this.$set(this.mapList, id, {
        id,
        name,
        areas: null
      })
    },
    addAreaList: function (id, x, y, tiles) {
      this.$set(this.areaList, id, {
        id,
        x,
        y,
        tiles
      })
    },
    addTileList: function (id, img, traversable, lifecost) {
      this.$set(this.tileList, id, {
        id,
        img,
        traversable,
        lifecost
      })
    },

    addMapArea: function (id, areas) {
      this.$set(this.mapList[id], 'areas', areas)
    },

    randomUuid: function () {
      return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
    },

    randomNumber: function () {
      return Math.floor(Math.random() * Math.floor(100))
    },
    defineSizeMax: function (rand) {
      if (rand >= 80) {
        return 5
      } else if (rand >= 60) {
          return 4
      } else if (rand >= 40) {
          return 3
      } else if (rand >= 20) {
          return 2
      } else {
          return 1
      }
    },
    checkAndSetBlock: function (distance, positionX, positionY) {
      if (positionX + distance > 9) distance = 9 - positionX
      if (positionY + distance > 9) distance = 9 - positionY
      let block = []

      for (let x = 0; x < distance; x++) {
        block[x] = []
        for (let y = 0; y < distance; y++) {
          if (this.myMap[x + positionX][y + positionY] === 0) {
            this.myMap[x + positionX][y + positionY] = this.cpt
            block[x][y] = 1
          } else {
            block[x][y] = 0
          }
        }
      }
      this.listBlock[this.cpt] = block
      this.cpt += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .game {
    display: flex;
    height: 100%;
    width: 100%;
    background-color: rgb(76, 30, 197);
    background-image: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 35px,
      rgb(245, 254, 12) 35px,
      rgb(245, 254, 12) 70px);
    .game-border {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }
</style>
