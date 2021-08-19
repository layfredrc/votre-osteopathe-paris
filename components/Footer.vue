<template>
  <footer class="bg-gray-800 text-gray-300 px-6 lg:px-8 py-12">
    <div
      class="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8"
    >
      <div>
        <nuxt-link to="/"
          ><img
            class="footerLogo lazyload"
            data-src="../assets/PAT LOGO 2 - 230121.png"
            alt="UptimeMate logo"
        /></nuxt-link>
      </div>
      <div>
        <h5 class="text-xl font-semibold text-white">Plan du site</h5>
        <nav class="mt-4">
          <ul class="space-y-2">
            <li>
              <nuxt-link
                to="/"
                class="font-normal text-base footer-left-anim hover:text-gray-100 "
                >Accueil</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/services"
                class="font-normal text-base hover:text-gray-100 footer-left-anim"
                >Services</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/services#tarifs"
                class="font-normal text-base hover:text-gray-100 footer-left-anim"
                >Tarifs</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/patriciaChung"
                class="font-normal text-base hover:text-gray-100 footer-left-anim"
                >Votre ostéopathe</nuxt-link
              >
            </li>
            <li>
              <a
                href="../brochure.pdf"
                target="_blank"
                rel="noopener"
                class="font-normal text-base hover:text-gray-100 footer-left-anim"
                >Brochure</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h5 class="text-xl font-semibold text-white">Contact</h5>
        <div class="space-y-4 md:space-y-6 mt-4">
          <div class="flex items-start space-x-4">
            <div>
              <svg
                class="w-6 h-6 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </div>
            <div class="flex-1">
              <a
                target="_blank"
                rel="noopener"
                href="https://www.google.com/maps/dir//48.8407981,2.2565078/@48.840798,2.256508,14z?hl=fr"
              >
                <address class="not-italic footer-left-anim">
                  Pôle de Santé Murat,<br />
                  89 Boulevard Murat 75016 Paris
                </address></a
              >
            </div>
          </div>
          <div class="flex items-start space-x-4">
            <div>
              <svg
                class="w-6 h-6 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <div class="flex-1">
              <a
                href="mailto:patriciachung.osteo@gmail.com"
                class="hover:text-gray-100 footer-left-anim"
                >patriciachung.osteo@gmail.com</a
              >
            </div>
          </div>
          <div class="flex items-start space-x-4">
            <div>
              <svg
                class="w-6 h-6 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div class="flex-1">
              <a
                href="tel:06-16-24-61-44"
                class="hover:text-gray-100 footer-left-anim"
                >06 16 24 61 44</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="lg:ml-16">
        <h5 class="text-xl font-semibold text-white ">Horaires</h5>
        <div class="space-y-8 mt-4">
          <div class="flex-1">
            <strong>Lundi - Samedi.</strong>
            <p class="font-semibold block mt-2 text-sm text-gray-400">
              9h - 20h
            </p>
          </div>

          <div class="flex-1">
            <a
              href="https://www.doctolib.fr/osteopathe/paris/patricia-chung"
              target="_blank"
              rel="noopener"
              class="inline-block bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 font-semibold rounded-lg py-4 px-5 lg:px-8 text-white"
              >Prendre RDV</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto flex flex-col items-center mt-16">
      <div class="flex items-center space-x-2">
        <a
          href="https://www.facebook.com/osteopatheportedesaintcloud"
          target="_blank"
          rel="noopener"
          class="hover:text-gray-100"
        >
          <span class="sr-only">Facebook</span>
          <svg
            class="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://www.instagram.com/osteopathe.paris16/"
          class="hover:text-gray-100"
        >
          <span class="sr-only">Instagram</span>
          <svg
            class="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/patriciachung/"
          target="_blank"
          rel="noopener"
          class="hover:text-gray-100"
        >
          <span class="sr-only">LinkedIn</span>
          <svg
            role="img"
            class="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LinkedIn icon</title>
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            />
          </svg>
        </a>
      </div>
      <div class="text-sm mt-4">
        &copy;2021 Patricia Chung Osteopathe Paris 16. All rights reserved. Made
        by
        <a
          href="https://www.notion.so/Hello-This-is-Fr-d-ric-5b0738de51b740ce9c3fe96d9251a3f1"
          class="footer-left-anim"
          target="_blank"
          rel="noopener"
          >Frédéric LAY.</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style>
.footerLogo {
  width: 230px;
}

.footer-left-anim {
  position: relative;
}

.footer-left-anim:before {
  content: "";
  position: absolute;

  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}

.footer-left-anim:hover:before {
  visibility: visible;
  width: 100%;
}
</style>
