<template>
    <div  class="backdrop" @click="closeButton">
  <div class="modal">
      <div class="modal__section">
          <h2 class="modal__section-titile">ショッピングバッグに追加</h2>
      </div>
      <div class="order">
          <div class="order__product">
              <div class="product-section">
                  <img src="" alt="">
                  <p class="product-coler">WHITE</p>
              </div>
              <div class="oder__list">
                  <div class="product__situation">
                      <p class="product__size">S</p>
                      <p class="product__stock">在庫なし</p>
                  </div>
                  <div class="order__btn">
                      <oder-buttom>注文する</oder-buttom>
                  </div>
              </div>
          </div>
      </div>

      <div class="modal__btn">
          <oder-buttom>注文手続きへ進む</oder-buttom>
          <oder-buttom @click="closeButton()">閉じる</oder-buttom>
      </div>
  </div>
    </div>>
</template>

<script>
import OderButtom from "@/components/ui/OderButtom.vue";

export default {
    components: {
        OderButtom
    },
    setup(props,context) {
        function closeButton() {
            context.emit('close')
        }
        return{
            closeButton
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
.modal{
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

.order{
    margin: 40px;
    height: 65%;
}


.order__product{
    display: flex;
    justify-content: space-around;
    margin: 20px;
}

.product-section{
width: 200px;
}

.oder__list{
    display: flex;
    justify-content: space-between;
    width: 60vh;
    align-items: center;

}

.modal__section{
    padding: 10px;
    border-bottom: #858181 solid 1px;
}

.modal__section-titile{
    text-align: center;
    font-size: 1rem;
    font-weight: normal;
}

.modal__btn{
margin: 20px;
}

.order__btn{
    width: 250px;
}

.product__situation{
    width: 100px;
}

.product-coler,
.product__size,
.product__stock{
    font-size: 0.8rem;
}

</style>