export default {
    async addCartProduct(context, data) {
        const productId = data.id;
        const CartProductData = data;

        await fetch(`https://prodact-data-default-rtdb.firebaseio.com/carts/${productId}.json`, {
            method: 'PUT',
            body: JSON.stringify(CartProductData)
        });
        context.commit('addCartProduct', CartProductData)
    },

    async deleteCartProducts(context,id){
        await fetch(`https://prodact-data-default-rtdb.firebaseio.com/carts/${id}.json`, {
            method: 'DELETE',
        });
        context.commit('deleteCartProduct', id);
    },

    async loadCartProducts(context) {
        const response = await fetch(`https://prodact-data-default-rtdb.firebaseio.com/carts.json`);
        const CartProductData = await response.json();

        const cartProducts = []; // 変数productsを追加

        for (const key in CartProductData) {
            const cartProduct = {
                id: key,
                img: CartProductData[key].img,
                name: CartProductData[key].name,
                maker: CartProductData[key].maker,
                kinds: CartProductData[key].kinds,
                overview: CartProductData[key].overview,
                points: CartProductData[key].points,
                price: CartProductData[key].price,
                size: CartProductData[key].size
            };
            cartProducts.push(cartProduct);
        }
        context.commit('setCartProduct', cartProducts); // 変数名をproductsに修正
    }
}