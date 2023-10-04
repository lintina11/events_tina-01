<script setup>
import { ref, reactive } from 'vue'
const count = ref(99)

// emit
import emit from '../components/test/emit.vue'
function plus() {
    count.value++
}

// slot
import sloter from '../components/test/slot.vue'

// transition
import transitioner from '../components/test/transition.vue'

</script>

<template>
    <!-- emit -->
    <emit @increaseBy="plus" :count="count" />
    <hr>
    
    <!-- transition -->
    <transitioner/>
    <!-- slot -->
    <sloter>
        <template v-slot:certain-slot>
            <h2>For certain slot</h2>
        </template>
        <template v-slot:certain-slot2>
            <h2>For certain slot2</h2>
        </template>
        <p>For unnamed slot
            <button>ㄅㄆㄇ</button>
        </p>
    </sloter>
    <hr>

</template>
<style lang="scss" scoped></style>
