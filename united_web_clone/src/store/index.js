import {createStore} from "vuex";

import ProductsModeuls from "@/store/modeuls/products";

const store = createStore({
    modules:{
        products:ProductsModeuls
    }
})
export default store;