<script setup>
import { ref, reactive, onMounted } from 'vue'
import { NAvatarGroup } from 'naive-ui'



// 拖曳效果
const items = reactive([
    { id: 1, text: '按讚人次', icon: '😍' },
    { id: 2, text: '瀏覽人次', icon: '😎' },
    { id: 3, text: '活動聲量', icon: '😊' },
    { id: 4, text: '贊助人次', icon: '😲' }
]);

const values = ref([0, 0, 0, 0])
const endValues = [60, 124, 39, 101]

let interval = null
let odometerHandler = true
function odometer() {
    if (odometerHandler) {
        interval = setInterval(() => {
            values.value.forEach((value, index) => {
                if (value < endValues[index]) {
                    values.value[index] += 1; // 跳表的級距，根據需求調整
                } else if (value == Math.max(...endValues)) {
                    clearInterval(interval);
                }
            });
        }, 10);
    }
}

// 頁面載入後啟動
onMounted(() => {
    // 啟動里程器
    (function () {
        let odometerSelf = ref(document.querySelector('#odometerSelf'))
        let windowH = window.screen.height
        window.addEventListener("scroll", () => {
            let odometerTop = Math.floor(odometerSelf.value.getBoundingClientRect().top)
            if (odometerTop < windowH * 2 / 3) {
                odometer()
                odometerHandler = false
            }
        }, false)
    })()
});

// 贊助人資料
const options = reactive(
    [
        {
            name: 'Leonardo DiCaprio',
            src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
        },
        {
            name: 'Jennifer Lawrence',
            src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
        },
        {
            name: 'Audrey Hepburn',
            src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
        },
        {
            name: 'Anne Hathaway',
            src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
        },
        {
            name: 'Taylor Swift',
            src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
        }
    ]
)
</script>

<template>
    <div class="odometer-wrap">
        <div id="odometerSelf" class="cards" @click="odometer">
            <div class="card" v-for="(item, index) in items" :key="index" @click="values[index]++">
                <div class="icon">{{ item.icon }}</div>
                <div class="num">{{ values[index] }}</div>
                <div class="phrase">{{ item.text }}</div>
                <n-avatar-group :options="options" :size="30" :max="3" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.odometer-wrap {
    width: 80%;
    margin: 30px auto;
    padding: 30px 0;
}

.cards {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.card {
    padding: 2rem 1rem;
    background-image: linear-gradient(#ede, transparent);
    border-radius: 5px;
    width: 200px;
    text-align: center;

    .icon {
        font-size: 2rem;
    }

    .num {
        color: #111;
        font-size: 2.5rem;
        font-weight: 700;
        margin: 20px 0;
    }

    .phrase {
        color: #111;
        font-weight: 700;
        font-size: 20px;
    }
}
.n-avatar-group{
    margin: 20px 0;
}
</style>
