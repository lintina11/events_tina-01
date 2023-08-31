<script setup>
import { ref, reactive } from 'vue'

const isShow = ref(true)
function showToggle() {
    isShow.value = !isShow.value
    console.log(isShow.value)
}
</script> 

<template>
    <transition>
        <div class="box" v-show="isShow">
            <span>{{ isShow }}</span>
            <transition>
                <span>
                    <div class="txt">TRANSITION 111</div>
                </span>
            </transition>
        </div>
    </transition>
    <transition name="certain">
        <div class="box" v-show="!isShow">
            <span>
                <div class="txt">TRANSITION 222</div>
            </span>
        </div>
    </transition>
    <button @click="showToggle">換</button>
</template>


<style scoped>
.box {
    height: 200px;
    width: 100%;
    background-color: #aaf;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter,
.v-leave-to {
    opacity: 0;
    background-color: #fa0;
}

.certain-enter-active,
.certain-leave-active {
    transition: opacity 1s ease;
}

.certain-enter,
.certain-leave-to {
    opacity: 0;
    background-color: pink;
}
</style>