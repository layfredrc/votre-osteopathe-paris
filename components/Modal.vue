<template>
  <!--Modal-->
  <div
    class="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center z-50 transition-opacity ease-out duration-300"
  >
    <div
      class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
    ></div>

    <div
      class="modal-container bg-white w-8/12  mx-auto rounded shadow-lg z-50 overflow-y-auto"
    >
      <div
        class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
      >
        <svg
          class="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
          ></path>
        </svg>
        <span class="text-sm">(Esc)</span>
      </div>

      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <div class="modal-content w-full">
        <div
          class="h-10 bg-red-400"
          id="headerModal"
          v-if="name === 'Adultes'"
        ></div>
        <div
          class="h-10 bg-orange-500"
          id="headerModal"
          v-if="name === 'Seniors'"
        ></div>
        <div
          class="h-10 bg-purple-500"
          id="headerModal"
          v-if="name === 'Femme Enceinte'"
        ></div>
        <div
          class="h-10 bg-blue-500"
          id="headerModal"
          v-if="name === 'Nourrissons'"
        ></div>
        <div
          class="h-10 bg-yellow-500"
          id="headerModal"
          v-if="name === 'Sportif'"
        ></div>
        <div
          class="h-10 bg-red-500"
          id="headerModal"
          v-if="name === 'Urgences'"
        ></div>
        <div
          class="h-10 bg-indigo-500"
          id="headerModal"
          v-if="name === 'Exercices Physiques'"
        ></div>
        <div
          class="h-10 bg-teal-500"
          id="headerModal"
          v-if="name === 'Massage Drainant'"
        ></div>

        <!--Body-->
        <div
          v-if="name === 'Adultes'"
          class="flex flex-col justify-between items-center py-4 text-left px-8"
        >
          <h1 class="font-bold xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl">
            Adultes <span class=" font-normal">👫</span>
          </h1>
          <div class="items-start">
            <p class="my-4 text-xs lg:text-lg md:text-lg xl:text-lg ">
              Le corps est soumis à des tensions et contraintes au quotidien.
              Les raisons de consulter un ostéopathe sont multiples : douleurs
              au dos, migraines, reflux, surmenage, torticolis, etc. Tous ces
              troubles sont souvent la conséquence d’un rythme de vie effréné,
              de mauvaises postures au travail ou d’une hygiène de vie laissant
              à désirer. L'ostéopathie a une visée curative mais aussi
              préventive.
            </p>
            <h3 class="text-sm xl:text-2xl lg:text-2xl md:text-2xl font-bold">
              Motifs de consultation :
            </h3>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg mt-2">
              Douleurs vertébrales, articulaires et musculaires
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">Névralgies</li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Rhumatismes articulaires
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Tendinopathies
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Troubles digestifs
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Troubles urinaires et gynécologiques
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Migraines et troubles ORL
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Stress, troubles du sommeil
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">Prévention</li>
          </div>
        </div>
        <div
          v-if="name === 'Seniors'"
          class="flex flex-col justify-between items-center py-4 text-left px-6 "
        >
          <h1 class="text-3xl font-bold">
            Seniors <span class="font-normal">👴</span>
          </h1>
          <div class="items-start">
            <p class="my-4 text-xs lg:text-lg md:text-lg xl:text-lg ">
              La consultation en ostéopathie chez les séniors vise avant tout à
              aider la personne à conserver tonicité et vitalité. Les muscles et
              ligaments perdent de leur souplesse, les articulations
              s'enraidissent et l'impact est important sur la qualité de vie.
              Ces événements sont certes inéluctables mais le traitement
              ostéopathique va viser à retarder leurs apparitions et réduire
              leurs conséquences
            </p>
            <h3 class="text-sm xl:text-2xl lg:text-2xl md:text-2xl font-bold">
              Motifs de consultation :
            </h3>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg mt-2">
              Douleurs vertébrales, articulaires et musculaires
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">Névralgies</li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Rhumatismes articulaires
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Tendinopathies
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Troubles digestifs
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Troubles urinaires, gynécologiques et circulatoires
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Migraines et troubles ORL
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Stress, troubles du sommeil
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">Prévention</li>
          </div>
        </div>
        <div
          v-if="name === 'Femme Enceinte'"
          class="flex flex-col justify-between items-center py-4 text-left px-6  overflow-y-scroll"
        >
          <h1 class="text-3xl font-bold">
            Femme Enceinte<span class="font-normal">🤰</span>
          </h1>
          <div class="items-start">
            <h3 class="text-sm xl:text-2xl lg:text-2xl md:text-2xl font-bold">
              Pendant la grossesse:
            </h3>
            <p class="my-2 text-xs lg:text-lg md:text-base xl:text-lg ">
              Mon travail est de vous accompagner tout au long de ce moment
              tellement particulier, tant émotionnellement que
              physiologiquement. Le traitement ostéopathique soulage les
              douleurs chez la femmes enceinte en éliminant les dysfonctions
              somatiques et en maintenant une bonne mobilité des structures.
            </p>
            <h3 class="text-sm xl:text-2xl lg:text-2xl md:text-2xl font-bold">
              Préparation à l'accouchement :
            </h3>
            <p class="my-2 text-xs lg:text-lg md:text-base xl:text-lg ">
              Il est également très important de préparer votre bassin à
              l’accouchement, afin d’assurer une bonne mobilité de tous les
              tissus pour favoriser le passage de votre bébé.
            </p>
            <h3 class="text-sm xl:text-2xl lg:text-2xl md:text-2xl font-bold">
              Motifs de consultation :
            </h3>
            <li class="my-2 text-xs lg:text-lg md:text-base xl:text-lg">
              Troubles mécaniques : lombalgies, sciatalgies, douleurs au niveau
              du sacrum ou du coccyx (coccygodynie), cruralgies, fausses
              sciatiques
            </li>
            <li class="my-2 text-xs lg:text-lg md:text-base xl:text-lg">
              Troubles digestifs : nausées, difficultés à la digestion,
              ballonnements, régurgitations, constipations, douleurs abdominales
            </li>
            <li class="my-2 text-xs lg:text-lg md:text-base xl:text-lg">
              Troubles circulatoires : jambes lourdes, hémorroïdes, maux de tête
            </li>
          </div>
        </div>
        <div
          v-if="name === 'Nourrissons'"
          class="flex flex-col justify-between items-center py-4 text-left px-6 "
        >
          <h1 class="text-3xl font-bold">
            Nourrissons <span class="font-normal">👶</span>
          </h1>
          <div class="items-start">
            <p class="my-4 text-xs lg:text-lg md:text-lg xl:text-lg ">
              L’objectif d’une séance en ostéopathie chez le nourrisson consiste
              à rétablir un équilibre et soulager rapidement les tensions qui
              ont pu se créer pendant la grossesse, au cours de l’accouchement
              ou lors des premiers mois de sa vie. Ces phénomènes conduisent à
              différents motifs de consultation répondant aux champs de
              compétence de l’ostéopathe.
            </p>
            <h3 class="text-sm xl:text-2xl lg:text-2xl md:text-2xl font-bold">
              Motifs de consultation :
            </h3>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg mt-2">
              Prématurité
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Accouchement compliqué
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Trouble de la succion, difficulté d’allaitement
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Bébé agité
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Troubles du sommeil
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Des pleurs incessants
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Déformation du crâne
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Torticolis
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">Otites</li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Douleurs de coliques
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Régurgitation
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Constipation
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Retard psycho-moteur
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Bilan ostéopathique préventif
            </li>
          </div>
        </div>
        <div
          v-if="name === 'Sportif'"
          class="flex flex-col justify-between items-center py-4 text-left px-6 "
        >
          <h1 class="text-3xl font-bold">
            Sportif <span class="font-normal">🏋️</span>
          </h1>
          <div class="items-start">
            <p class="my-4 text-xs lg:text-lg md:text-lg xl:text-lg ">
              Un patient sportif, de n'importe quel niveau, a pour objectif le
              maintien voire l’amélioration de ses performances. Une perte de
              mobilité articulaire, une douleur chronique, une gêne ou un
              blocage articulaire ressenti, une lésion musculaire qui
              persistent, peuvent vite faire que la pratique sportive ne soit
              plus un plaisir. En traitant les véritables causes des douleurs
              sportives, il s’agit d’améliorer la puissance musculaire, la
              souplesse articulaire et la capacité respiratoire de chaque
              sportif contribuant de ce fait à l’amélioration générale de ses
              performances et au maintien de son bon état de forme.
            </p>
            <h3 class="text-sm xl:text-2xl lg:text-2xl md:text-2xl font-bold">
              Motifs de consultation :
            </h3>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg mt-2">
              Douleurs musculaires, articulaires et vertébrales
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Tendinopathies
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Névralgies
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Entorses
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Troubles digestifs
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Suites de fractures
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Stress
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Préparation à une compétition
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">Prévention</li>
          </div>
        </div>
        <div
          v-if="name === 'Urgences'"
          class="flex flex-col justify-between items-center py-4 text-left px-6 "
        >
          <h1 class="text-3xl font-bold">
            Urgences <span class="font-normal">🚨</span>
          </h1>
          <div class="items-start">
            <p class="my-4 text-xs lg:text-lg md:text-lg xl:text-lg ">
              Le corps est soumis à des tensions et contraintes au quotidien.
              Les raisons de consulter un ostéopathe sont multiples : douleurs
              au dos, migraines, reflux, surmenage, torticolis, etc. Tous ces
              troubles sont souvent la conséquence d’un rythme de vie effréné,
              de mauvaises postures au travail ou d’une hygiène de vie laissant
              à désirer. L'ostéopathie a une visée curative mais aussi
              préventive.
            </p>
            <h3 class="text-sm xl:text-2xl lg:text-2xl md:text-2xl font-bold">
              Motifs de consultation :
            </h3>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg mt-2">
              Douleurs vertébrales, articulaires et musculaires
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">Névralgies</li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Rhumatismes articulaires
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Tendinopathies
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Troubles digestifs
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Troubles urinaires et gynécologiques
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Migraines et troubles ORL
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">
              Stress, troubles du sommeil
            </li>
            <li class="text-sm xl:text-lg lg:text-lg md:text-lg">Prévention</li>
          </div>
        </div>
        <div
          v-if="name === 'Exercices Physiques'"
          class="flex flex-col justify-between items-center py-4 text-left px-6 "
        >
          <h1 class="text-3xl font-bold">
            Exercices Physiques <span class="font-normal">🏃</span>
          </h1>
          <div class="items-start px-8 mt-6">
            <h3 class="text-sm xl:text-2xl lg:text-2xl md:text-2xl font-bold">
              Fixez vos Objectifs ! Disciplinez-vous pour les atteindres.
            </h3>
            <p class=" text-xs lg:text-lg md:text-lg xl:text-lg ">
              Vous sentez l'envie de changer votre hygiène de vie ? Dans cette
              aventure, le plus dur c'est de commencer. L'idée est de vous
              amener vers une transition physique et mentale durable.
            </p>
            <h3 class="text-sm xl:text-2xl lg:text-2xl md:text-2xl font-bold">
              Votre coach sportif est disponible pour vous.
            </h3>
            <p class=" text-xs lg:text-lg md:text-lg xl:text-lg ">
              Réservez une session sportive dès aujourd'hui ! Ostéopathe et
              coach sportive, chaque programme sera entièrement personnalisé à
              votre corps avec des conseils propre à vos attentes.
            </p>
            <div class="mt-4">
              <a
                href="../sportBrochure.pdf"
                target="_blank"
                rel="noopener"
                class="inline-block bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 font-semibold rounded-lg py-2 px-5 lg:px-6 md:px-3 md:text-sm text-white"
                >En savoir plus</a
              >
            </div>
          </div>
        </div>
        <div
          v-if="name === 'Massage Drainant'"
          class="flex flex-col justify-between items-center py-4 text-left px-6 "
        >
          <h1 class="text-3xl font-bold">
            Massage Drainant <span class="font-normal">💆</span>
          </h1>
          <div class="items-start mt-4 ">
            <h3 class="text-sm xl:text-xl lg:text-xl md:text-xl font-bold">
              Corps Détoxifié
            </h3>
            <p class="my-2 text-xs lg:text-lg md:text-base xl:text-lg ">
              Ce drainage permet de relancer le système lymphatique et le
              transport des déchets en dehors de l'organisme ce qui permettra de
              renforcer votre système immunitaire.
            </p>
            <h3 class="text-sm xl:text-xl lg:text-xl md:text-xl font-bold">
              Silhouette Affinée
            </h3>
            <p class="my-2 text-xs lg:text-lg md:text-base xl:text-lg ">
              Ce massage permet l'activation de la circulation sanguine et des
              fluides corporelles ce qui permet d'éliminer la rétention d'eau.
              Le corps est affiné et plus galbé. Les jambes sont moins lourdes.
            </p>

            <div class="mx-auto">
              <a
                href="../Drainage.pdf"
                target="_blank"
                rel="noopener"
                class="mt-4 inline-block bg-gradient-to-br from-pale-green to-dark-green hover:from-dark-green hover:to-pale-green font-semibold rounded-lg py-2 px-5 lg:px-6 text-lg text-white"
                >En savoir plus
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  },
  mounted() {
    var openmodal = document.querySelectorAll(".modal-open");
    for (var i = 0; i < openmodal.length; i++) {
      openmodal[i].addEventListener("click", function(event) {
        event.preventDefault();
        toggleModal();
      });
    }

    const overlay = document.querySelector(".modal-overlay");
    overlay.addEventListener("click", toggleModal);

    var closemodal = document.querySelectorAll(".modal-close");
    for (var i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener("click", toggleModal);
    }

    document.onkeydown = function(evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }
      if (isEscape && document.body.classList.contains("modal-active")) {
        toggleModal();
      }
    };

    function toggleModal() {
      const body = document.querySelector("body");
      const modal = document.querySelector(".modal");
      modal.classList.toggle("opacity-0");
      modal.classList.toggle("pointer-events-none");
      body.classList.toggle("modal-active");
    }
  }
};
</script>

<style></style>
