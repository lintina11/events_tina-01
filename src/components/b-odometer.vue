<script setup>
import { ref, reactive, onMounted, onUnmounted, computed } from 'vue'
import { NSpace, NButton, NLayout } from 'naive-ui'


// 拖曳效果
const items = reactive([
    { id: 1, text: '案讚人次', icon: '😍' },
    { id: 2, text: '瀏覽人次', icon: '😎' },
    { id: 3, text: '活動聲量', icon: '😊' },
    { id: 4, text: '贊助人次', icon: '😲' }
]);

const values = ref([0, 0, 0, 0])
const endValues = [60, 124, 39, 101]
// const endValuess = computed(()=>{
//     for( let i=0; i<items.value.length ;i++){
//         endValues.push(items.value[i].val)
//     }
// })
let interval = null
function odometer() {
    interval = setInterval(() => {
        values.value.forEach((value, index) => {
            if (value < endValues[index]) {
                values.value[index] += 1; // 跳表的步长，根据需求调整
                console.log("here")
            } else if (value == Math.max(...endValues)) {
                clearInterval(interval);
            }
        });
    }, 10);
}

// 在组件挂载时启动动画
onMounted(odometer);

</script>

<template>
    <div class="odometer-wrap">
        <div class="cards" @click="odometer">
            <div class="card" v-for="(item, index) in items" :key="index" @click="values[index]++">
                <div class="icon">{{ item.icon }}</div>
                <div class="num">{{ values[index] }}</div>
                <div class="phrase">{{ item.text }}</div>
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
    background-image: linear-gradient(#ede,transparent);
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
</style>
