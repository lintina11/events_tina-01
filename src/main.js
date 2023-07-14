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

const routes = [
    { path: '/', component: Home }
]

const router = createRouter( {
    history: createWebHistory(),
    routes:[
        { path:'/',name:'Home',component: Home}
    ]
})

createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
