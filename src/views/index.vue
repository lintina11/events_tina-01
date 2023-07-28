<script setup>
import { ref } from 'vue';
import { NRow, NCol } from 'naive-ui'
import topbar from '../components/topbar.vue'
import bTitle from '../components/b-title.vue'
import mainIntro from '../components/mainIntro.vue'
import bMatching from '../components/b-matching.vue'
import bOdometer from '../components/b-odometer.vue'
import bSchedule from '../components/b-schedule.vue'
import bSignup from '../components/b-signup.vue'
// import test from '../components/test.vue'


</script>

<template>
    <topbar />
    <mainIntro/>

    <bMatching />
    <!-- 人次 -->
    <n-row gutter="0">
        <n-col :span="18" :offset="3">
            <bTitle msg="我們的夥伴"/>
            <bOdometer />
        </n-col>
    </n-row>
    <!-- 行事曆 -->
    <n-row gutter="0">
        <n-col :span="18" :offset="3">
            <bSchedule/>
        </n-col>
    </n-row>
    <!-- 報名 -->
    <n-row class="b-signup">
        <n-col :span="10" :offset="7">
            <bSignup/>
        </n-col>
    </n-row>
</template>


<style scoped>
.b-signup{
    background-color: #f7f7f7;
}
</style>
