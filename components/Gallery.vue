<template>
  <section class="section-cabinet" id="section4">
			<h1
				class="heading-secondary u-center-text text-gradient u-margin-top-small"
			>
				Votre Cabinet
			</h1>

			<div class="gallery">
				<figure class="gallery__item gallery__item--1">
					<img
						src="../assets/gal-1.jpeg"
						alt="Gallery image 1"
						class="gallery__img"
						data-original="gal-1.jpeg"
					/>
				</figure>
				<figure class="gallery__item gallery__item--2">
					<img
						src="../assets/gal-2.jpeg"
						alt="Gallery image 2"
						class="gallery__img"
						data-original="gal-2.jpeg"
					/>
				</figure>
				<figure class="gallery__item gallery__item--3">
					<img
						src="../assets/gal-3.jpeg"
						alt="Gallery image 3"
						class="gallery__img"
						data-original="gal-3.jpeg"
					/>
				</figure>
				<figure class="gallery__item gallery__item--4">
					<img
						src="../assets/gal-4.jpeg"
						alt="Gallery image 4"
						class="gallery__img"
						data-original="gal-4.jpeg"
					/>
				</figure>
				<figure class="gallery__item gallery__item--5">
					<img
						src="../assets/gal-5.jpeg"
						alt="Gallery image 5"
						class="gallery__img"
						data-original="gal-5.jpeg"
					/>
				</figure>
				<figure class="gallery__item gallery__item--6">
					<img
						src="../assets/gal-6.jpeg"
						alt="Gallery image 6"
						class="gallery__img"
						data-original="gal-6.jpeg"
					/>
				</figure>
				<figure class="gallery__item gallery__item--7">
					<img
						src="../assets/gal-7.jpeg"
						alt="Gallery image 7"
						class="gallery__img"
						data-original="gal-7.jpeg"
					/>
				</figure>
				<figure class="gallery__item gallery__item--8">
					<img
						src="../assets/gal-8.jpeg"
						alt="Gallery image 8"
						class="gallery__img"
						data-original="gal-8.jpeg"
					/>
				</figure>
				<figure class="gallery__item gallery__item--9">
					<img
						src="../assets/gal-9.jpeg"
						alt="Gallery image 9"
						class="gallery__img"
						data-original="gal-9.jpeg"
					/>
				</figure>
				<figure class="gallery__item gallery__item--10">
					<img
						src="../assets/gal-10.jpeg"
						alt="Gallery image 10"
						class="gallery__img"
						data-original="gal-10.jpeg"
					/>
				</figure>
				<figure class="gallery__item gallery__item--11">
					<img
						src="../assets/gal-11.jpeg"
						alt="Gallery image 11"
						class="gallery__img"
						data-original="gal-11.jpeg"
					/>
				</figure>
				<figure class="gallery__item gallery__item--12">
					<img
						src="../assets/gal-12.jpeg"
						alt="Gallery image 12"
						class="gallery__img"
						data-original="gal-12.jpeg"
					/>
				</figure>
				<figure class="gallery__item gallery__item--13">
					<img
						src="../assets/gal-13.jpeg"
						alt="Gallery image 13"
						class="gallery__img"
						data-original="gal-13.jpeg"
					/>
				</figure>
				<figure class="gallery__item gallery__item--14">
					<img
						src="../assets/gal-14.jpeg"
						alt="Gallery image 14"
						class="gallery__img"
						data-original="gal-14.jpeg"
					/>
				</figure>
			</div>

			
		</section>
</template>

<script>
export default {
    // mounted(){
    //     const modal = document.querySelector(".modal");
    //     const previews = document.querySelectorAll(".gallery__item img");
    //     const original = document.querySelector(".full-img");
    //     const caption = document.querySelector(".modal-caption");

    //     previews.forEach((preview) => {
    //         preview.addEventListener("click", () => {
    //             modal.classList.add("open");
    //             original.classList.add("open");
    //             console.log(preview)
    //             //Dynamic change text and image
    //             const originalSrc = preview.getAttribute("data-original");
    //             console.log(originalSrc);
    //             original.src = `/_nuxt/assets/${originalSrc}`;
    //             console.log(original.src)
    //             const altText = preview.alt;
    //             caption.textContent = altText
    //         });
    //     });

    //     modal.addEventListener("click", (e) => {
    //         if (e.target.classList.contains("modal")) {
    //             modal.classList.remove("open");
    //             original.classList.remove("open");
    //         }
    //     });

    // }
}
</script>

<style lang="scss">
    

    .gallery {
	background-color: #f9f7f6;
	grid-column: full-start / full-end;
	display: grid;
	/*grid-template-columns: repeat(8, 1fr);
	  grid-template-rows: repeat(7, 5vw);*/
	grid-template: repeat(7, 5vw) / repeat(8, 1fr);
	grid-gap: 15px;
	padding: 15px;
}
.gallery__item--1 {
	grid-row: 1 / span 2;
	grid-column: 1 / span 2;
}
.gallery__item--2 {
	grid-row: 1 / span 3;
	grid-column: 3 / span 3;
}
.gallery__item--3 {
	grid-row: 1 / span 2;
	grid-column: 6 / 7;
}
.gallery__item--4 {
	grid-row: 1 / span 2;
	grid-column: 7 / -1;
}
.gallery__item--5 {
	grid-row: 3 / span 3;
	grid-column: 1 / span 2;
}
.gallery__item--6 {
	grid-row: 4 / span 2;
	grid-column: 3 / span 2;
}
.gallery__item--7 {
	grid-row: 4 / 5;
	grid-column: 5 / 6;
}
.gallery__item--8 {
	grid-row: 3 / span 2;
	grid-column: 6 / span 2;
}
.gallery__item--9 {
	grid-row: 3 / span 3;
	grid-column: 8 / -1;
}
.gallery__item--10 {
	grid-row: 6 / span 2;
	grid-column: 1 / 2;
}
.gallery__item--11 {
	grid-row: 6 / span 2;
	grid-column: 2 / span 2;
}
.gallery__item--12 {
	grid-row: 6 / span 2;
	grid-column: 4 / 5;
}
.gallery__item--13 {
	grid-row: 5 / span 3;
	grid-column: 5 / span 3;
}
.gallery__item--14 {
	grid-row: 6 / span 2;
	grid-column: 8 / -1;
}
.gallery__img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
	transition: all 0.3s ease-out;
	cursor: pointer;
}

.gallery__img:hover {
	transform: scale(1.025);
}

.modal {
	background: rgba(0, 0, 0, 0.6);
	opacity: 0;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
}

.modal.open {
	opacity: 1;
	pointer-events: all;
}
.modal p {
	color: white;
	font-size: 2rem;
	position: absolute;
	bottom: 5%;
	left: 50%;
	transform: translate(-50%, -5%);
}

.full-img {
	position: absolute;
  
    width: 50%;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) scale(0.5);
	transition: all 0.25s ease-out;
}

.full-img.open {
	transform: translate(-50%, -50%) scale(1);
}

@media only screen and (min-width:82em){
	
}

@media only screen and (min-width: 62em) {



    .heading-secondary{
        font-size: 36px;
        font-weight: 600;
        text-transform: uppercase;
    }
}
@media only screen and (min-width: 43em) {

	

    .heading-secondary{
        font-size: 36px;
        font-weight: 600;
        text-transform: uppercase;
    }
}
@media only screen and (max-width: 28em) {
    .heading-secondary{
        font-size: 36px;
        font-weight: 600;
        text-transform: uppercase;
    }

    .gallery{
        padding: 5px;
		grid-gap: 5px;
		padding: 5px;
    }
}
</style>