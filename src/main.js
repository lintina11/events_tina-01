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
import { faBars  } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add( faBars )

import App from './App.vue'
import Home from './views/index.vue'
import test from './views/test.vue'
import album from './views/album.vue'
import tapping from './views/tapping-game.vue'

const router = createRouter( {
    history: createWebHistory(),
    routes:[
        { path:'/',name:'Home',component: Home},
        { path:'/test',name:'test', component: test},
        { path:'/album',name:'album', component: album},
        { path:'/tapping-game',name:'tapping', component: tapping}
    ]
})

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')