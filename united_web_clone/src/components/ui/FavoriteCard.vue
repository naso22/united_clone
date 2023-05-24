<template>
    <li>
        <router-link :to="productDetailLink" class="flex">
            <div>
                <img :src="img" alt="">
            </div>
            <div>
                <p>{{ maker }}</p>
                <p>{{ kinds }}</p>
                <p>{{ price }}</p>
                <oder-buttom class="oder-btn">予約する</oder-buttom>
            </div>
        </router-link>
            <div>
                <button @click="deleteFavorite">削除</button>
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
    margin: 10px;
}

.flex {
    display: flex;
    justify-content: space-between;
}

.oder-btn {
    height: 35px;
    width: 100%;
}
</style>
