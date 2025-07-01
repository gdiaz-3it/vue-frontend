import './assets/main.css'
import { createApp } from 'vue'
import uikit from 'uikit-3it-vue'
import 'uikit-3it-vue/dist/css/uikit-3it-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import 'vue-select/dist/vue-select.css'
import vSelect from 'vue-select'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router'

library.add(fas, far, fab)

const app = createApp(App)

app.use(router)

app.use(VueTippy)
app.component('v-select', vSelect)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(uikit)
app.mount('#app')
