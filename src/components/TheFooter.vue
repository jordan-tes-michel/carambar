<script setup lang="ts">

</script>

<template>
<footer>
  <div class="footerText">
    <p class="footerText__left">La fabrique de blagues Carambar est un projet réalisé dans le cadre de ma candidature à une formation, merci de votre visite !</p>
    <p class="footerText__right">Jordan Michel - copyright 2024</p>
  </div>
</footer>
</template>

<style scoped lang="scss">
footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5dvh;
  background-color: #FFEE04;

  .footerText {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 0.9rem;
    padding: 0 20px;

    &__right {
      color: rgba(0, 0, 0, 0.45);
      padding-left: 20px;
    }
  }
}

@media screen and (max-width: 610px) {
  footer {
    .footerText {
      font-size: 0.5rem;
    }
  }
}
</style>