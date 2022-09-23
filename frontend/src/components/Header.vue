<template>
  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
    <div class="container">
        <a class="navbar-brand" href="/index"><span class="flaticon-pizza-1 mr-1"></span>Pizza<br><small>Delicous</small></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span class="oi oi-menu"></span> Menu
        </button>
      <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active"><a href="/index" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="/menu" class="nav-link">Menu</a></li>
          <li class="nav-item"><a href="/services" class="nav-link">Services</a></li>
          <li class="nav-item"><a href="/blog" class="nav-link">Blog</a></li>
          <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
          <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'header',
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
