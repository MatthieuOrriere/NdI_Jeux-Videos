
export const tileOneOne = {
    TABLE_PLAIN: [
        'plain-grass-tile',
        'plain-grass-tile-second',
        'plain-flowers'
    ],
    TABLE_BLOCK: [
        'block-bricks',
        'block-lack',
        'block-rock'
    ],

    methods: {

        randomNumber: function (max) {
            return Math.floor(Math.random() * Math.floor(max))
        },

        randomTileOneOne: function () {
            let tileList = []
            for (let tileX = 0; tileX < 9; tileX++) {
                tileList[tileX] = []
                for (let tileY = 0; tileY < 9; tileY++) {
                    let rand = this.randomNumber(100)
                    let randomIndicePlain = Math.floor(Math.random() * Math.floor(this.$options.TABLE_PLAIN.length))
                    let randomIndiceBlock = Math.floor(Math.random() * Math.floor(this.$options.TABLE_BLOCK.length))

                    if (tileX === 0 || tileY === 0 || tileX === 8 || tileY === 8) {
                        tileList[tileX][tileY] = {
                            img: this.$options.TABLE_PLAIN[randomIndicePlain],
                            traversable: true,
                            lifecost: 0
                        }
                        continue
                    }
                    if (rand > 75) {
                        tileList[tileX][tileY] = {
                            img: this.$options.TABLE_BLOCK[randomIndiceBlock],
                            traversable: false,
                            lifecost: 0
                        }
                    } else {
                        tileList[tileX][tileY] = {
                            img: this.$options.TABLE_PLAIN[randomIndicePlain],
                            traversable: true,
                            lifecost: 0
                        }
                    }
                }
            }
            console.log(tileList)
            return tileList
        }

    }
}
