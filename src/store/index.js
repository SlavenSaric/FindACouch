import { createStore } from "vuex"
import couchesModule from './modules/couches/index.js'

const store = createStore({
    modules: {
        couches: couchesModule
    },
    state(){
        return {
            userId: 'c3'
        }
    },
    getters: {
        userId(state){
            return state.userId
        }
    }
})

export default store