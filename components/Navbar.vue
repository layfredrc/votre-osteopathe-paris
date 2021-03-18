<template>
 <div class="nav-container">
			<header>
				<nuxt-link to="/" class="logo"><img src="../assets/Logo.png" alt="Logo" /></nuxt-link>
				<nav>
					<ul>
						<li><nuxt-link to="/services" class="hover:underline">Services</nuxt-link></li>
						<li><nuxt-link to="/services#tarifs" class="hover:underline">Tarifs</nuxt-link></li>
						<li><nuxt-link to="/patriciachung" class="hover:underline">Votre Osteopathe</nuxt-link></li>
						<li>
							<a
								href="https://www.doctolib.fr/osteopathe/paris/patricia-chung"
								target="_blank"
								class="hover:underline">Prendre RDV</a
							>
						</li>
					</ul>
				</nav>
			</header>

			<div class="social-header">
				<ul>
					<li class="num">
						<a href="tel:06-16-24-61-44"
							><img
								src="https://img.icons8.com/ios/48/000000/outgoing-call.png"
								alt="06 16 24 61 44"
								class="tel-icon"
							/><span class="">06 16 24 61 44</span></a
						>
					</li>

					<li class="img-doctolib">
						<a
							target="_blank"
							href="https://www.doctolib.fr/osteopathe/paris/patricia-chung"
							><img src="../assets/icone-doctolib.png" alt="doctolib patricia chung"
						/></a>
					</li>

					<li class="ig">
						<a
							target="_blank"
							href="https://www.instagram.com/osteopathe.paris16/"
							><img
								src="../assets/icon-ig.png" alt="instagram"/>
						/></a>
					</li>
					<li class="fb">
						<a
							target="_blank"
							href="https://www.google.com/maps/dir//48.8407981,2.2565078/@48.840798,2.256508,14z?hl=fr"
							><img src="../assets/icon-google-maps.png" alt="google maps"/></a>
					</li>
				</ul>
			</div>
		</div>
        
</template>

<script>
export default {

}
</script>

<style lang="scss">
.nav-container {
    background-color: #a4c3b2;

    & a{
        color: white;
    }
  
}

header {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
    padding: 2em;
    height: 105px;
	text-transform: uppercase;
 
    
    & nav ul {
        display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
    }

    & nav ul a {
        display: block;
	    padding: 0 1em;
    }

    & .logo{
        width:82px;
        transform: translate(-5px,-25px);
    }

}

.social-header,
.hero-design {
	display: none;
}

@media only screen and (max-width: 28em){
    header nav ul{
        display: none;
    }

	


}

@media only screen and (min-width:53em) {
	header{
		& .logo{
		transform: translate(-5px,-25px);
	}
	}
    
}

/* @media only screen and (min-width: 72em){
    .nav-container {
		display: -ms-grid;
		display: grid;
		-ms-grid-columns: 66% auto;
		grid-template-columns: 66% auto;
		background: unset;
        font-size: 18px;
        & header{
            background: #a4c3b2;
        }
    }

    .social-header{
        display: block;
        padding: 2em 4em 0em 0;
		transform: translateY(-8px);
        & ul{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            float: right;
	
            width: 18em;
            
            & ul li{
                width: 80px;
            }
            & img{
                width: 35px;
		        margin-right: 5px;
            }

        }
    }

    .num {
		color: black;
		margin-right: auto;
		width: 180px;
        font-size: 16px;
        
        & span{
            display: inline-block;
            color: black;
            width: 120px;
            font-weight: 600;
            text-decoration: underline;
            transform: translate(45px, -28px);
        }
	}

} */

@media only screen and (min-width:82em){

    .nav-container {
		display: -ms-grid;
		display: grid;
		-ms-grid-columns: 66% auto;
		grid-template-columns: 66% auto;
		background: unset;
        font-size: 20px;
        & header{
            background: #a4c3b2;
        }
    }

    .social-header{
        display: block;
        padding: 2em 4em 0em 0;
		transform: translateY(-8px);
        & ul{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            float: right;
		
            width: 18em;
            
            & ul li{
                width: 80px;
            }
            & img{
                width: 35px;
		        margin-right: 5px;
            }

        }
    }

    .num {
		color: black;
		margin-right: auto;
		width: 180px;
        font-size: 16px;
        
        & span{
            display: inline-block;
            color: black;
            width: 120px;
            font-weight: 600;
            text-decoration: underline;
            transform: translate(45px, -28px);
        }
	}



}


</style>