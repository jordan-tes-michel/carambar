<script setup lang="ts">

</script>

<template>
  <header>
    <div class="upper">
      <img class="upper__image" src="../assets/header-image.png" alt="La fabrique de blagues Carambar" />
    </div>
    <img class="vector" src="../assets/header-vector.svg" alt="">
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100dvw;
  height: 25dvh;
  min-height: 150px;
  max-height: 200px;
  .upper {
    width: 100%;
    height: 100%;
    background-color: #FFEE04;
    display: flex;
    justify-content: center;
    &__image {
      height: 100%;
    }
  }
  .vector {
    width: 100%;
    position: relative;
    bottom: 5px;
  }
}
</style>