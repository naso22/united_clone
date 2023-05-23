import {createStore} from "vuex";

import ProductsModeuls from "@/store/modeuls/products";
import FavoriteModeuls from "@/store/modeuls/favorites/index";

const store = createStore({
    modules:{
        products:ProductsModeuls,
        favorites:FavoriteModeuls
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