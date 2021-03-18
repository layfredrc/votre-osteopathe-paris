<template>
  	<section class="partenaires">
			<h1 class=" subtitle slogan text-gradient" style="font-size: 28px;">En partenariat avec</h1>
			<div class="partenaire-container">
				<img src="../assets/aqualoft.png" alt="aqualoft" />
				<img src="../assets/hbp.png" alt="healthy body program" />
				<img src="../assets/casino.png" alt="circus club paris" />
			</div>
		</section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.partenaires {
	background-color: #d8dfd7;
    height: 70vh;
    
    & img {
	    width: 150px;
        margin: 20px;
        display: inline-block;
    }
}

  .text-gradient {
		background-image: linear-gradient(to right, #5c258d, #28b485);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

@media only screen and (max-width: 28em){
   .partenaires{
	   height: 100vh;
	}

}

@media only screen and (min-width:43em) {
    .partenaires{
		height: 35vh;
	}
}

@media only screen and (min-width: 62em){
    .partenaires {
		height: 35vh;
		margin-top: -100px;
	}
	.partenaires img {
		width: 180px;
		margin: 20px;
	}
	.partenaire-container {
		display: flex;
		justify-content: space-evenly;
    }
  
}
@media only screen and (min-width: 82em){
	.partenaires{
		margin-top: -200px;
		height: 50vh;
	}
}


</style>