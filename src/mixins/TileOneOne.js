
export const tileOneOne = {
    TABLE_PLAIN: [
        'plain-grass-tile',
        'plain-grass-tile-second',
        'plain-flowers',
        'plain-blue-ground'
    ],
    TABLE_BLOCK: [
        'block-bricks',
        'block-lack',
        'block-rock',
        'block-sea'
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
                    let randomIndicePlain = this.randomNumber(this.TABLE_PLAIN.length)
                    let randomIndiceBlock = this.randomNumber(this.TABLE_BLOCK.length)
                    if (tileX === 0 || tileY === 0) {
                        tileList[tileX][tileY] = this.TABLE_PLAIN[randomIndicePlain]
                    }
                    if (rand > 75) {
                        tileList[tileX][tileY] = this.TABLE_PLAIN[randomIndicePlain]
                    } else {
                        tileList[tileX][tileY] = this.TABLE_BLOCK[randomIndiceBlock]
                    }
                }
            }
            return tileList
        }

    }
}
