<script setup>
import { ref, reactive, onMounted } from 'vue'
import { scrollTrigger } from '../main.js'

const menus = reactive({})

fetch(`./src/data/public.json`)
    .then(res => res.json())
    .then(
        data => {
            Object.assign(menus, data.menu)
        })
    .catch(err => console.log(err))

function menuTrigger() {
    let nav = document.querySelector("#nav")
    nav.classList.toggle("slide-in")
}

onMounted(() => {
    scrollTrigger()
})
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
                <!-- <a :href="menu.link">{{ menu.title }}</a> -->
                <router-link :to="menu.link">{{ menu.title }}</router-link>
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
            overflow: hidden;
            border-bottom: 1px solid #444;
            // outline: 1px solid red;
        }

        a {
            padding: 25px 20px;
            color: #fff;
            display: block;
        }
    }

    &.slide-in {
        right: 0;

        .menu li a {
            // outline: 1px solid yellow;
            animation: hbg-en .5s ease-out forwards;
        }

        button {
            border: 1px solid #555;
        }
    }

    &.is-sink {
        button {
            background-color: #f7f7f7;
            color: #222;
            top: 20px;
            left: -70px;
        }
    }
}

button {
    color: #fff;
    background-color: transparent;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    position: absolute;
    top: 10px;
    left: -50px;
    font-size: 20px;
    transition: .5s;
}

@keyframes hbg-en {
    0% {
        transform: translateY(100%);
    }

    45% {
        transform: translateY(100%);
    }

    100% {
        transform: translateY(0);
    }
}
</style>
