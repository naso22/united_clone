import {createStore} from "vuex";

import ProductsModeuls from "@/store/modeuls/products";
import FavoriteModeuls from "@/store/modeuls/favorites/index";

const store = createStore({
    modules:{
        products:ProductsModeuls,
        favorites:FavoriteModeuls
    },
})
export default store;