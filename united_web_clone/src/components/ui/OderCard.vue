<template>
    <div class="order-block">
        <div class="order-block__box">
            <slot name="product-image"></slot>
        </div>
        <div class="order-block__resource">
            <div class="product">
                <slot name="product-info"></slot>
            </div>
            <div class="order-btn">
                <slot name="order-button"></slot>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.order-block {
    display: flex;
}

.order-block__box {
    width: 100%;
}

.product {
    width: 100px;
}

.order-block__resource{
    display: flex;
}

.order-btn{
}
</style>