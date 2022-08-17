<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>

    <div class = "greetings">
        
        <h1>News API Test</h1>
        
        <h3>Get the news with 
            <a target = "_blank" href="https://newsapi.org/">NewsAPI</a>. Have a wonderful time!
        </h3>
    </div>

          <div class="navbar">
            
              <a><RouterLink to="/">Home Page</RouterLink></a>
              <a><RouterLink to="/business">Business News</RouterLink></a>
              <a><RouterLink to="/entertainment">Entertainment News</RouterLink></a>
              <a><RouterLink to="/general">General News</RouterLink></a>
              <a><RouterLink to="/health">Health News</RouterLink></a>
              <a><RouterLink to="/science">Science News</RouterLink></a>
              <a><RouterLink to="/sports">Sports News</RouterLink></a>
              <a><RouterLink to="/technology">Technology News</RouterLink></a>
            
          </div>
    
<RouterView/>


</template>

<style lang="scss" scoped>

 * {
  box-sizing: border-box;
}
  
  .greetings{
    position: sticky;
    position: -webkit-sticky;
    background-color: #C22129;
    text-align: center;
    
  
    h1 {
      font-weight: 500;
      font-size: 2.6rem;
      top: -10px;
      color: #F4F4F4;
    

    }
    h3 {
      top: -10px;
      font-size: 1.2rem;
      color: #F4F4F4;

      a{
        color: #F4F4F4;
        text-decoration: underline;
        
      }
      a:hover{
        color:#0C0C0C ;
        background-color: transparent;
      }
    }
  }
   
  .navbar {
    overflow: hidden;
    background-color: #0C0C0C;
    position: relative;
    //position: sticky;
    //position: -webkit-sticky;
    top: 0;
  }


  .navbar a {
    float: left;
    display: block;
    color: #F4F4F4;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
  }

.navbar a:hover {
  background-color: #F4F4F4;
  color: #0C0C0C;
  text-decoration: underline;
}

.navbar a:active{
  background-color: #C22129;
}
    
@media screen and (max-width: 400px) {
  .navbar a {
    float: none;
    width: 100%;
  }
}
    

   
</style>