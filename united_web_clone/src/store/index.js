import {createStore} from "vuex";

import ProductsModeuls from "@/store/modeuls/products";
import FavoriteModeuls from "@/store/modeuls/favorites/index";
import CartModeuls from '@/store/modeuls/Cartes/index'

const store = createStore({
    modules:{
        products:ProductsModeuls,
        favorites:FavoriteModeuls,
        cartProducts:CartModeuls
    },
})
export default store;