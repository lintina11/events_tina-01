<script setup>
import { ref, reactive, onMounted, onUnmounted ,computed } from 'vue'
import { NSpace, NButton, NLayout } from 'naive-ui'


// 拖曳效果
const items = ref([
    { id: 1, text: '項目1', icon: '😍', val: 13 },
    { id: 2, text: '項目2', icon: '😎', val: 46 }
]);

const values = ref([0, 0])
const endValues = [60,123]
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
            }else if(value == Math.max(...endValues)){
                clearInterval(interval);
            }
        });
    }, 30);
}

// 在组件挂载时启动动画
// onMounted(odometer);

</script>

<template>
    <div class="odometer-wrap">
        <div class="cards" @click="odometer">
            <div class="card" v-for="(item, index) in items" :key="index" >
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
    margin: 10vh auto;
}

.cards {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.card {
    padding: 1rem;
    background-color: #fff;
    border: 1px solid #a98;
    box-shadow: 0 0 20px -10px #876;
    border-radius: 5px;
    width: 200px;
    text-align: center;

    .icon {
        font-size: 3rem;
    }

    .num {
        font-size: 4.5rem;
        font-weight: 700;
        margin: 15px 0;
    }

    .phrase {
        font-weight: 700;
    }
}
</style>
