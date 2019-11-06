import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import createPersistedPlugin from './plugins/createPersistedPlugin.js'

Vue.use(Vuex)

const store = new Vuex.Store(
{
    modules:
    {
        app
    },
    getters,
    plugins: [createPersistedPlugin()]
})

export default store
