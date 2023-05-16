<template>
  <header>
      <div class="header__content">
          <div class="content">
              <div>
                  <a href="">
                      <img class="header__img" src="https://store.united-arrows.co.jp/res/img/header/hamburger.svg" alt="">
                  </a>
              </div>
              <div>
                  <a href="">
                      <img  src="https://store.united-arrows.co.jp/res/img/header/brands.svg" alt="">
                  </a>
              </div>
          </div>
          <div>
              <h1>
                  <a href="">
                      <img src="https://store.united-arrows.co.jp/res/img/common/logo/brlogo-side-LTD000.svg" alt="">
                  </a>
              </h1>
          </div>
          <div class="content">
              <div>
                  <a href="">
                      <img class="header__img" src="https://store.united-arrows.co.jp/res/img/common/ico-favourite.svg" alt="">
                  </a>
              </div>
              <div>
                  <a href="">
                      <img src="https://img.icons8.com/?size=1x&id=15893&format=png" alt="">
                  </a>
              </div>
          </div>
      </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
header{
    display: flex;
    justify-content:center;
}

.header__content{
    display: flex;
    align-items: center;
    width: 1024px;
    justify-content: space-between;
}

.content{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header__img{
    margin-right: 25px;
}

h1{
    margin: 0;
}
</style>