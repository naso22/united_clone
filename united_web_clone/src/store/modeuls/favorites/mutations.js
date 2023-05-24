export default{
    addFavorite(state,payload){
        console.log(payload)
    },
    setFavorite(state,payload){
        state.favorites = payload;
    },
    deleteFavorite(state,payload){
        console.log(payload)
    }
}