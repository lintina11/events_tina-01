<script setup>
import { ref } from 'vue';
import { NRow, NCol, NSpace, NButton, NLayout, NLayoutHeader, NLayoutContent, NLayoutSider, NLayoutFooter } from 'naive-ui'
import topbar from '../components/topbar.vue'
import bMatching from '../components/b-matching.vue'
import bExpand from '../components/b-expand.vue'
import test2 from '../components/test2.vue'


</script>

<template>
    <topbar/>
    <bMatching/>
    <bExpand/>
    <test2/>

    <n-space>
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
    </n-space>
    <n-row gutter="0">
        <n-col :span="6">
            <div class="light-green" />
        </n-col>
        <n-col :span="6">
            <div class="green" />
        </n-col>
        <n-col :span="6">
            <div class="light-green" />
        </n-col>
        <n-col :span="6">
            <div class="green" />
        </n-col>
    </n-row>
</template>


<style scoped>
.n-layout-header,
.n-layout-footer {
    background: rgba(128, 128, 128, 0.2);
    padding: 24px;
}

.n-layout-sider {
    background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
    background: rgba(128, 128, 128, 0.4);
}

.light-green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.12);
}

.green {
    height: 108px;
    background-color: rgba(0, 128, 0, 0.24);
}
</style>
