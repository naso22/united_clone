<template>
    <li>
        <router-link :to="productDetailLink" class="flex">
            <div>
                <img :src="img" alt="">
            </div>
            <div>
                <p>{{maker}}</p>
                <p>{{kinds}}</p>
                <p>{{price}}</p>
                <oder-buttom class="oder-btn">予約する</oder-buttom>
                <div>
                    <button>削除</button>
                </div>
            </div>
        </router-link>
    </li>
</template>

<script>
import {computed} from "vue";
import OderButtom from "@/components/ui/OderButtom.vue";

export default {
    components: {OderButtom},
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
    width: 150px;
}
p{
    font-size: 0.75rem;
    margin: 10px;
}
li{
    width: 300px;
    margin: 10px;
}
.flex{
    display: flex;
    justify-content: space-between;
}
.oder-btn{
    height: 35px;
    width: 100%;
}
</style>
