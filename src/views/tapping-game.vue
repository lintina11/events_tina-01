<script setup>
import { onMounted, ref } from 'vue'
import topbar from '../components/topbar.vue'

function tappingFade() {
    let tapItems = document.querySelectorAll('.jsTappingFade')
    let opacity = []
    let timer = {}
    //遮罩淡化動畫
    function fadeCover(tapItem, i, increment) {
        const tapItemCover = tapItem.querySelector('.jsPicCover')
        if (opacity[i] > 0.05) {
            opacity[i] -= increment
        } else if (opacity[i] < 0.05) {
            clearInterval(timer[i])
            opacity[i] = 0
        }
        tapItemCover.style.opacity = opacity[i]
    }
    // 點擊遮罩變淡
    function discover(e, i) {
        const el = e.currentTarget
        fadeCover(el, i, 0.1)
        console.log(timer)
    }
    // 停止點擊，遮罩回復
    function recover(e, i) {
        clearInterval(timer[i])
        const el = e.currentTarget
        timer[i] = setInterval(() => {
            if (opacity[i] < 1 && opacity[i] != 0) {
                fadeCover(el, i, -0.02)
                if (opacity[i] > 1) {
                    opacity[i] = 1
                }
            } else {
                clearInterval(timer[i])
            }
        }, 50);
    }
    tapItems.forEach((tapItem, i) => {
        opacity.push(1)
        tapItem.addEventListener('mousedown', e => discover(e, i), false)
        tapItem.addEventListener('mouseup', e => recover(e, i), false)
    });

}

function tappingSlide() {
    let tapItems = document.querySelectorAll('.jsTappingSlide')
    let timer = {}
    let place = []
    // 遮罩滑動動畫
    function moveCover(tapItem, i, increment) {
        const tapItemCover = tapItem.querySelector('.jsPicCover')
        place[i] += increment;
        if (place[i] < 0) {
            place[i] = 0
        } else if (place[i] > 100) {
            place[i] = 100
        }
        tapItemCover.style.transform = `translateY(${place[i]}%)`
    }
    // 點擊遮罩滑動
    function discover(e, i) {
        let el = e.currentTarget
        // 傳入(當前點擊元素,元素序列index,遮罩變動量(%))
        moveCover(el, i, 6)
    }
    // 停止點擊，遮罩回復
    function recover(e, i) {
        clearInterval(timer[i])
        let el = e.currentTarget
        timer[i] = setInterval(() => {
            if (place[i] > 0 && place[i] != 100) {
                // 傳入(當前點擊元素,元素序列index,遮罩回復量(%數))
                moveCover(el, i, -1)
            } else {
                clearInterval(timer[i])
            }
            console.log(i)
        }, 50);// 回復速度50
    }
    tapItems.forEach((tapItem, i) => {
        place.push(0)
        tapItem.addEventListener('mousedown', e => discover(e, i))
        tapItem.addEventListener('mouseup', e => recover(e, i))
    })
}

onMounted(() => {
    tappingFade()
    tappingSlide()
})

</script>

<template>
    <div class="page">
        <topbar />
        <div class="tapping-game-box">
            <div class="pic jsTappingFade">
                <img src="../assets/sc-1.jpg" alt="獎品圖片">
                <div class="pic-cover jsPicCover">
                    <span>1</span>
                </div>
            </div>
            <div class="pic jsTappingFade">
                <img src="../assets/sc-3.jpg" alt="獎品圖片">
                <div class="pic-cover jsPicCover">
                    <span>2</span>
                </div>
            </div>
            <div class="pic jsTappingSlide">
                <img src="../assets/sc-2.jpg" alt="獎品圖片">
                <div class="pic-cover jsPicCover">
                    <span>3</span>
                </div>
            </div>
            <div class="pic jsTappingSlide">
                <img src="../assets/sc-5.jpg" alt="獎品圖片">
                <div class="pic-cover jsPicCover">
                    <span>4</span>
                </div>
            </div>
        </div>
        <div class="another-game-box">
            <div class="another-game-box-inner">
                <div class="pic jsTappingSlide">
                    <img src="../assets/sc-5.jpg" alt="獎品圖片">
                    <div class="pic-cover jsPicCover">
                        <span>click</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.tapping-game-box {
    width: 100%;
    height: 100vh;
    background-color: #fc0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.another-game-box {
    text-align: center;
    background-image: linear-gradient(#fc0 40%, transparent 40%);

    &-inner {
        display: inline-block;
        margin: 0 auto;
    }

    .pic {
        border-radius: 50%;
        width: 500px;
        height: 500px;

        .pic-cover {
            background-color: #334;
        }
    }
}

.pic {
    width: 300px;
    height: 300px;
    position: relative;
    user-select: none;
    border: 3px solid #fff;
    overflow: hidden;

    img {
        width: 100%;
    }

    .pic-cover {
        text-align: center;
        vertical-align: middle;
        line-height: 300px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #222;
        opacity: 1;

        span {
            color: #fff;
            font-size: 30px;
            pointer-events: none;
        }
    }

}
</style>