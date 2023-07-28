<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)
</script>

<template>
    <h2>{{ msg }}</h2>
</template>

<style lang="scss" scoped>
h2{
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    margin: 20px 0;
}
</style>
