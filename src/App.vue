<script setup>
import { ref } from 'vue';

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition appear name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: .5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave,.fade-enter-to{
  opacity: 1;
}
</style>