<script>
    export default {
      data() {
        return {
      
          healthNewsLink: 'https://newsapi.org/v2/top-headlines?country=tr&category=health&apiKey=f1ddbf5d22b44e78bf658637e0713371',
          isBusy: false,
          showloader: false,
          totalResults: 0,
          articles: []
        }
      },
      
      methods: {
        navTo(url){
          window.open(url);

        },


        resetData(){
          this.articles = [];
        },
   

    
        fetchTopNews(){

          this.isBusy = true;
          this.resetData();
          this.fetchData();
        },

        fetchData(){

          let req = new Request(this.healthNewsLink);
  
          fetch(req)
            .then((resp) => resp.json())
            .then((data) => {
              this.totalResults = data.totalResults;
              data.articles.forEach(element => {
                this.articles.push(element);
              });
              this.isBusy = false;
              this.showloader = false;
            })
            .catch((error) => {
              console.log(error);
            })
    
        },

   
      },
      
      created(){
        this.fetchTopNews();  
      }
  
    }
</script>

<template>
    <div class="mainHeadline">
        <h1>Top Health Headlines From Turkey</h1>
      </div>

   <div class = "newsList">
    <article v-for="(article, index) in articles" :key="index" >
        <div class="side">
        <header class="headerPic">
          <img v-if="article.urlToImage" :src="article.urlToImage" alt="">
          <i v-else class="fas fa image"></i>
        </header>
        </div>
        <div class="main">
        <p class="headlineText"><b>Headline:</b> </p>
        <a class="articleTitle"  :href="article.url" target="_blank"  >
          <section class="headlineApi" v-html="article.title" ></section>
        </a>
        <p class="headlineText" >Author:</p>
            <section class="authorApi" v-html="article.author"></section>
        
        <p class="headlineText">Published At: </p>
          <section class="dateApi" v-html = "article.publishedAt"></section>
        </div>     
      </article>
    </div>
    <div ref="infinitescrolltrigger" id="scroll-trigger">
      <i v-if="showloader" class="fas fa-spinner fa-spin"></i>
    </div>
   
</template>


<style lang="scss" scoped>

    @media screen and (max-width: 700px) {
      .newsList {   
        flex-direction: column;
      }
    } 
     .mainHeadline{
      top: 0;
      text-align: center;
      color: #0C0C0C;
  
    }
    .newsList{
        align-content: center;
        top: 128px;
        padding-top: 60px;
        display: -ms-flexbox; /* IE10 */
        display: flex;
        -ms-flex-wrap: wrap; /* IE10 */
        flex-wrap: wrap;
      
      article{
        top: -128px;
        display: grid;
        grid-template-columns: 600px auto 800px;
        grid-template-rows: 300px;
        border-left: 2px solid #D56067;
        border-top: 1px solid #D56067;
        border-right: 2px solid #D56067;
        overflow: hidden;
        
      }
      .headerPic{
        display:flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      
        img{
          max-width: 100%;
          height: auto;
        }
        
        i{
          font-size: 2rem;
        }
      
      }

      .main {
      -ms-flex: 30%; /* IE10 */
      flex: 30%;
      }

/* Main column */
    .side {   
      -ms-flex: 70%; /* IE10 */
      flex: 70%;
  
    }


      .headlineText{
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        font-style: italic;
        color: #C22129;
        font-size: 1.2rem;
        display: flex;
        flex-wrap: wrap;
      }
    
      section{
        margin: 0;
        padding: 8px 16px;
        height: 50px;
        display: flex;
        flex-wrap: wrap;
      }

    

      #scroll-trigger{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100px;
        font-size: 1.6rem;
      }

      .articleTitle:link {
        color: #0C0C0C;
        background-color: transparent;
        text-decoration: none;
      
      }

      .articleTitle:hover{
        color: #F10706;
        text-decoration: underline;
        cursor: pointer;
      }

      .articleTitle:visited {
        color: #D56067;
        background-color: transparent;
        text-decoration: none;
        font-style: italic;
      }
 }

</style>