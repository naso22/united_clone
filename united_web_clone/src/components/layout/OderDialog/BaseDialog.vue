<template>
    <div class="backdrop" @click="closeButton"></div>
    <div class="modal">
        <h2 class="modal__titile">ショッピングバッグに追加</h2>
        <div class="modal__inner">
            <oder-card>
                <template v-slot:product-image>
                    <img class="order-block__img" :src=productImg alt="">
                </template>
                <template v-slot:product-info>
                    <p class="product__size">S</p>
                    <p class="product__stock">在庫なし</p>
                </template>
                <template v-slot:order-button>
                    <oder-buttom v-if="fovorite === '商品を注文する'" class="order-btn__fovorite">
                        {{fovorite}}
                    </oder-buttom>
                    <SarchButton v-else class="order-btn__fovorite" @click="toggleFavorite">
                        <p :class="{ redHeart: isFavorite }">❤</p>
                        <p>{{ fovorite }}</p>
                    </SarchButton>
                </template>
            </oder-card>
        </div>
        <div class="modal__btn">
            <oder-buttom>注文手続きへ進む</oder-buttom>
            <oder-buttom @click="closeButton">閉じる</oder-buttom>
        </div>
    </div>
</template>

<script>
import OderButtom from "@/components/ui/OderButtom.vue";
import SarchButton from '@/components/ui/SarchButton.vue'
import OderCard from '@/components/ui/OderCard.vue'
import products from "@/store/modeuls/products"
import {useStore} from 'vuex';
import { onMounted,computed} from "vue";

export default {
    computed: {
        products() {
            return products
        }
    },
    components: {
        OderButtom,
        SarchButton,
        OderCard
    },
    props: ['productImg', 'fovorite', 'selectedProduct','favoriteProducts'],
    setup(props, context) {
        const store = useStore()
        onMounted(() => {
            // loadFavorite()
        })

        // function loadFavorite() {
        //     store.dispatch('favorites/loadFavorite');
        // }

        // const favoriteProducts = computed(() => {
        //     return store.getters['favorites/favorites'];
        // });

        // const favoriteProductsId = favoriteProducts.value.map(product => product.name);

        const isFavorite = computed(() => {
             return props.selectedProduct.id === props.favoriteProducts?.id
        })

        function closeButton() {
            context.emit('close')
        }

        function toggleFavorite() {
            store.dispatch('favorites/addFavorite', props.selectedProduct)
        }

        // const isFavorite = computed(()=>{
        //     store.getters('favorites/favorites')
        // })

        return {
            closeButton,
            toggleFavorite,
            isFavorite
        }
    }
}
</script>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.36);
    z-index: 10;
}

.modal {
    position: fixed;
    top: 3vh;
    left: 35%;
    width: 30%;
    z-index: 100;
    border-radius: 12px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0;
    overflow: hidden;
    background-color: white;
    justify-content: space-between;
}

.modal__titile {
    text-align: center;
    font-size: 1rem;
    margin-top: 30px;
    font-weight: normal;
    padding-bottom: 30px;
    border-bottom: #858181 solid 1px;
}

.modal__inner {
    margin: 40px;
    height: 65vh;
}

.order-block__img {
    width: 100%;
}

.product__size,
.product__stock {
    font-size: 0.8rem;
}

.order-btn__fovorite {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
}

.redHeart {
    color: crimson;
}

.modal__btn {
    margin: 10px;
}

</style>