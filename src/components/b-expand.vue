<script setup>
import { ref, reactive } from 'vue'
import { NSpace, NButton,NLayout } from 'naive-ui'


// 拖曳效果
const items = ref([
    { id: 1, text: '項目1' , url: './src/assets/pz1.jpg'},
    { id: 2, text: '項目2' , url: './src/assets/pz2.jpg'},
    { id: 3, text: '項目3' , url: './src/assets/pz3.jpg'},
    { id: 4, text: '項目4' , url: './src/assets/pz4.jpg'},
    { id: 5, text: '項目5' , url: './src/assets/pz5.jpg'},
    { id: 6, text: '項目6' , url: './src/assets/pz6.jpg'},
    { id: 7, text: '項目7' , url: './src/assets/pz7.jpg'},
    { id: 8, text: '項目8' , url: './src/assets/pz8.jpg'},
    { id: 9, text: '項目9' , url: './src/assets/pz9.jpg'}
]);

const active = ref(1)

function moreDown() {
    if (active.value < items.value.length) {
        active.value = items.value.length;
    } else {
        active.value = 1;
    }
}
</script>

<template>
    <div class="comment-wrap">
        <div class="comment-list">
            <div  v-for="(item,index) in items" >
                <div class="list" v-if="index <= active">
                    {{ index }}
                    {{ active }}
                    {{ item.text }}
                </div>
            </div>
        </div>
        <div class="more" @click="moreDown"> more </div>
    </div>
    
</template>

<style lang="scss" scoped>
.comment-wrap{
    display: inline-block;
    padding: 1rem;
    width: 200px;
    height: auto;
    background-color: #fff;
    border: 1px solid #a98;
    box-shadow: 0 0 20px -10px #876;
    border-radius: 5px;
    transition: .3;
    margin: 10px;
    position: relative;
    overflow: hidden;
    &:hover{
        .more{
            bottom: 0;
        }
    }
}
.comment-list{
    display: flex;
    flex-direction: column-reverse;
    .list{
        padding: 10px 0;
    }
}
.more{
    background-color: #f003;
    backdrop-filter: blur(5px);
    text-align: center;
    padding: 10px 0;
    line-height: 20px;
    position: absolute;
    width: 100%;
    bottom: -40px;
    left: 0;
    right: 0;
    transition: .3s;
}
</style>
