<template>
  <button>
     <slot></slot>
  </button>
</template>

<style scoped>
button{
    background-color: #818181;
    padding:7px 40px;
    font-size:0.8rem;
    width:100%;
    color: #ffffff;
    cursor : pointer;
    margin-bottom: 10px;
    border:1.5px solid rgba(192, 192, 192, 0.88);
}
</style>