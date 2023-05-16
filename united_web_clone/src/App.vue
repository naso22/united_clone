<template>
<the-header></the-header>
<router-view></router-view>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader.vue";
export default {
components:{
    TheHeader
}
}
</script>

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: "Roboto", sans-serif;
}

body {
    margin: 0;
}

li{
    list-style: none;
    padding: 0;
}

ul{
    padding: 0;
}

a{
    color: #444343;
    text-decoration: inherit;
}

</style>

