<template>
    <!-- module/videos ==================================================================== -->
		<div class="py-24 bg-gradient-to-b from-gray-700 to-gray-800" id="tarifs">
			<div class="container mx-auto px-10 ">
				<div class="mb-10 text-center space-y-4">
					<h2
						class="text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-200 font-bold"
					>
						Mes prestations
					</h2>
					<p class="lg:text-2xl text-sm text-gray-100">
						Rendez-vous sur Doctolib disponible de 9h à 19h du Lundi au Samedi.
					</p>
				</div>

				<div class="max-w-3xl mx-auto tarifs">
					<div
						class="flex justify-between items-center p-6 bg-gray-800 text-gray-100 rounded-t-lg space-x-4"
					>
						<h4 class="text-sm md:text-lg lg:text-2xl">Consultation d'ostéopathie</h4>

						<div class="flex space-x-4 md:space-x-8 lg:space-x-8 xl:space-x-8 text-center text-xl font-bold">
							<div>
								<p class="text-sm">65€</p>
							<span class="block text-xs md:text-sm lg:text-sm xl:text-sm font-normal">CB/espèces</span>
							</div>

							<div>
								<p class="text-sm">45-60</p><span class="block text-xs md:text-sm lg:text-sm xl:text-sm font-normal">minutes</span>
							</div>
						</div>
					</div>
				</div>
				<div class="max-w-3xl mx-auto tarifs">
					<div
						class="flex justify-between items-center p-6 bg-gray-800 text-gray-100 bg-opacity-75"
					>
						<h4 class="text-sm md:text-lg lg:text-2xl">Consultation d'ostéopathie enfant</h4>

						<div class="flex space-x-4 md:space-x-8 lg:space-x-8 xl:space-x-8 text-center text-xl font-bold">
							<div>
							<p class="text-sm">60€</p>	
							<span class="block text-xs md:text-sm lg:text-sm xl:text-sm font-normal">CB/espèces</span>
							</div>

							<div>
							<p class="text-sm">45-60</p>
								<span class="block text-xs md:text-sm lg:text-sm xl:text-sm font-normal">minutes</span>
							</div>
						</div>
					</div>
				</div>
				<div class="max-w-3xl mx-auto tarifs">
					<div
						class="flex justify-between items-center p-6 bg-gray-800 text-gray-100 bg-opacity-75"
					>
						<h4 class="text-sm md:text-lg lg:text-2xl">Urgence ostéopathie à domicile <br> (Seine et Marne)</h4>

						<div class="flex space-x-4 md:space-x-8 lg:space-x-8 xl:space-x-8 text-center text-xl font-bold">
							<div>
							<p class="text-sm">80€</p>		
							<span class="block text-xs md:text-sm lg:text-sm xl:text-sm font-normal">CB/espèces</span>
							</div>

							<div>
							<p class="text-sm">60</p>
								<span class="block text-xs md:text-sm lg:text-sm xl:text-sm font-normal">minutes</span>
							</div>
						</div>
					</div>
				</div>
				<div class="max-w-3xl mx-auto tarifs">
					<div
						class="flex justify-between items-center p-6 bg-gray-800 text-gray-100 bg-opacity-50"
					>
						<h4 class="text-sm md:text-lg lg:text-2xl">Coaching Sportif</h4>

						<div class="flex space-x-4 md:space-x-8 lg:space-x-8 xl:space-x-8 text-center text-xl font-bold">
							<div>
							<p class="text-sm">45€</p>	
							<span class="block text-xs md:text-sm lg:text-sm xl:text-sm font-normal">CB/espèces</span>
							</div>

							<div>
							<p class="text-sm">-</p>
								<span class="block text-xs md:text-sm lg:text-sm xl:text-sm font-normal">minutes</span>
							</div>
						</div>
					</div>
				</div>
				<div class="max-w-3xl mx-auto tarifs">
					<div
						class="flex justify-between items-center p-6 bg-gray-800 text-gray-100 bg-opacity-75"
					>
						<h4 class="text-sm md:text-lg lg:text-2xl">Massage Drainant</h4>

						<div class="flex space-x-4 md:space-x-8 lg:space-x-8 xl:space-x-8 text-center text-xl font-bold">
							<div>
							<p class="text-sm">80€</p>	
							<span class="block text-xs md:text-sm lg:text-sm xl:text-sm font-normal">CB/espèces</span>
							</div>

							<div>
							<p class="text-sm">+60</p>
								<span class="block text-xs md:text-sm lg:text-sm xl:text-sm font-normal">minutes</span>
							</div>
						</div>
					</div>
				</div>
				<div class="max-w-3xl mx-auto tarifs">
					<div
						class="flex justify-between items-center p-6 bg-gray-800 text-gray-100 rounded-b-lg"
					>
						<h4 class="text-sm md:text-lg lg:text-2xl">Déplacement à domicile</h4>

						<div class="flex space-x-4 md:space-x-8 lg:space-x-8 xl:space-x-8 text-center text-xl font-bold">
							<div>
							<p class="text-sm">90€</p>	
								<span class="block text-xs md:text-sm lg:text-sm xl:text-sm font-normal">CB/espèces</span>
							</div>

							<div>
							<p class="text-sm">60</p>	
							<span class="block text-xs md:text-sm lg:text-sm xl:text-sm font-normal">minutes</span>
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
		gsap.registerPlugin(ScrollTrigger);
			gsap.from(".tarifs", {
				scrollTrigger: {
					trigger: ".tarifs",
					start: "top center",
				},
				y: 50,
				opacity: 0,
				stagger: 0.3,
				duration: 1.2,
			});
	}
}
</script>