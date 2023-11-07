<script setup>
import { onMounted, ref } from 'vue'
import topbar from '../components/topbar.vue'

function anchor() {
    const screenHeight = window.innerHeight
    function scrollToGap(anchor, direction) {
        // window.scrollTo(0, anchor*screenHeight);
        // console.log(`滾${scrollTop}`)
        // console.log(`(前)滾${lastScrollTop}`)
    }
    window.addEventListener('scroll', function () {
        // 滾軸距離
        let lastScrollTop = 0
        let scrollTop
        scrollTop = window.scrollY
        let anchor = 0

        if (Math.abs(scrollTop - lastScrollTop) >= 100) {
            let direction = scrollTop > lastScrollTop ? 1 : -1; // 滾動方向
            lastScrollTop = scrollTop;
            anchor += scrollTop * direction
            console.log(anchor)
            scrollToGap(anchor, direction)
            // window.scrollTo(0, scrollTop*screenHeight*direction/100);
        }
    })
}

function smoothScrollWithJs() {
    const container = document.querySelector('.scroll-container');
    const screenHeight = window.innerHeight
    const screenHeight2 = screen.height
    let anchor = 0

    console.log(screenHeight)

    function scrollToAnchor() {
        window.scrollTo({
            top: anchor,
            left: 0,
            behavior: "smooth",
        });

    }
    window.addEventListener('wheel', (event) => {
        // event.preventDefault();
        const delta = event.deltaY;
        anchor += delta * screenHeight / 100
        // 添加條件檢查，確保 anchor不小於0，不大於整個網頁的長度
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        anchor = Math.max(0, Math.min(anchor, maxScroll));

        console.log(anchor)
        scrollToAnchor()
    });
}

function smoothScrollWithCSSSnap() {
    const container = document.querySelector('.scroll-container');

    container.addEventListener('wheel', (event) => {
        event.preventDefault();
        const delta = event.deltaY;

        container.scrollBy({
            top: delta,
            behavior: 'smooth'
        });
    });
}
// 計算一次滾動距離=滾軸距離(scrollTop)x螢幕高度(getwindow)/100，用scrollto+座標帶你飛


function smoothScrollWithJq(){

}

onMounted(() => {
    // anchor()
    smoothScrollWithJs()
    // smoothScrollWithCSSSnap()
    smoothScrollWithJq()
})

</script>

<template>
    <div class="div">
        <topbar />
        <div class="page scroll-container">
            <div class="block-box scroll-item">
                <h2>1</h2>
            </div>
            <div class="block-box scroll-item">
                <h2>2</h2>
            </div>
            <div class="block-box scroll-item">
                <h2>3</h2>
            </div>
            <div class="block-box scroll-item">
                <h2>4</h2>
            </div>
        </div>
        <footer></footer>
    </div>
</template>


<style lang="scss" scoped>
%scroll-snap{
    scroll-snap-type: both mandatory;
    overflow-y: scroll;
    height: 100vh;
    scroll-behavior: smooth;
}
footer {
    height: 50vh;
    background-color: #222;
}
.page {
    // @extend %scroll-snap;
    z-index: 11;

    &::-webkit-scrollbar {
        display: none;
    }
}

.block-box {
    height: 100vh;
    scroll-snap-align: start end;

    &:nth-child(odd) {
        background-color: #f7e7d7;
    }

    &:nth-child(even) {
        background-color: #5f6f7f;
    }
}

@keyframes scroll {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-100%);
    }
}
</style>