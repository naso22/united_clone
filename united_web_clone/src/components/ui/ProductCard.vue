<template>
<li>
    <router-link :to="productDetailLink">
    <div>
        <img :src="img" alt="">
    </div>
    <p>{{maker}}</p>
    <p>{{kinds}}</p>
    <p>{{price}}</p>
    </router-link>
</li>
</template>

<script>
import {computed} from "vue";

export default {
    props:['id','img','maker','kinds','price'],

    setup(props){
        const productDetailLink = computed(() => {
            return '/product'+'/'+props.id
        });
        return{productDetailLink}
    }
}

</script>

<style scoped>
img{
   width: 100%;
}
p{
    font-size: 0.75rem;
    margin: 10px;
}
li{
    width: 100%;
}
</style>

<script setup>
</script>