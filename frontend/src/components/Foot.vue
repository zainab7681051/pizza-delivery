<template>
    
  <footer class="footer section bd-container">
  <div class="footer__container bd-grid">
    <div class="footer__content">
      <a href="#" class="footer__logo">Tasty Food</a>
      <span class="footer__description">Restaurant</span>
      <div>
        <a href="#" class="footer__social"><i class='bx bxl-facebook'></i></a>
        <a href="#" class="footer__social"><i class='bx bxl-instagram'></i></a>
        <a href="#" class="footer__social"><i class='bx bxl-twitter'></i></a>
      </div>
    </div>
    <div class="footer__content">
      <h3 class="footer__title">Services</h3>
      <ul>
        <li><a href="#" class="footer__link">Delivery</a></li>
        <li><a href="#" class="footer__link">Pricing</a></li>
        <li><a href="#" class="footer__link">Fast food</a></li>
        <li><a href="#" class="footer__link">Reserve your spot</a></li>
      </ul>
    </div>
    <div class="footer__content">
      <h3 class="footer__title">Information</h3>
      <ul>
        <li><a href="#" class="footer__link">Event</a></li>
        <li><a href="#" class="footer__link">Contact us</a></li>
        <li><a href="#" class="footer__link">Privacy policy</a></li>
        <li><a href="#" class="footer__link">Terms of services</a></li>
      </ul>
    </div>
    <div class="footer__content">
      <h3 class="footer__title">Adress</h3>
      <ul>
        <li>Lima - Peru</li>
        <li>Jr Union #999</li>
        <li>999 - 888 - 777</li>
        <li>tastyfood@email.com</li>
      </ul>
    </div>
  </div>
  <p class="footer__copy">&#169; {{date}}. All right reserved</p>
</footer>
</template>

<script>
export default {
  name: 'foot',
  data:()=>({
    date:new Date().getFullYear(),
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
