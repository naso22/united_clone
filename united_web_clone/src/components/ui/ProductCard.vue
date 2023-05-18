<template>
<li>
    <div>
        <img :src="img" alt="">
    </div>
    <p>{{maker}}</p>
    <p>{{kinds}}</p>
    <p>{{price}}</p>
</li>
</template>

<script>
export default {
    props:['img','maker','kinds','price'],
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