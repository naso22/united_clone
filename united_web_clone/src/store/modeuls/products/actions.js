export default {
    async 'loadProducts'(context){
        const response= await fetch(`https://prodact-data-default-rtdb.firebaseio.com/products.json`
        );
        const responseData = await response.json();

        if (!response.ok){
            const error = new Error(responseData.message || 'failed to fetch');
            throw error;
        }

        const products =[];

        for (const key in responseData){
            const product ={
                id:key,
                img:responseData[key].img,
                name:responseData[key].name,
                maker:responseData[key].maker,
                kinds:responseData[key].kinds,
                overview:responseData[key].overview,
                points:responseData[key].points,
                price:responseData[key].price,
                size:responseData[key].size
            };
            products.push(product)
        }
        context.commit('setProducts',products);
    }
}