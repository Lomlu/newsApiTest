<script setup>

import Welcome from './components/welcome.vue'
import { RouterView } from 'vue-router';

</script>

<template>

  <div class="container">
  
      <div class = "header">
        
          <Welcome/>
       
        
      </div>


   

</div>

</template>


<style lang="scss" scoped>

 
  .container{

  .header{
    top: -38px;
  }

  
 }


</style>

