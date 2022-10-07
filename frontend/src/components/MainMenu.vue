<template>
  <!--========== MENU ==========-->
  <section class="menu section bd-container" id="home">

    <loading-comp v-if="loading==true" class="bd-grid section-subtitle"/>

    <div v-if="loading==false">
        <span class="section-subtitle">The Menu</span>
        <h2 class="section-title">Pizza Menu</h2>
        <div class="menu__container bd-grid">
            <div class="menu__content"
            v-for="pizza in menu"
            :key="pizza.name">
                <img :src="pizza.imageAdress" alt="" class="menu__img">
                <h3 class="menu__name">{{pizza.name}}</h3>
                <!-- <span class="menu__detail">Delicious</span> -->
                <span class="menu__preci">${{pizza.price}}</span>
                <a 
                @click="!isUserLoggedIn ? login():addToCart(pizza)" 
                class="button menu__button">
                    <i class='bx bx-cart-alt'></i>
                </a>
            </div>
        </div>
    </div>
  </section>
</template>

<script src="./scripts/MainMenuScript.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
