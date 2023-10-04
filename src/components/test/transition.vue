<script setup>
import { ref, reactive } from 'vue'

const isShow = ref(true)
function showToggle() {
    isShow.value = !isShow.value
}
</script> 

<template>
    <button @click="showToggle">換 <span>{{ isShow }}</span></button>
        <transition name="certain" mode="in-out">
            <div class="box box1" v-show="isShow">
                <span>
                    <div class="txt">1</div>
                </span>
            </div>
        </transition>
        <transition name="certain" mode="in-out">
            <div class="box box2" v-show="!isShow">
                <span>
                    <div class="txt">2</div>
                </span>
            </div>
        </transition>
</template>


<style lang="scss" scoped>
.box {
    height: 200px;
    width: 300px;
    margin: 0 auto;

    .txt {
        text-align: center;
        line-height: 200px;
        font-size: 40px;
    }
}

.box1 {
    background-color: #aaf;
}

.box2 {
    background-color: #faa;
}

.certain-enter-active,
.certain-leave-active {
    transition: opacity 1s ease;
}

.certain-enter,
.certain-leave-to {
    opacity: 0;
}
</style>