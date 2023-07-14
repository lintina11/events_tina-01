<script setup>
import { ref, reactive } from 'vue'


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
const info = reactive({
    title: 'PUZZLE',
    short: '祝你好運，盡情享受拼圖的樂趣吧！'
})

const shuffledItems = items.value.sort(() => Math.random() - 0.5);


let draggedItem = null;
let originalIndex = null;

function dragStart(index) {
    draggedItem = items.value[index];
    originalIndex = index;
}
function dragOver(index) {
    // 防止預設行為（例如在 Firefox 中拒絕拖放）
    event.preventDefault();
    // 將拖曳中的項目從原位置刪除
    // items.value.splice(items.value.indexOf(draggedItem), 1);
    // 在目標位置插入拖曳中的項目
    // items.value.splice(index, 0, draggedItem);
}
function drop(index) {
    // 防止預設行為
    event.preventDefault();
    items.value[originalIndex] = items.value[index];
    items.value[index] = draggedItem;
}
function dragEnd() {
    draggedItem = null;
    originalIndex = null;
}
function check(){
    let group = document.querySelectorAll('.drag-item')
    let finalAns = []
    group.forEach((li,index)=>{
        finalAns.push(items.value[index])
    })
    for(let i=0;i<group.length;i++){
        if(i+1 !== finalAns[i].id || finalAns[i].id - i !== 1){
            console.log(finalAns[i].id, i+1)
            window.alert('再試一下!')
            return
        }
    }
    correctAnn()
}

function correctAnn(){
    console.log("正確")
    window.alert('恭喜答對!')
}
</script>

<template>
    <div class="b-matching">
        <div class="matching-intro">
            <h1>{{ info.title }}</h1>
            <p>{{ info.short }}</p>
            <button id="check" @click="check()">確定</button>
        </div>
        <ul class="matching-puzzle">
            <li class="drag-item"  v-for="(item, index) in shuffledItems" 
            :key="item.id"  
            :draggable="true"
            @dragstart="dragStart(index)" 
            @dragover="dragOver(index)" 
            @drop="drop(index)"
            @dragend="dragEnd">
                <img :src="item.url" alt=""> 
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.b-matching{
    background-image: url(../src/assets/matching-bg.png);
    padding: 60px 10%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.matching-intro{
    flex: 50% 0 0;
    h1,p{
        color: #fff;
        margin: 10px 0;
    }
}
.matching-puzzle{
    flex: 70vh 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
}
li.drag-item{
    width: 33%;
    text-align: center;
    img{
        width: 100%;
        vertical-align: middle;
    }
}
#check{
    color: #fff;
    font-size: 1.2rem;
    padding: .5rem 2rem;
    background-color: #222;
    border-radius: 10px;
    margin: 10px 0;
    border: none;
}

</style>
