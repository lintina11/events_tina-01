<script setup>
import { ref, reactive } from 'vue'

const src = ref("./src/assets/img-title.png")
const marquee = reactive({
    "album1": [
        "./src/assets/sc-1.jpg",
        "./src/assets/sc-2.jpg",
        "./src/assets/sc-3.jpg",
        "./src/assets/sc-4.jpg",
        "./src/assets/sc-5.jpg"
    ],
    "album2": [
        "./src/assets/sc-6.jpg",
        "./src/assets/sc-7.jpg",
        "./src/assets/sc-8.jpg",
        "./src/assets/sc-9.jpg",
        "./src/assets/sc-10.jpg"
    ],
})

</script>

<template>
    <div class="main-intro">
        <div class="title-wrap">
            <h1>
                <span>Music</span>
                <span> is</span>
                <span> Life</span>
            </h1>
        </div>
        <div class="marquee-bg">
            <div class="photo-wall">
                <div class="photo-wrapper first">
                    <div class="photo" v-for="pic in marquee.album1">
                        <img :src="pic" alt="">
                    </div>
                </div>
                <div class="photo-wrapper second">
                    <div class="photo" v-for="pic in marquee.album1">
                        <img :src="pic" alt="">
                    </div>
                </div>
            </div>
            <div class="photo-wall reverse">
                <div class="photo-wrapper first">
                    <div class="photo" v-for="pic in marquee.album2">
                        <img :src="pic" alt="">
                    </div>
                </div>
                <div class="photo-wrapper second">
                    <div class="photo" v-for="pic in marquee.album2">
                        <img :src="pic" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main-intro {
    height: 90vh;
    overflow: hidden;

    .title-wrap {
        background-image: linear-gradient(65deg, #FA5168cc, #CF1AA7ee);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;

        h1 {
            color: #fff;
            font-size: 72px;
            text-align: center;
            text-shadow: 0 0 5px #fcc;

            span {
                display: block;
            }
        }
    }

    .photo-wall {
        overflow: hidden;
        display: flex;

        .photo-wrapper {
            display: flex;

            &.first {
                animation: scroll 60s linear infinite;
            }

            &.second {
                animation: scroll2 60s linear infinite;
                animation-delay: -30s;
            }

            .photo {
                width: 45vh;
                aspect-ratio: 1/1;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    filter: grayscale(100%);
                    vertical-align: middle;
                }
            }
        }

        &.reverse {
            @extend .photo-wall;

            .photo-wrapper {
                animation-direction: reverse;
            }
        }
    }
}




@keyframes scroll {
    from {
        transform: translateX(100%)
    }

    to {
        transform: translateX(-100%)
    }
}

@keyframes scroll2 {
    from {
        transform: translateX(0%)
    }

    to {
        transform: translateX(-200%)
    }
}
</style>
