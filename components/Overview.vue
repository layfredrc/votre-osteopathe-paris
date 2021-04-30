<template>
    <div>
        <!-- Overview  ============================================================================= -->
		<div id="about" class="relative bg-dark-green lg:pt-12 pb-24 overview">
			<!-- gray bar to help section transition  -->

			<div class="absolute bottom-0 inset-x-0 bg-gray-200 h-48"></div>

			<div class="relative container mx-auto px-6 lg:px-10">
				<h2 class="lg:mb-10 mb-4 pt-6 text-3xl lg:text-5xl font-bold text-white">
					Quand consulter mon Ostéopathe ?
				</h2>

				<div class="lg:flex lg:space-x-16 space-y-8 lg:space-y-0 lg:p-12 p-2">
					<!-- left col  -->
					<div
						class="lg:w-2/3 bg-white p-8 lg:p-16 rounded-lg shadow-2xl text-gray-800 text-lg space-y-8 leading-relaxed"
					>
						<p>
							Quel que soit votre âge, nourrissons, enfants, adolescents, adultes, âgés, enceintes,
							vous pouvez avoir recours à <strong class="font-bold text-green-500"
								> l’ostéopathie pour prendre soin de vous.   </strong
							>
						</p>
						
						<p>
							 Les motifs qui peuvent vous conduire à consulter un ostéopathe sont nombreux et variés. 
							Les plus fréquents en matière d’urgence sont <strong class="font-bold text-green-500">les lumbagos, sciatiques, blocages, torticolis et névralgies.</strong>
							
							 

						</p>

						<p>Les zones principalement touchées sont le plus souvent 
							<strong class="font-bold text-green-500"
								>le cou et le dos</strong
							>, d’une manière générale <strong class="font-bold text-green-500">les articulations</strong> et diverses <strong class="font-bold text-green-500">douleurs mécaniques.</strong> <br/>
							 La plupart de ces maux constituent le quotidien des ostéopathes. </p>


						<p class="relative text-3xl italic">
							<span
								class="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 text-green-600 text-6xl opacity-50"
								>"</span
							>
							This isn't just a Tailwind course. This is also a "learn how to
							design with CSS" course.
						</p>
						<p>
							Néansmoins, il est conseillé de réaliser une séance 2 à 3 fois par an minimum à titre préventif.
						</p>
						<p>En bilan, l’ostéopathe va observer votre posture et effectuer un bilan complet permettant de repérer d’éventuelles tensions, qui, si elles ne sont pas traitées, pourraient vous occasionner des douleurs par la suite.</p>
					</div>
					<!-- right col  -->
					<div class="flex-grow space-y-4 text-lg italic">
						<div class="p-10 rounded-lg bg-medium-green text-green-200">
							Pourquoi consulter un ostéopathe?
						</div>
						<div class="p-10 rounded-lg bg-medium-green text-green-200">
							Pour qui les séances d'ostéopathie sont conseillées?
						</div>
						<div class="p-10 rounded-lg bg-medium-green text-green-200">
							Quels sont les bénéfices d'une séance d'ostéopathie?
						</div>
						<div class="p-10 rounded-lg bg-medium-green text-green-200">
							Quelles pathologies peuvent être traités par l'ostéopathe?
						</div>
						<div class="p-10 rounded-lg bg-medium-green text-green-200">
							Quelle est la durée d'une séance d'ostéopathie?
						</div>
					
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
export default {
    mounted(){
		 var tl = gsap.timeline();

			tl.from(".overview", {
				y: "-30%",
				opacity: 0,
				duration: 2.5,
				ease: Power4.easeOut,
			});
	}
}
</script>