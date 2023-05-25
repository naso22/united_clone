<template>
    <li class="flex">
        <router-link :to="productDetailLink">
            <div class="cart-name">{{ name }}</div>
            <div>
                <img :src="img" alt="">
            </div>
        </router-link>
        <div class="detail">
            <p>{{ maker }}</p>
            <p>{{ kinds }}</p>
            <p>{{ price }}</p>
            <button @click="deleteFavorite">削除</button>
        </div>
    </li>
</template>
<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
    props: ['id', 'img', 'maker', 'kinds', 'price','name'],

    setup(props, context) {
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
    margin-bottom:20px ;
}

p {
    font-size: 0.75rem;
    margin: 10px;
}

li {
    width: 100%;
    margin-top:20px;
    border-bottom:solid 2px #818181;
}

.flex {
    display: flex;
}

.detail{
    margin: 10px;
}

button {
    margin: 10px;
}

.cart-name{

}
</style>
