<script setup>
import { ref } from 'vue'


defineProps(
    { msg: '預設標題' }
)

</script>

<template>
    <h2>{{ msg }}</h2>
</template>

<style lang="scss" scoped>
h2 {
    width: 100%;
    display: inline-block;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2;
    margin: 30px auto 20px;
}
</style>
