<template>
  <!--========== MENU ==========-->
  <section class="menu section bd-container" id="home">

    <loading-comp v-if="loading==true" class="bd-grid section-subtitle"/>

    <div v-if="loading==false">
      <span class="section-subtitle">Shopping Cart</span>
      <h2 class="section-title">here is your Cart, {{user.displayName}}</h2>
      <div class="menu__container bd-grid">
          <div class="menu__content"
          v-for="pizza in menu"
          :key="pizza.name">
              <img :src="pizza.imageAdress" alt="" class="menu__img">
              <h3 class="menu__name">{{pizza.name}}</h3>
              <!-- <span class="menu__detail">Delicious</span> -->
              <span class="menu__preci">${{pizza.price}}</span>
              <a 
              @click="decrease(pizza)" 
              class="button minus-button">
                  <i class='bx bx-minus'></i>
              </a>
              <div 
              class="number">
                  <p>{{counts[pizza.name]}}</p>
              </div>
              <a 
              @click="increase(pizza)" 
              class="button plus-button">
                  <i class='bx bx-plus'></i>
              </a>
          </div>
      </div>
      <div v-if="Object.keys(menu).length>0"
      style="position: relative; margin-top: 40px" 
      class="bd-grid bd-container">
          <div style="text-align: center;color: white">
           <h3>{{sumOfAllOrder}} Pizza's</h3>
           <br>
           <h2>Sum: ${{price}}</h2> 
          </div>
          <button
          @click="order()" 
          class="button"><h3>ORDER</h3>
          </button>
          
          <button 
          @click="emptyCard()"
          class="button"><h3>EMPTY CART</h3>
          </button>
        </div>

        <div v-if="!Object.keys(menu).length>0"
      style="position: relative; margin-top: 40px;" 
      class="bd-grid bd-container">
          <div style="text-align: center;color: white;">
           <h2>Cart Is Empty</h2> 
          </div>
          <button
          @click="this.$router.push('/menu')" 
          class="button"><h3>Go to Menu</h3>
          </button>
        </div>
    </div>
    <!-- The Modal -->
        <div id="myModal" class="modal">

          <!-- Modal content -->
          <div class="modal-content">
            <span class="close">&times;</span>
            <h3>{{message}}</h3>
          </div>

      </div>
  </section>
</template>

<script src="./scripts/CartCompScript.js">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
