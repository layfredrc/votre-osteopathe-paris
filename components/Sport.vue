<template>
    <!-- horizontal card -->
<div class="p-8 md:p-4 lg:p-12 bg-pale-green " id="sport">
  <h1 class="subtitle  slogan text-gradient text-center" style="font-size: 30px; ">Votre remise en forme</h1>

    <div class="visible md:invisible lg:invisible xl:invisible bg-white rounded-3xl shadow-2xl md:flex mt-8 w-full">
      <img src="https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Night Sky" class="md:w-1/3 md:rounded-l-lg rounded-t-3xl  ">
      <div class="p-6">
        <h2 class="font-bold text-xl md:text-3xl mb-2 text-dark-green">Fixez vos Objectifs !</h2>
        <p class="text-dark-green">Disciplinez-vous pour les atteindres.</p>
        <div class="mt-4 md:mt-2 xl:mt-12">
            <a href="../sportBrochure.pdf" target="_blank" class="inline-block bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 font-semibold rounded-lg py-2 px-5 lg:px-6 md:px-3 md:text-sm text-white">En savoir plus</a>
        </div>
      </div>
    </div>


    <div class="invisible md:visible lg:visible xl:visible bg-white rounded-3xl shadow-2xl md:flex mt-10  md:mt-0 lg:mt-0 xl:mt-0 lg:max-w-5xl xl:max-w-5xl  mx-auto md:transform md:-translate-y-24 lg:-translate-y-48 xl:-translate-y-64">
      <div class="  w-full  md:w-full  lg:w-4/5 xl:w-4/5 ">
          <img src="https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Night Sky" class=" md:rounded-tl-3xl rounded-t-3xl md:rounded-t-none">
          <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="Night Sky" class=" md:rounded-bl-3xl  md:rounded-b-none ">
      </div>
      
      <div class=" md:py-3 md:px-4 lg:px-8 lg:py-6 xl:px-12 xl:py-6 p-6  md:flex lg:flex xl:flex justify-between md:space-x-2 lg:space-x-8 xl:space-x-10">
        <div>
          <h2 class="font-bold text-xl lg:text-3xl xl:text-2xl md:text-2xl  text-dark-green">Fixez vos Objectifs !</h2>
          <h4 class="text-dark-green font-bold lg:text-lg xl:text-2xl md:text-base md:mt-4 lg:mt-4 xl:mt-0">Disciplinez-vous pour les atteindres.</h4>
          <p class="text-dark-green text-base md:text-sm lg:text-sm lg:mt-4 xl:text-base xl:mt-8 ">Vous sentez l'envie de changer votre hygiène de vie ?</p>
          <p class="text-dark-green text-base md:text-sm lg:text-sm xl:text-base">Dans cette aventure, le plus dur c'est de commencer. <br>L'idée est de vous amener vers une transition physique et mentale durable.</p>
            <div class="mt-4 md:mt-2 xl:mt-12">
            <a href="../sportBrochure.pdf" target="_blank" class="inline-block bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 font-semibold rounded-lg py-2 px-5 lg:px-6 md:px-3 md:text-sm text-white">En savoir plus</a>
          </div>
        </div>
        <div class="invisible md:visible lg:visible xl:visible">
          <h2 class="font-bold text-xl lg:text-3xl xl:text-2xl md:text-2xl  text-dark-green">Votre coach sportif est disponible pour vous.</h2>
            <p class="text-dark-green md:text-sm lg:text-sm  xl:text-base xl:mt-8 lg:mt-4">Réservez une session sportive dès aujourd'hui !</p>
              <p class="text-dark-green text-base md:text-sm lg:text-sm xl:text-base">Ostéopathe et coach sportive, chaque programme sera <br>entièrement personnalisé à votre corps avec des conseils propre à vos attentes.</p>   
        </div>
      </div>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
  #sport{
    height: 800px;
  }

 @media only screen and (max-width: 28em){
  #sport{
    height: 700px;
  }

}

@media only screen and (min-width:43em) {
  #sport{
    height: 800px;
  }
}

@media only screen and (min-width: 62em){
  #sport{
    height: 800px;
  }
}

@media only screen and (min-width: 82em){
  #sport{
    height: 800px;
  }
}


</style>