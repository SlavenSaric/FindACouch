import { createStore } from "vuex"
import couchesModule from './modules/couches/index.js'

const store = createStore({
    modules: {
        couches: couchesModule
    }
})

export default store