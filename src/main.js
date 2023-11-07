import { createApp } from 'vue'
// 全域css
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'


// Font Awesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faBars)

import App from './App.vue'
import Home from './views/index.vue'
import test from './views/test.vue'
import album from './views/album.vue'
import tapping from './views/tapping-game.vue'
import flyin from './views/flyin-template.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/test', name: 'test', component: test },
        { path: '/album', name: 'album', component: album },
        { path: '/tapping-game', name: 'tapping', component: tapping },
        { path: '/flyin-template', name: 'flyin', component: flyin }
    ]
})

// 滾動觸發項目(全站)
export function scrollTrigger(e) {
    let scroll
    const nav = document.querySelector("#nav")
    let flyInList = document.querySelectorAll(".jsFlyIn")

    function getScroll() {
        scroll = window.scrollY
        // 隨滾動要觸發哪些動畫效果
        menuShow()
        flyIn()
    }
    // [1]
    function menuShow() {
        if (scroll > 100) {
            nav.classList.add('is-sink')
        } else if (scroll < 100) {
            nav.classList.remove('is-sink')
        }
    }
    // [2]
    function flyIn() {
        if (flyInList) {
            flyInList.forEach(item => {
                if (item.getBoundingClientRect().top < 250) {
                    item.classList.add('flyin')
                } else if (item.getBoundingClientRect().top > 250) {
                    item.classList.remove('flyin')
                }
            })
        }
    }
    // 實際觸發滾動
    window.addEventListener('scroll', getScroll)
}

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')