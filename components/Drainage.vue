<template>
  <section class="drainage">
			<div class="drainage-container ">
              
                <img src="../assets/massage.jpeg" alt="massage drainant" class="massage-img">
                
			
				<div class="drainage-card">
					<div>
						<h1 class="drainage-h1" >Massage Drainant </h1>
						<p class="drainage-p"  >Vous souffrez de rétention d’eau ? Les oedèmes, la mauvaise circulation sanguine ou encore la cellulite sont votre quotidien ? <br> <br>Le drainage lymphatique de la méthode Renata França pourra vous aider. 
						</p>
					</div>
				
				</div>
            
                <img src="../assets/healthy-body.jpeg" alt="massage drainant" class="healthy-body-img">
         
			
				<div class="drainage-card2">
					<div>
						<h3 class="drainage-h1" >Drainage <br>Lymphatique</h3>
						<p class="drainage-p">
							Ce drainage permet de ‘sécher’ et d’affiner le corps avec des résultats visibles dès la première séance. Il faudra alors compléter cette session par une pratique sportive régulière et une alimentation saine (Coucou “Healthy Body Program” !)
						</p>

                        <div>
                            <div class="mx-auto">
                                <a href="../Drainage.pdf"
                                    target="_blank"
                                    class="mt-4 inline-block bg-gradient-to-br from-pale-green to-dark-green hover:from-dark-green hover:to-pale-green font-semibold rounded-lg py-2 px-5 lg:px-6 text-lg text-white">En savoir plus
                                </a>
                            </div>
                        </div>
					</div>
				
				</div>
			</div>

      

		</section>

</template>

<script>
export default {

}
</script>

<style lang="scss">
    .drainage {
        background-color: #d8dfd7;
        height: 240vh;
        padding-left: 70px;
       
        & .drainage-card {
            position: absolute;
            transform: translate(40px, 380px);
            background-color: white;
            width: 400px;
            height: 360px;
            font-family: "Poppins", sans-serif;
            font-size: 28px;
            text-align: left;
            color: #2d4d44;
            padding: 35px;
        }

        & .drainage-card2 {
            position: absolute;
            transform: translate(0px, 1250px);
            background-color: white;
            width: 400px;
            height: 380px;
            font-family: "Poppins", sans-serif;
            font-size: 28px;
            text-align: left;
            color: #2d4d44;
            padding: 45px;
        }      

        & .healthy-body-img {
            transform: translate(80px, 850px);
            width: 400px; 
        }

        & .drainage-container {
            position: relative;
            
            & img{
                height: 450px;
                width: 350px;
                display: block;
                position: absolute;
                left: 0;
                top: 0;
            }

            & .drainage-card {
                position: absolute;
                transform: translate(40px, 380px);
                background-color: white;
                width: 400px;
                height: 360px;
                font-family: "Poppins", sans-serif;
                font-size: 28px;
                text-align: left;
                color: #2d4d44;
                padding: 35px;
            }

            & .drainage-card2 {
                position: absolute;
                transform: translate(0px, 1250px);
                background-color: white;
                width: 400px;
                height: 380px;
                font-family: "Poppins", sans-serif;
                font-size: 28px;
                text-align: left;
                color: #2d4d44;
                padding: 45px;
            }     
            
             & .drainage-h1{
                font-weight: 500;
                font-size: 32px
            }

            & .drainage-p{
                font-size: 14px;
                margin-top:20px;
            }

        }

    }

@media only screen and (max-width: 28em){
    .drainage{
        padding-left: 30px;
        height: 260vh;
        & .healthy-body-img{
            transform: translate(20px,850px);
            width: 300px;
        }

        & .drainage-container{
            & img{
                height: 400px;
                width: 300px;
                display: block;
                position: absolute;
                left: 0;
                top: 0;
            }

            & .drainage-card {
                transform: translate(20px, 360px);
                width: 300px;
                height: 400px;
         
                padding: 30px;
            }

            & .drainage-card2 {
                transform: translate(-15px, 1200px);
                width: 320px;
                height: 420px;
                
                padding: 35px;
            }      

            & .drainage-h1{
                font-weight: 500;
                font-size: 32px
            }

            & .drainage-p{
                font-size: 14px;
                margin-top:20px;
            }
        }

        
    }

}

@media only screen and (min-width:43em) {
    .drainage{
        height: 120vh;

        & .healthy-body-img{
            transform: translate(280px,550px);
            height: 500px;
        }

        & .drainage-container{
            & img{
                height: 450px;
                width: 350px;
                
            }

            & .drainage-card {
                transform: translate(320px,30px);
                width: 300px;
                height: 400px;
                padding: 35px;
            }

            & .drainage-card2 {
                transform: translate(-15px, 565px);
                width: 320px;
                height: 420px;
                padding: 35px;
            }      
        
        }
    }
}

@media only screen and (min-width: 62em){
    .drainage{
        height: 160vh;
        padding-left: 150px;

        & .healthy-body-img{
            transform: translate(350px,600px);
            height: 500px;
        }

        & .drainage-container{
            & img{
                height: 500px;
                width: 400px;
                
            }

            & .drainage-card {
                transform: translate(320px,50px);
                width: 400px;
                height: 400px;
                padding: 35px;
            }

            & .drainage-card2 {
                transform: translate(0px, 655px);
                width: 420px;
                height: 400px;
                padding: 35px;
            }      

          & .drainage-h1{
                font-weight: 500;
                font-size: 38px
            }

            & .drainage-p{
                font-size: 16px;
                margin-top:20px;
            }
        }
    }
  
}
@media only screen and (min-width: 82em){
       .drainage{
        height: 200vh;
        padding-left: 380px;

        & .healthy-body-img{
            transform: translate(380px,700px);
            height: 500px;
        }

        & .drainage-container{
            & img{
                height: 600px;
                width: 500px;
                
            }

            & .drainage-card {
                transform: translate(450px,100px);
                width: 450px;
                height: 300px;
                padding: 35px;
            }

            & .drainage-card2 {
                transform: translate(0px, 800px);
                width: 420px;
                height: 400px;
                padding: 35px;
            }      
        
        }
    }
  
}






</style>