<script setup>
import { onMounted, ref, reactive } from 'vue'


// 展開效果
const items = ref([
    { id: 1, text: '驚喜優惠券', url: './src/assets/sc-1.jpg' },
    { id: 2, text: '免運再加碼', url: './src/assets/sc-2.jpg' },
    { id: 3, text: '指定通路優惠', url: './src/assets/sc-3.jpg' },
    { id: 4, text: '驚喜優惠券', url: './src/assets/sc-4.jpg' },
    { id: 5, text: '免運再加碼', url: './src/assets/sc-5.jpg' },
    { id: 6, text: '指定通路優惠', url: './src/assets/sc-6.jpg' }
]);

const active = ref(1)


onMounted(() => {
    (function () {
        let cards = ref(document.querySelector('ul.cards'))
        let lastCard = ref(document.querySelector('.cards > li:last-child'))
        const height = ref(lastCard.value.offsetHeight)
        console.log(cards.value)

        cards.value.addEventListener("scroll", () => {
            const Top = Math.floor(lastCard.value.offsetTop)
            console.log(Top)

        }, false)
    })()
});

</script>

<template>
    <div class="ticket">
        <h2>驚喜好康</h2>
        <ul class="cards">
            <li v-for="item in items">
                <div class="txt">
                    <h3>{{ item.text }}</h3>
                </div>
                <div class="img" :style="{ backgroundImage: 'url(' + item.url + ')' }"></div>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
    display: none;
}

.ticket {
    height: 100%;
    padding: 30px 0;

    h2 {
        line-height: 2;
        font-size: 1.6rem;
        font-weight: 900;
        margin-bottom: 10px;
    }

    &::before {
        filter: hue-rotate(50deg);
    }
}

.cards {
    height: 380px;
    overflow-y: auto;
    background-color: #f7f7f7;
    // background-image: linear-gradient(#fff,#eee);
    padding: 0 20px;

    li {
        width: 95%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 3px;
        overflow: hidden;
        margin: 15px auto;
        box-sizing: border-box;
        box-shadow: 1px 1px 0 3px #edd;

        // border: 1px solid #888;
        .txt {
            color: #352147;
            font-weight: 700;
            flex: 60% 0 0;
            padding: 10px;
            height: 100%;
            background-color: #fee;
            box-sizing: border-box;

            h3 {
                line-height: 1.5;
                border-bottom: 1px solid #777;
            }
        }

        .img {
            flex: 40% 0 0;
            height: 100%;
            background-size: cover;
        }
    }
}</style>
