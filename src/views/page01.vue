<script setup>
import { ref } from 'vue';
import { NRow, NCol } from 'naive-ui'
import topbar from '../components/topbar.vue'
import mainIntro from '../components/mainIntro.vue'
import test from '../components/test.vue'



</script>

<template>
    <topbar />
    <mainIntro/>
    <!-- 行事曆 -->
    <n-row gutter="0">
        <n-col :span="18" :offset="3">
            <!-- <bTitle msg="活動日程"/> -->
            <!-- <bSchedule/> -->
        </n-col>
    </n-row>
    <test/>
</template>

<style scoped></style>
