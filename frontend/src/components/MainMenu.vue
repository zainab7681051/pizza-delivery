<template>
  <!--========== MENU ==========-->
  <section class="menu section bd-container" id="home">
    <span class="section-subtitle">Special</span>
    <h2 class="section-title">Menu of the week</h2>

    <div class="menu__container bd-grid">
        <div class="menu__content"
        v-for="pizza in menu"
        :key="pizza.name">
            <img :src="pizza.imageAdress" alt="" class="menu__img">
            <h3 class="menu__name">{{pizza.name}}</h3>
            <!-- <span class="menu__detail">Delicious</span> -->
            <span class="menu__preci">${{pizza.price}}</span>
            <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
        </div>
    </div>
  </section>
</template>

<script src="./scripts/MainMenuScript.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
