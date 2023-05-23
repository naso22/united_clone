export default{
    addFavorite(state,payload){
        state.favorites.push(payload)
    },

    setFavorite(state,payload){
        state.favorites = payload;
    },
}