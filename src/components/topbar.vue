<script setup>
import { ref, reactive } from 'vue'

const menus = reactive({})

fetch(`./src/data/public.json`)
    .then(res => res.json())
    .then(
        data => {
            Object.assign(menus, data.menu)
        })
    .catch(err => console.log(err))

defineProps({
    //   msg: String,
})

function menuTrigger() {
    let nav = document.querySelector("#nav")
    nav.classList.toggle("slide-in")
}

</script>

<template>
    <header>
        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
    </header>
    <nav id="nav">
        <button @click="menuTrigger">
            <font-awesome-icon icon="fa-solid fa-bars" />
        </button>
        <ul class="menu">
            <li v-for="menu in menus">
                <a href="#">{{ menu }}</a>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
header {
    background-color: #111;
    height: 50px;
    padding: 10px 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

    &::before {
        content: '';
        width: 0;
        height: 0;
        border-top: 40px solid #111;
        border-left: calc(50vw - 10px) solid transparent;
        border-right: calc(50vw - 10px) solid transparent;
        position: absolute;
        top: 68px;
        left: 50%;
        transform: translateX(-50%);
    }

}

.logo {
    position: absolute;
    left: 50%;
    top: 10px;
    transform: translateX(-50%);
    height: 90px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

nav {
    position: fixed;
    top: 0;
    bottom: 0;
    right: -195px;
    width: 200px;
    box-sizing: border-box;
    background-image: linear-gradient(#000c, #222);
    border-left: 5px solid #111;
    z-index: 10;
    transition: .3s;

    .menu {
        margin-top: 100px;

        li {
            padding: 15px 20px;
        }

        a {
            color: #fff;
        }
    }

    &.slide-in {
        right: 0;
    }
}

button {
    color: #222;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #fefc;
    // border: 1px solid #fff;
    position: absolute;
    top: 20px;
    left: -50px;
}</style>
