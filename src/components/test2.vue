<script setup>
import { ref, reactive, computed } from 'vue'
import { NSpace, NButton, NLayout } from 'naive-ui'


// 拖曳效果
const items = ref([
    { id: 1, text: '項目1' },
    { id: 2, text: '項目2' },
    { id: 3, text: '項目3' },
    { id: 4, text: '項目4' },
    { id: 5, text: '項目5' }
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
            <div v-for="(item, index) in items">
                <div class="list" v-if="index <= active">
                    {{ index }}
                    {{ active }}
                    {{ item.text }}
                </div>
            </div>
        </div>
        <div class="more" @click="moreDown">more</div>
    </div>
</template>

<style lang="scss" scoped>
.comment-wrap {
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

    &:hover {
        .more {
            bottom: 0;
        }
    }
}

.comment-list {
    display: flex;
    // flex-direction: column-reverse;
    flex-direction: column;

    .list {
        padding: 10px 0;
    }
}

.more {
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
}</style>
