<template>
    <the-sarch></the-sarch>
    <category-filter></category-filter>
    <div class="cart">
        <div>
            <h2>ショッピングバック</h2>
        </div>
        <div class="products">
            <ul>
                <cart-card
                        v-for="product in cartProducts"
                        :key='product.id'
                        :id='product.id'
                        :img="product.img"
                        :maker='product.maker'
                        :kinds='product.kinds'
                        :price='product.price'
                        :name="product.name"
                        @load-cart="loadCartProducts">
                </cart-card>
                    <CalculationCard
                    :cart-money="cartProducts"
                    ></CalculationCard>
            </ul>
        </div>
    </div>
</template>
<script>
import TheSarch from "@/components/layout/hom-epage_dir/TheSarch.vue";
import CategoryFilter from "@/components/layout/hom-epage_dir/CategoryFilter.vue";
import {useStore} from "vuex";
import {computed, onMounted} from "vue";
import CartCard from "@/components/ui/CartCard.vue";
import CalculationCard from '@/components/ui/CalculationCard.vue'

export default {
    components: {
        CartCard,
        TheSarch,
        CategoryFilter,
        CalculationCard
    },
    setup() {
        const store = useStore();
        onMounted(() => {
            loadCartProducts()
        })

        function loadCartProducts() {
            store.dispatch('cartProducts/loadCartProducts');
        }

       const cartProducts = computed(() => {
            return store.getters['cartProducts/cartProducts'];
        });


        return {
            cartProducts,
            loadCartProducts
        }
    }
}
</script>

<style scoped>
.cart {
    margin-left: auto;
    margin-right: auto;
    max-width: 700px;

}

h2 {
    text-align: center;
    margin: 70px;
}

.products {
    background-color: #FBFAF9;
    padding: 30px;
}

</style>