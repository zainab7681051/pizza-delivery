<template>
  
  <header>
    <header-comp/>
  </header>
  
  <main>
    <router-view/>
  </main>
  
  <footer>
    <footer-comp/>
  </footer>

</template>

<script>
import HeaderComp from './components/Header.vue'
import FooterComp from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>
<style>
</style>
