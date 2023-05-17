<template>
    <div>
        <sarch-button>すべての商品から探す</sarch-button>
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
div{
    display: flex;
    justify-content: center;
    margin: 15px;
}
</style>