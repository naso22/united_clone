export default {
async addFavorite(context,data){
    const productId =data.id;
    const productData = data
    const response= await fetch(`https://prodact-data-default-rtdb.firebaseio.com/favorite/${productId}.json`,{
        method:'PUT',
        body:JSON.stringify(productData)
    })
    console.log(productData);


    if (!response.ok){
        // error
    }
    context.commit('addFavorite', productData);
}
}