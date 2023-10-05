<script setup>
import { onMounted, ref, reactive } from 'vue'
import topbar from '../components/topbar.vue'
const click1 = ref(0)
const click2 = ref(0)

function tappingFade() {
    let tapItems = document.querySelectorAll('.jsTappingFade')
    let opacity = 1
    let timer
    function discover(e) {
        click1.value++
        if (opacity > 0.05) {
            opacity -= 0.1
        } else if (opacity < 0.05) {
            clearInterval(timer)
            opacity = 0
        }
        e.target.style.opacity = opacity
    }
    function recover(e) {
        clearInterval(timer)
        timer = setInterval(() => {
            if (opacity < 1 && opacity != 0) {
                opacity += 0.02
                e.target.style.opacity = opacity
                if (opacity > 1) {
                    opacity = 1
                }
            }
        }, 50);
    }
    tapItems.forEach(tapItem => {

        tapItem.addEventListener('click', discover, false)
        tapItem.addEventListener('mousedown', recover, false)
    });

}

function tappingSlide() {
    let tapItems = document.querySelectorAll('.jsTappingSlide')
    let place = 0
    let timer

    

    function discover(e) {
        click2.value++
        if (place < 100) {
            place += 5
        } else if (place > 100) {
            clearInterval(timer)
            place = 100
        }
        console.log(place)

        // 重複了
        let tapItemTarget = e.currentTarget
        let tapItemCover = tapItemTarget.querySelector('.jsPicCover')

        tapItemCover.style.transform = `translateY(${place}%)`
    }
    function recover(e) {
        clearInterval(timer)
        // 重複了
        let tapItemTarget = e.currentTarget
        let tapItemCover = tapItemTarget.querySelector('.jsPicCover')

        timer = setInterval(() => {
            if (place < 100 && place != 0) {
                place -= 0.5
                tapItemCover.style.transform = `translateY(${place}%)`
                if (place > 100) {
                    place = 100
                }
            }
        }, 50);
    }
    tapItems.forEach(tapItem => {
        tapItem.addEventListener('click', discover, false)
        tapItem.addEventListener('mousedown', recover, false)
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
                <div class="pic-cover jsPicCover"><span>{{click1}}</span></div>
            </div>
            <div class="pic jsTappingFade">
                <img src="../assets/sc-3.jpg" alt="獎品圖片">
                <div class="pic-cover jsPicCover"><span>Click!</span></div>
            </div>
            <div class="pic jsTappingSlide">
                <img src="../assets/sc-2.jpg" alt="獎品圖片">
                <div class="pic-cover jsPicCover"><span>{{click2}}</span></div>
            </div>
            <div class="pic jsTappingSlide">
                <img src="../assets/sc-4.jpg" alt="獎品圖片">
                <div class="pic-cover jsPicCover"><span>Click!</span></div>
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
}
</style>