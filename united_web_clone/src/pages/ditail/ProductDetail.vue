<template>
    <the-sarch></the-sarch>
    <category-filter></category-filter>
    <div class="product">
            <div class="product__img">
                <img :src=productImg>
            </div>
        <div class="product-detail">
            <h2 class="product-detail__name">{{ productName }}</h2>
            <p class="product-detail__overview">{{ overView }}</p>
            <div class="product-price">
                <p class="product-price__value text_m">{{ price }}</p>
                <p class="product-price__points text_s">{{ houseCardPoint }}</p>
            </div>
            <p class="product__size text_s">{{ size }}</p>
            <div class="product-action">
                <OderButtom @click="oderButtom" class="product-actions__order-button">選択して注文</OderButtom>
                    <div class="product-actions__favorite-button-container">
                        <sarch-button @click="fovoliteModal">お気に入り追加</sarch-button>
                    </div>
            </div>
            <div>
                <ul class="product__menu">
                    <li>商品説明</li>
                    <li>サイズ・商品詳細</li>
                    <li>レビュー</li>
                </ul>
                <p></p>
            </div>
        </div>
    </div>
    <base-dialog
            v-if="modalOpen"
            @close="cloesButtom"
            :product-img="productImg"
            :fovorite="foverite"
    :selected-product="selectedProduct">
    </base-dialog>
</template>

<script>
import TheSarch from "@/components/layout/hom-epage_dir/TheSarch.vue";
import CategoryFilter from "@/components/layout/hom-epage_dir/CategoryFilter.vue";
import OderButtom from "@/components/ui/OderButtom.vue";
import SarchButton from '@/components/ui/SarchButton.vue';
import {ref, onMounted, computed} from "vue";
import {useStore} from 'vuex';
import BaseDialog from "@/components/layout/OderDialog/BaseDialog.vue";

export default {
    components: {
        BaseDialog,
        OderButtom,
        TheSarch,
        CategoryFilter,
        SarchButton,
    },
    props: ['id'],
    setup(props) {
        const selectedProduct = ref(null)
        const store = useStore();
        onMounted(() => {
            loadProducts()
        });
        async function loadProducts(){
            await store.dispatch('products/loadProducts');
            selectedProduct.value = store.getters['products/products'].find(
                (product) => product.id === props.id
            );
        }


        const productImg = computed(() => {
            return selectedProduct.value ? selectedProduct.value.img : '';
        })

        const productName = computed(() => {
            return selectedProduct.value ? selectedProduct.value.name :''
        })

        const overView = computed(() => {
            return selectedProduct.value ?selectedProduct.value.overview:''
        })

        const price = computed(() => {
            return selectedProduct.value ?selectedProduct.value.price:''
        })

        const houseCardPoint = computed(() => {
            return selectedProduct.value ?selectedProduct.value.points:''
        })

        const size = computed(() => {
            return selectedProduct.value ?selectedProduct.value.size:''
        })

        let modalOpen = ref(false);
        const foverite = ref('')

        function oderButtom() {
            foverite.value = '商品を注文する'
            modalOpen.value = true
        }

        function fovoliteModal() {
            foverite.value = 'お気に入り'
            modalOpen.value = true
        }

        function cloesButtom() {
            foverite.value = ''
            modalOpen.value = false
        }

        return {
            productImg,
            productName,
            overView,
            price,
            houseCardPoint,
            size,
            oderButtom,
            fovoliteModal,
            modalOpen,
            cloesButtom,
            foverite,
            selectedProduct
        }
    }
}
</script>

<style scoped>

.product__img {
    width: 500px;
    height: 600px;
    margin: 20px;
}

.product {
    margin-left: auto;
    margin-right: auto;
    width: 1024px;
    display: flex;
    justify-content: space-between;
}

.product-detail {
    width: 400px;
}


.product-detail__name {
    margin-top: 30px;
    font-size: 2rem;
}

.product-actions__favorite-button-container{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 60px;
    margin-top: 20px;

}

.product-actions__order-button {
    height: 50px;
}

.product__menu {
    display: flex;
    justify-content: space-between;
}

.product-action {
    margin-top: 20px;


}


.product-price__value {
    margin-top: 25px;
    margin-bottom: 25px;
}

.text_s {
    font-size: 0.8rem;
    margin-top: 10px;
}

.text_m {
    font-size: 1.2rem;
}
</style>