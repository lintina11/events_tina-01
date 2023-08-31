<script setup>
import { ref } from 'vue';

</script>

<template>
  <transition>
    <router-view/>
    <router-view/>
  </transition>
</template>


<style scoped>
.v-enter-active,.v-leave-active {
    transition: 1s ease;
}

.v-enter,.v-leave-to {
    opacity: 0;
    background-color: #fa0;
    transform: translateX(-100px);
}
</style>