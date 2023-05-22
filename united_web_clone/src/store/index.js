import {createStore} from "vuex";

import ProductsModeuls from "@/store/modeuls/products";
import FavoriteModeuls from "@/store/modeuls/favorite";

const store = createStore({
    modules:{
        products:ProductsModeuls,
        favorite:FavoriteModeuls
    },
    state(){
        return{
            userId:'c3'
        };
    },
    getters:{
        userId(state){
            return state.userId;
        }
    }
})
export default store;