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
     

        & .healthy-body-img {
            position: absolute;
            left: 35%;
            top: 750px;
            width: 400px; 
        }

        & .drainage-container {
            position: relative;
            
            & img{
                height: 450px;
                width: 350px;
             
                
            }

            & .massage-img{
                position: absolute;
                left: 10%;
            }

            & .drainage-card {
                position: absolute;
                left: 25%;
                top: 350px;
                background-color: white;
                width: 400px;
                height: 300px;
                font-family: "Poppins", sans-serif;
                font-size: 28px;
                text-align: left;
                color: #2d4d44;
                padding: 35px;
            }

            & .drainage-card2 {
                position: absolute;
                left: 10%;
                top: 1150px;
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
        
        height: 250vh;
        & .healthy-body-img{
            position: absolute;
            top: 800px;
            left: 12.5%;
            width: 280px;
        }

        & .drainage-container{
            & img{
                height: 400px;
                width: 280px;
                
                
            }

            & .massage-img{
                position: absolute;
                left: 5%;
            }

            & .drainage-card {
                position: absolute;
                left: 8%;
                width: 300px;
                height: 340px;
                padding: 30px;
            }

            & .drainage-card2 {
                position: absolute;
                left: 2.5%;
                margin-top: 20px;
                width: 300px;
                height: 400px;
                
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
        height: 180vh;

        & .healthy-body-img{
            position: absolute;
            left: 45%;
            top: 500px;
            height: 500px;
        }

        & .drainage-container{
            & img{
                height: 450px;
                width: 350px;
                
            }

            & .massage-img{
                position: absolute;
                left: 15%;

            }

            & .drainage-card {
                position: absolute;
                left: 50%;
                top: 25px;
                width: 300px;
                height: 400px;
                padding: 35px;
            }

            & .drainage-card2 {
                position: absolute;
                left: 15%;
                top: 525px;
                width: 300px;
                height: 400px;
                padding: 35px;
            }      
        
        }
    }
}

@media only screen and (min-width: 62em){
    .drainage{
        height: 200vh;
        
        & .healthy-body-img{
            position: absolute;
            left: 50%;
            height: 500px;
            margin-top: 100px;
        }

        & .drainage-container{
            & img{
                height: 500px;
                width: 400px;
                
            }

            & .massage-img{
                position: absolute;
                left: 17.5%;
            }

            & .drainage-card {
                position: absolute;
                left: 50%;
                top: 50px;
                width: 400px;
                height: 400px;
                padding: 35px;
            }

            & .drainage-card2 {
                position: absolute;
                left: 17.5%;
                top: 650px;
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
       

        & .healthy-body-img{
            margin-top: 200px;
            position: absolute;
            left: 45%;
            height: 500px;
        }

        & .drainage-container{
            & img{
                height: 600px;
                width: 500px;
                
            }

            & .drainage-card {
                position: absolute;
                left: 50%;
                top: 150px;
                width: 450px;
                height: 300px;
                padding: 35px;
            }

            & .massage-img{
                position: absolute;
                left: 20%;
                
            }

            & .drainage-card2 {
                position: absolute;
                left: 20%;
                top: 800px;
                width: 420px;
                height: 400px;
                padding: 35px;
            }      
        
        }
    }
  
}






</style>