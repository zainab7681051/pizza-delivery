<template>
    <head-comp/>
	  <router-view/>
    <foot-comp/>
  
</template>

<script>
import HeadComp from './components/HeadComp.vue'
import FootComp from './components/Foot.vue'
export default {
  name: 'App',
  components: {
  	HeadComp,
  	FootComp,
  }
}
</script>
<style>
</style>
