<template>
    <div>
        <sarch-button class="search-button">すべての商品から探す</sarch-button>
    </div>
</template>

<script>
import SarchButton from "@/components/ui/SarchButton.vue";
export default {
    components:{
        SarchButton
    }
}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    margin-right: 0;
    margin-left: 0;
}

.search-button {
    width: 500px;
    text-align: center;
}
</style>