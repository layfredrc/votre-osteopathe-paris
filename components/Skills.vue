<template>
  <section class="skills">
    <div class="skills-container">
      <h2 class="slogan2">Des soins adaptés pour tous</h2>
      <ul>
        <li class="transition2">
          <div class="icon-container one">
            <img
              data-src="../assets/clients.svg"
              alt="urgence domicile"
              class="lazyload"
            />
          </div>
          <p class="skill-title">
            Urgence Ostéopathe et Consultation à domicile
          </p>
          <p class="skills-desc">
            L’ostéopathie qui s’adapte à votre situation. <br />
            Pour les personnes ne pouvant se déplacer, votre ostéopathe peut se
            déplacer jusqu’à vous avec tout son matériel afin de travailler dans
            les meilleures conditions possibles. <br />
            Tout se passera chez vous comme s’il s’agissait d’une séance
            d’ostéopathie réalisée en cabinet.
          </p>
        </li>
        <li class="transition2">
          <div class="icon-container one">
            <img data-src="../assets/old.svg" alt="clients" class="lazyload" />
          </div>
          <p class="skill-title">Ostéopathie pour tous</p>
          <p class="skills-desc">
            Mal de dos ? Torticolis ? Prothèse douloureuse ? Arthrose ? Troubles
            digestifs ? Accouchement difficile ? Que vous soyez petit ou grand,
            votre ostéopathe à Paris 16 vous accompagne par des techniques et
            manipulations douces afin d’améliorer la mobilité de votre corps, de
            favoriser votre bien-être global et votre autonomie.
          </p>
        </li>
        <li class="transition2">
          <div class="icon-container one">
            <img
              data-src="../assets/fat.svg"
              alt="remise en forme"
              class="lazyload"
            />
          </div>
          <p class="skill-title">Remise en Forme</p>
          <p class="skills-desc">
            Spécialisée dans la remise en forme, votre ostéopathe a effectué un
            double cursus STAPS lui permettant de vous assurer un coaching
            sportif dans le but de vous aider à atteindre vos objectifs ! Son
            massage drainant lymphatique de la Méthode Certifiée Renata França
            en est également le parfait complément.
          </p>
        </li>
        <li class="transition2">
          <div class="icon-container one">
            <img
              data-src="../assets/sportif.svg"
              alt="sportif"
              class="lazyload"
            />
          </div>
          <p class="skill-title">Ostéopathie du Sport</p>
          <p class="skills-desc">
            Que vous soyez sportif amateur ou averti, les soins manuels de
            l’ostéopathie vous accompagnent tout au long de vos parcours en
            favorisant le bon fonctionnement de votre corps.<br />
            Ainsi, vos articulations seront plus libres et vos récupérations
            après effort plus douces. Le cabinet d’ostéopathie à Paris
            intervient également à titre préventif et à titre curatif pour
            soigner les blessures.
          </p>
        </li>

        <li class="transition2">
          <div class="icon-container two">
            <img
              data-src="../assets/pregnant.svg"
              alt="femme enceinte"
              class="lazyload"
            />
          </div>
          <p class="skill-title">Ostéopathie de la femme enceinte</p>
          <p class="skills-desc">
            Votre ostéopathe peut agir positivement sur strong les souffrances
            de la maman et du bébé en gestation. Douleurs lombaires , douleurs
            pelviennes , pubalgies, sciatiques, maux de tête, changements
            comportementaux, problèmes de circulation sanguine, troubles
            digestifs, nausées, vomissements.
          </p>
        </li>

        <li class="transition2">
          <div class="icon-container three">
            <img
              data-src="../assets/services.svg"
              alt="services"
              class="lazyload"
            />
          </div>
          <p class="skill-title">Ostéopathie pédiatrique</p>
          <p class="skills-desc">
            Votre nourrisson pleure et paraît inconsolable ? Son sommeil est
            fortement perturbé ? Il manifeste des trouble du comportement ?

            <br />
            Il régurgite systématiquement après la tétée ? Il se tord de
            douleurs en raison d’une colique ou d’une constipation ? Il se
            cambre en arrière ? Il regarde toujours du même côté ? Votre
            ostéopathe à Paris a été formé pour vous aider.
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.skills {
  background: #2d4d44;
}

.skills-container ul li {
  background: white;
  padding: 2em;
  border-radius: 1em;
  margin-bottom: 1em;
}

.skills-container ul li .icon-container {
  height: 100px;
  display: -ms-grid;
  display: grid;
  place-content: center;
  margin: 0 auto;
}

.skills-container ul li .icon-container.one {
  width: 150px;
}

.skills-container ul li .icon-container.two {
  width: 100px;
}

.skills-container ul li .icon-container.three {
  width: 200px;
}

.skills-container ul li .skill-title {
  font-weight: bold;
  font-size: 22px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.skills-container ul li .skills-desc {
  margin-bottom: 2em;
  font-size: 18px;
  width: auto;
}

.skills-desc {
  color: #3b3b3b;
  margin-bottom: 3em;
  font-size: 0.9em;
  line-height: 1.8em;
  font-weight: 500;
}

.slogan2 {
  color: white;
  font-size: 40px;
  margin-bottom: 20px;
}

@media only screen and (max-width: 28em) {
}

@media only screen and (min-width: 43em) {
}

@media only screen and (min-width: 62em) {
  .skills {
    margin-top: -5em;
    margin-bottom: -7em;
    padding-top: 7em;
  }
  .skills-container ul {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (auto) [3];
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
    grid-gap: 1.5em;
  }
}

@media only screen and (min-width: 82em) {
  .skills {
    padding-left: 10em;
    padding-bottom: 10em;
    padding-right: 10em;
  }
}
</style>
