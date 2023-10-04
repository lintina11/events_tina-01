<script setup>

import { reactive } from 'vue'

const marquee = reactive({
    "album1": [
        "./src/assets/sc-1.jpg",
        "./src/assets/sc-2.jpg",
        "./src/assets/sc-3.jpg",
        "./src/assets/sc-4.jpg",
        "./src/assets/sc-5.jpg"
    ]
})

for (let i = 0; i <= 5; i++) {
    window.setTimeout(function () {
        console.log(i)
    }, 1000 * i
    )
}

</script>
<template>
    <ul class="album">
        <li v-for="pic in marquee.album1">
            <img :src="pic" alt="">
        </li>
    </ul>
</template>

<style scoped lang="scss">
.album {
    background-color: oldlace;
    display: flex;
    flex-wrap: wrap;
    width: 600px;
    margin: 0 auto;

    li {
        aspect-ratio: 1/1;
        flex-basis: 200px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>