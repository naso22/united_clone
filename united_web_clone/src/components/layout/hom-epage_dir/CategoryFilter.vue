<template>
  <ul>
      <li>
          WOMEN
      </li>

      <li>
         MEN
      </li>

      <li>
          <router-link to="/all">ALL</router-link>
      </li>
      <li>
          <a href="">商品カテゴリー</a>
      </li>
      <li>
          <a href="">ストアブランド</a>
      </li>
      <li>
          <a href="">取扱ブランド</a>
      </li>
      <li>
          <a href="">店舗検索</a>
      </li>
  </ul>
</template>

<script>

</script>

<style scoped>
ul{
    display: flex;
    justify-content: center;
    background-color: #F6F5F4;
    height:2.5rem;
    align-items: center;
}

li{
    margin-right: 50px;
    list-style: none;
    font-size: 0.75rem;
    text-align: center;
    letter-spacing: 0.1em;
}

a{
    color: #858181;
    text-decoration: inherit;
}
</style>