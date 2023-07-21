<script setup>
import { ref } from 'vue';
import { NRow, NCol, NSpace, NButton, NGrid,NGi } from 'naive-ui'
import topbar from '../components/topbar.vue'
import mainIntro from '../components/mainIntro.vue'
import bMatching from '../components/b-matching.vue'
import bOdometer from '../components/b-odometer.vue'
// import test from '../components/test.vue'


</script>

<template>
    <topbar />
    <mainIntro/>
    <bMatching />
    <n-row gutter="0">
        <n-col :span="24">
            <bOdometer />
        </n-col>
    </n-row>

    <!-- <n-space>
        <n-button>Default</n-button>
        <n-button type="tertiary">
            Tertiary
        </n-button>
        <n-button type="primary">
            Primary
        </n-button>
        <n-button type="info">
            Info
        </n-button>
        <n-button type="success">
            Success
        </n-button>
        <n-button type="warning">
            Warning
        </n-button>
        <n-button type="error">
            Error
        </n-button>
    </n-space> -->
</template>


<style scoped>
.light-green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.12);
}

.green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.24);
}
</style>
