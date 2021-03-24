<template>
    <div>
        <!-- <Navbar/> -->
        <Navigation/>
        <Pain/>
        <Overview/>
        <Glossaire/>
        <Timestamps/>
        <Footer/>
    </div>
</template>

<script>




export default {
    head(){
        return{
            script:[
            
                {hid:'gsap',src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"},
                {hid:'scrollTrigger', src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js"}
            ]
        }
    },

    mounted(){
      gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline();

			tl.from(".content", {
				y: "-30%",
				opacity: 0,
				duration: 2.5,
				ease: Power4.easeOut,
			});

			gsap.from(".transition2", {
				scrollTrigger: {
					trigger: ".transition2",
					start: "top center",
				},
				y: 50,
				opacity: 0,
				stagger: 0.3,
				duration: 1.2,
			});

            gsap.from(".transition4", {
				scrollTrigger: {
					trigger: ".transition4",
					start: "top center",
				},
				y: 50,
				opacity: 0,
				stagger: 0.3,
				duration: 1.2,
			});


			gsap.from(".transition3", {
				scrollTrigger: {
					trigger: ".transition3",
					start: "top center",
				},
				y: 50,
				opacity: 0,
				stagger: 0.6,
				duration: 1.2,
			});
            gsap.from(".transition5", {
				scrollTrigger: {
					trigger: ".transition5",
					start: "top center",
				},
				y: 50,
				opacity: 0,
				stagger: 0.6,
				duration: 1.2,
			});

    }
}
</script>

<style>

</style>