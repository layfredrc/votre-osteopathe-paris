<template>
  <div>
    <!-- what we will build  ============================================================================= -->
    <div id="#build" class="p-24 bg-gray-300 text-gray-700">
      <div class="container mx-auto px-4  lg:px-10">
        <div class="mb-8 text-center">
          <h2
            class="mb-2 lg:text-5xl text-3xl w-full font-bold md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pale-green to-dark-green "
          >
            Des soins adaptés pour tous
          </h2>
          <p
            class="text-xs lg:text-lg md:text-lg xl:text-lg text-gray-700 font-light"
          >
            Par des manipulations douces, l’ostéopathe potentialise la mobilité
            du corps afin qu’il retrouve son équilibre physiologique.
          </p>
        </div>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 cursor-pointer"
      >
        <div
          class="flex bg-white rounded shadow pain modal-open  "
          id="adultes"
          @click="handleClickAdultes()"
        >
          <div
            class="w-2/5 md:w-1/5 lg:w-1/5 xl:w-1/5  flex items-center justify-center text-3xl bg-red-500 rounded-l"
          >
            👫
          </div>
          <div class="p-4 font-bold">Adultes</div>
        </div>

        <div
          class="flex bg-white rounded shadow pain modal-open seniors"
          @click="handleClickSeniors()"
        >
          <div
            class="w-2/5 md:w-1/5 lg:w-1/5 xl:w-1/5 flex items-center justify-center text-3xl bg-orange-500 rounded-l"
          >
            👴
          </div>
          <div class="p-4 font-bold">Seniors</div>
        </div>

        <div class="flex bg-white rounded shadow pain modal-open"
            @click="handleClickFemmeEnceinte()"
        >
          <div
            class="w-3/5 md:w-1/5 lg:w-1/5 xl:w-1/5 flex items-center justify-center text-3xl bg-purple-500 rounded-l"
          >
            🤰
          </div>
          <div class="p-4 font-bold">Femme Enceinte</div>
        </div>
        
        <div class="flex bg-white rounded shadow pain modal-open" @click="handleClickNourrissons()">
          <div
            class="w-2/5 md:w-1/5 lg:w-1/5 xl:w-1/5 flex items-center justify-center text-3xl bg-blue-500 rounded-l"
          >
            👶
          </div>
          <div class="p-4 font-bold">Nourrissons</div>
        </div>

        <div class="flex bg-white rounded shadow pain modal-open" @click="handleClickSportif()">
          <div
            class="w-2/5 md:w-1/5 lg:w-1/5 xl:w-1/5 flex items-center justify-center text-3xl bg-yellow-500 rounded-l"
          >
            🏋️
          </div>
          <div class="p-4 font-bold">Sportif</div>
        </div>

        <div class="flex bg-white rounded shadow pain modal-open" @click="handleClickUrgences()">
          <div
            class="w-2/5 md:w-1/5 lg:w-1/5 xl:w-1/5 flex items-center justify-center text-3xl bg-red-500 rounded-l"
          >
            🚨
          </div>
          <div class="p-4 font-bold">Urgences</div>
        </div>

        <div class="flex bg-white rounded shadow pain modal-open" @click="handleClickExercicesPhysiques()">
          <div
            class="w-3/5 md:w-1/5 lg:w-1/5 xl:w-1/5 flex items-center justify-center text-3xl bg-indigo-500 rounded-l"
          >
            🏃
          </div>
          <div class="p-4 font-bold">Exercices physiques</div>
        </div>

        <div class="flex bg-white rounded shadow pain modal-open" @click="handleClickMassageDrainant()">
          <div
            class="w-3/5 md:w-1/5 lg:w-1/5 xl:w-1/5 flex items-center justify-center text-3xl bg-teal-500 rounded-l"
          >
            💆
          </div>
          <div class="p-4 font-bold">Massage Drainant</div>
        </div>
      </div>
    </div>
    <Modal :name="name" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    handleClickAdultes: function() {
      console.log("click");
      this.name = "Adultes";
      console.log(this.name);
    },
    handleClickSeniors: function() {
      console.log("click");
      this.name = "Seniors";
      console.log(this.name);
    },
    handleClickFemmeEnceinte: function() {
      console.log("click");
      this.name = "Femme Enceinte";
      console.log(this.name);
    },
    handleClickNourrissons: function() {
      console.log("click");
      this.name = "Nourrissons";
      console.log(this.name);
    },
    handleClickSportif: function() {
      console.log("click");
      this.name = "Sportif";
      console.log(this.name);
    },
    handleClickUrgences: function() {
      console.log("click");
      this.name = "Urgences";
      console.log(this.name);
    },
    handleClickExercicesPhysiques: function() {
      console.log("click");
      this.name = "Exercices Physiques";
      console.log(this.name);
    },
    handleClickMassageDrainant: function() {
      console.log("click");
      this.name = "Massage Drainant";
      console.log(this.name);
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".pain", {
      scrollTrigger: {
        trigger: ".pain",
        start: "top center"
      },
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1.2
    });
  }
};
</script>
<style scoped></style>
