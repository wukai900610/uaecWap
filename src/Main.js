// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import Vant,{ Locale } from 'vant'
import 'vant/lib/index.css'

import VueI18n from 'vue-i18n'
// import locale from 'element-ui/lib/locale'

import store from './store'
import {
    messages
} from "@/assets/api/i18n/"
import Util from "@/assets/service/customUtil"
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import '@/assets/service/permission' // permission control

Vue.use(VueI18n)
Vue.use(Vant)
Vue.config.productionTip = false
let lan = Util.getsessionStorage('lang') || 'en'
Util.setsessionStorage('lang',lan)
const i18n = new VueI18n({
    locale: lan,
    messages
})
Locale.use(lan, messages[lan])

/* eslint-disable no-new */
store.dispatch('set_skin', location.hostname)

Vue.filter('dateTime', function(value) {
    let data = value.replace(/T/g, " ")
    return data
})

new Vue({
    el: '#app',
    router,
    i18n,
    store,
    components: {
        App
    },
    render: h => h(App),
    mounted() {
        document.dispatchEvent(new Event('render-event'))
    }
})
