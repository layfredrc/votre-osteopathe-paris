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
  

}

@media only screen and (min-width:43em) {
    

@media only screen and (min-width: 62em){
  
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

}
}

</style>