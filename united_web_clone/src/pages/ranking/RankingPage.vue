<template>
  <div>
      <div>
          <h2>ランキング</h2>
          <div>
              <sarch-button>絞り込み条件を指定</sarch-button>
              <sarch-button>売り上げ金額</sarch-button>
          </div>
              <ul>
                  <product-card></product-card>
              </ul>
      </div>
  </div>
</template>
<script>
import ProductCard from "@/components/ui/ProductCard.vue";
import SarchButton from "@/components/ui/SarchButton.vue"
export default({
    components: {
        SarchButton,
        ProductCard
    }
})
</script>