<template>
<div class="calculation">
    <div>
        <div class="calculation-amount-of-money">
            <div class="calculation-amount-of-money__text">商品合計</div>
            <div class="calculation-amount-of-money__text">¥{{totalPrice}}</div>
        </div>
        <div class="calculation-amount-of-money">
            <div  class="calculation-amount-of-money__text">獲得予定ポイント</div>
            <div class="calculation-amount-of-money__text">{{totalPoints}}pt</div>
        </div>
    </div>
</div>
</template>
<script>
import {watch, ref} from "vue";

export default {
    props:['cartMoney'],
    setup(props){
        watch(() => props.cartMoney,
            (newCartMoney) => {
                if (newCartMoney) {
                    resetProductMoney();
                    getProductMoney()
                }
            }
        );
        function resetProductMoney() {
            totalPoints.value = 0;
            totalPrice.value = 0;
        }

        let totalPoints = ref(0);
        let totalPrice = ref(0);
        function getProductMoney() {
            props.cartMoney.forEach(item => {
                const { points, price } = item;
                if (typeof price === 'string') {
                    const formattedPrice = price.replace(/,/g, '');
                    const numericPrice = parseFloat(formattedPrice);
                    totalPoints.value += points;
                    totalPrice.value += numericPrice;
                } else {
                    totalPoints.value += points;
                    totalPrice.value += price;
                }
            });

            console.log("合計ポイント:", totalPoints.value);
            console.log("合計金額:", totalPrice.value);
        }
        return{
            totalPoints,
            totalPrice}
    }
}
</script>

<style scoped>
.calculation-amount-of-money{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom:1px #444343 solid;
}

.calculation-amount-of-money__text {
    font-size: 1.1rem;
}
.calculation-amount-of-point{
    display: flex;
    justify-content: space-between;
}
</style>