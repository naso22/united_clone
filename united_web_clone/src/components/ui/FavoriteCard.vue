<template>
    <li class="flex">
        <router-link :to="productDetailLink">
            <div>
                <img :src="img" alt="">
            </div>
        </router-link>
            <div>
                <p>{{ maker }}</p>
                <p>{{ kinds }}</p>
                <p>{{ price }}</p>
                <oder-buttom class="oder-btn">購入する</oder-buttom>
                <div class="delete-btn">
                    <button @click="deleteFavorite">削除</button>
                </div>
            </div>
    </li>
</template>

<script>
import {computed} from "vue";
import OderButtom from "@/components/ui/OderButtom.vue";
import {useStore} from "vuex";

export default {
    components: {OderButtom},
    props: ['id', 'img', 'maker', 'kinds', 'price'],

    setup(props,context) {
        const productDetailLink = computed(() => {
            return '/product' + '/' + props.id
        });
        const store = useStore()
        async function deleteFavorite() {
         await store.dispatch('favorites/deleteFavorite', props.id);
         context.emit('load-favorite')
        }

        return {
            productDetailLink,
            deleteFavorite
        }
    }
}

</script>

<style scoped>
img {
    width: 150px;
}

p {
    font-size: 0.75rem;
    margin: 10px;
}

li {
    width: 300px;
    margin: 20px 10px;
}

.flex {
    display: flex;
    justify-content: space-between;
    margin: 15px;
}

.oder-btn {
    height: 35px;
    width: 90%;
    float: right;
    margin-top: 10px;
}

.delete-btn{
    float: right;
    margin-top:5px ;

}
</style>
