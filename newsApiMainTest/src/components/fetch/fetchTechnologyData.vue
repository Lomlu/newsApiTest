<script>
    export default {
      data() {
        return {
      
          technologyNewsLink: 'https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=f1ddbf5d22b44e78bf658637e0713371',
          isBusy: false,
          showloader: false,
          currentPage: 1,
          totalResults: 0,
          maxPerPage: 20,
          articles: []
        }
      },
      
      computed:{
        pageCount(){
          return Math.ceil(this.totalResults/this.maxPerPage);
        }
      },

      methods: {
        resetData(){
          this.articles = [];
        },
   

    
        fetchTopNews(){

          this.isBusy = true;
          this.resetData();
          this.fetchData();
        },

        fetchData(){

          let req = new Request(this.technologyNewsLink);
  
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

        scrollTrigger(){
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if(entry.intersectionRatio > 0 && this.currentPage < this.pageCount){
                this.showloader=true;
                this.currentPage +=1;
                this.fetchData();
              }
            });
          });
          observer.observe(this.$refs.infinitescrolltrigger);
        }

      },
      
      created(){
        this.fetchTopNews();  
      },

      mounted() {
        this.scrollTrigger();
      }

    }
</script>

<template>
    <div class="mainHeadline">
        <h1>Top Technology Headlines From Turkey</h1>
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
        <p class="headlineText">Headline:</p>
        <a class="articleTitle"  :href="article.url" target="_blank"  >
          <section class="headlineApi" v-html="article.title" ></section>
        </a>
        <p class="headlineText">Description:</p>
            <section class="readLess" v-html="article.description"></section>
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
        top: 64px;
        justify-content: flex-end;
        padding-top: 0px;
        display: -ms-flexbox; /* IE10 */
        display: flex;
        -ms-flex-wrap: wrap; /* IE10 */
        flex-wrap: wrap;
        border-left: 2px solid #D56067;
        border-top: 2px solid #D56067;
        border-right: 2px solid #D56067;
        border-bottom: 2px solid #D56067;
      article{
        
        top: -128px;
        display:contents;
        //grid-template-columns: 600px auto 800px;
        //grid-template-rows: 300px;
        //border-left: 2px solid #D56067;
        //border-top: 2px solid #D56067;
        //border-right: 2px solid #D56067;
        
        overflow: hidden;
        justify-content: flex-end;
      }
      .headerPic{
        display:flex;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
      
        img{
          max-width: 70%;
          height: auto;
        }
        
        i{
          font-size: 2rem;
        }
      
      }

      .side {
      -ms-flex: 50%; /* IE10 */
      flex: 50%;
      }

/* Main column */
    .main {   
      -ms-flex: 50%; /* IE10 */
      flex: 50%;
      display: inline;
      flex-wrap: wrap;
  
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
        float: left;
        flex: auto;
        left: -25%;
        
        
      }

      .readLess{
       display:inline-flex;
       top: -32px;
      }
    
      section{
        margin: 0;
        padding: 4px 32px;
        height: 50px;
        display:flex;
        flex-wrap: wrap;
        flex: auto;
        justify-content: flex-end;
        
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