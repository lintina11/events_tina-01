<script setup>
defineProps(
    { count: "count" }
)


</script> 

<template>
    <div>
        <!-- 子組件的內容 -->
        <h2>
            {{ count }}
            <button @click="$emit('increaseBy')">點我+1</button>
            
        </h2>
        <!-- v-once -->
        <span v-once> 原本是 {{count}} </span>
    </div>
</template>


<style>
h2,p,span {
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2;
    /* margin: 30px auto 20px; */
}
</style>