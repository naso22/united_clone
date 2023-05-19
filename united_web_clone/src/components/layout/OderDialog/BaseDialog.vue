<template>
    <div class="backdrop" @click="closeButton"></div>
    <div class="modal">
        <h2 class="modal__titile">ショッピングバッグに追加</h2>
        <div class="modal__inner">
            <div class="order-block">
                <div class="order-block__box">
                    <img class="order-block__img" :src=productImg alt="">
                    <p class="product-coler"></p>
                </div>
                <div class="order-block__resousu">
                    <div class="product">
                        <p class="product__size">S</p>
                        <p class="product__stock">在庫なし</p>
                    </div>
                    <div class="order-btn">
                        <oder-buttom v-if="fovorite === '商品を注文する'">{{ fovorite }}</oder-buttom>
                        <SarchButton v-else class="order-btn__fovorite" @click="toggleFavorite">
                            <p  :class="{ redHeart: isFovorite }">❤</p>
                            <p>{{ fovorite }}</p>
                        </SarchButton>
                    </div>
                </div>
            </div>
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
import products from "@/store/modeuls/products"
import { ref} from "vue";

export default {
    computed: {
        products() {
            return products
        }
    },
    components: {
        OderButtom,
        SarchButton,
    },
    props: ['productImg', 'fovorite'],
    setup(props, context) {
        function closeButton() {
            context.emit('close')
        }

        let isFovorite = ref(false)
        function toggleFavorite() {
            isFovorite.value =!isFovorite.value
            console.log(isFovorite.value)
        }

        return {
            closeButton,
            toggleFavorite,
            isFovorite
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
    top: 5vh;
    left: 35%;
    width: 30%;
    height: 85%;
    z-index: 100;
    border-radius: 12px;
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0;
    margin: 0;
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
    height: 65%;
}

.order-block {
    display: flex;
    justify-content: space-around;
    margin: 20px;
}

.order-block__box {
    width: 200px;
}

.order-block__img {
    width: 70%;
}

.order-block__resousu {
    display: flex;
    justify-content: space-between;
    width: 70%;
}

.modal__btn {
    margin: 20px;
}

.product {
    width: 100px;
}

.product-coler,
.product__size,
.product__stock {
    font-size: 0.8rem;
}

.order-btn__fovorite {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 190px;
}

.order-btn__mark {
    width: 90%;
}

.redHeart{
    color: crimson;
}

</style>