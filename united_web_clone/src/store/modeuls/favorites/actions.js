// export default {
export default {
    async addFavorite(context,data){
        const productId =data.id;
        const favoriteData =data;

        await fetch(`https://prodact-data-default-rtdb.firebaseio.com/favorite/${productId}.json`,{
            method:'PUT',
            body:JSON.stringify(favoriteData)
        });
        context.commit('addFavorite',favoriteData)
    },
}


//     async loadProducts(context) {
//         const response = await fetch(`https://prodact-data-default-rtdb.firebaseio.com/favorite/favorite.json`);
//         const responseData = await response.json();
//
//         const favorites = []; // 変数productsを追加
//
//         for (const key in responseData) {
//             const favorite = {
//                 id: key,
//                 img: responseData[key].img,
//                 name: responseData[key].name,
//                 maker: responseData[key].maker,
//                 kinds: responseData[key].kinds,
//                 overview: responseData[key].overview,
//                 points: responseData[key].points,
//                 price: responseData[key].price,
//                 size: responseData[key].size
//             };
//             favorites.push(favorite);
//         }
//         context.commit('setFavorite', favorites); // 変数名をproductsに修正
//     }
// }