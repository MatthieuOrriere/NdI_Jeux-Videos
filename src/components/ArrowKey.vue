<template>
    <div class="arrow-key">
        <div class="arrow-row">
            <div class="empty-key"/>
            <div class="key key-up"
                    :class="{ 'pressed': keyUp }">
                ⬆
            </div>
            <div class="empty-key"/>
        </div>
        <div class="arrow-row">
            <div class="key key-left"
                    :class="{ 'pressed': keyLeft }">
                ⬅
            </div>
            <div class="key key-down"
                    :class="{ 'pressed': keyDown }">
                ⬇
            </div>
            <div class="key key-right"
                    :class="{ 'pressed': keyRight }">
                ➡
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ArrowKey',

        data: function () {
            return {
                keyUp: false,
                keyLeft: false,
                keyDown: false,
                keyRight: false
            }
        },
        
        mounted() {
            window.addEventListener('keydown', event => {
                if (event.keyCode === 38) { 
                    this.pressUp()
                } else if (event.keyCode === 37) { 
                    this.pressLeft()
                } else if (event.keyCode === 40) { 
                    this.pressDown()
                } else if (event.keyCode === 39) { 
                    this.pressRight()
                }
            });
            window.addEventListener('keyup', event => {
                if (event.keyCode === 38) { 
                    this.clearUp()
                } else if (event.keyCode === 37) { 
                    this.clearLeft()
                } else if (event.keyCode === 40) { 
                    this.clearDown()
                } else if (event.keyCode === 39) { 
                    this.clearRight()
                }
            });
        },

        methods: {
            pressUp: function () {
                this.keyUp = true
            },
            clearUp: function () {
                this.keyUp = false
            },

            pressLeft: function () {
                this.keyLeft = true
            },
            clearLeft: function () {
                this.keyLeft = false
            },

            pressDown: function () {
                this.keyDown = true
            },
            clearDown: function () {
                this.keyDown = false
            },

            pressRight: function () {
                this.keyRight = true
            },
            clearRight: function () {
                this.keyRight = false
            }
        }
    }
</script>

<style scoped lang="scss">
    .arrow-key{
        margin-top: auto;
        .arrow-row {
            display: flex;
            width: calc(100% - 20px);
            margin-left: 20px;
            margin-bottom: 20px;
            .empty-key {
                height: 40px;
                width: calc(33.33% - 14px);
                margin-right: 20px;
            }
            .key {
                line-height: 40px;
                width: calc(33.33% - 20px);
                margin-right: 20px;
                font-size: 1.5rem;
                background-color: white;
                border: solid 3px rgb(222, 11, 118);
                text-align: center;
                transition: all 0.2s ease;
                &.pressed {
                    background-color: rgb(222, 11, 118);
                    color: white;
                }
            }
        }
    }
</style>
