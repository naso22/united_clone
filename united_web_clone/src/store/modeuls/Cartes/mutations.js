export default{
    addCartProduct(state,payload){
        console.log(payload)
    },
    setCartProduct(state,payload){
        state.favorites = payload;
    },
    deleteCartProduct(state,payload){
        console.log(payload)
    }
}