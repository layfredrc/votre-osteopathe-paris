<template>
  <div>
    <Navbar/>
    <Navigation/>
    <Hero/>
    <Featured/>
    <Skills/>
    <Partenaires/>
    <LazyDrainage/>
    <LazySport/>
    
    <LazyGallery/>
    <LazyGoogleReviews/>
    <LazyInstagramFeed/>

    <Footer/>
  </div>
</template>

<script>

export default {
  components:{
    Navbar: () => import('../components/Navbar'),
    Hero: () => import('../components/Hero'),
    Featured: () => import('../components/Featured'),
    Skills: () => import('../components/Skills'),
    Partenaires: () => import('../components/Partenaires'),
    Navigation: () => import('../components/Navigation'),
    Drainage: () => import('../components/Drainage'),
   
    Sport: () => import('../components/Sport'),
    Footer: () => import('../components/Footer'),
    Gallery: () => import('../components/Gallery'),
    GoogleReviews: () => import('../components/GoogleReviews'),
    InstagramFeed: () => import('../components/InstagramFeed'),
   
  },
  head(){
    return{
      script:[
        {hid:'elfsight', src:'https://apps.elfsight.com/p/platform.js',defer:true}
      ]
    }
  },
  mounted(){
    
    var logo = document.querySelector('.logo');
    console.log(logo);
    
    var isInViewport = function (elem) {
      var bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    var navigation = document.querySelector('.navigation');
   
    window.addEventListener('scroll',function(e){
      if(isInViewport(logo)){
        navigation.style.opacity = 0;
      } else{
        navigation.style.opacity = 1;
      }
      if(window.innerHeight <= 448 || document.documentElement.clientWidth <= 448){
        navigation.style.opacity = 1;
      }
    },false)
    



   

    

  }
}

</script>

<style lang="scss">
  
  .instagram{
    width: 80vw;
     padding-left: 60px;
  }

  .section-avis{
    width: 80vw;
     padding-left: 60px;

  }

  @media only screen and (max-width: 28em){
    .section-avis{
      width: 70vw;
      padding-left: 60px;
    }

    .instagram{
      width: 70vw;
      padding-left: 60px;
    }
  }

  @media only screen and (min-width: 43em){
    .instagram{
      margin-left: 80px;
      width: 80vw;
      padding-left:0px;

    }

    .section-avis{
      width: 80vw;
      margin-left: 80px;
      padding-left:0px;
    }
  }

  @media only screen and (min-width: 62em){
    .instagram{
      margin-left: 100px;
      width: 80vw;
      padding-left:0px;

    }

    .section-avis{
      width: 80vw;
      margin-left: 100px;
      padding-left:0px;
    }
  }

  @media only screen and (min-width: 82em){
    .instagram{
      width: 80vw;
      margin-left: 160px;
      padding-left:0px;
    }

    .section-avis{
      width: 80vw;
      margin-left: 160px;
      padding-left:0px;
    }
  }
</style>
