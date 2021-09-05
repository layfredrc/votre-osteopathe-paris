<template>
  <section class="featured" id="accessibility">
    <div class="left">
      <div class="inner transition1">
        <h2 class="subtitle">Accessibilité</h2>
        <h3 class="featured-title">
          Pôle de Santé Murat, <br />89 Boulevard Murat 75016 Paris
        </h3>
        <ul class="featured-desc">
          <li>
            <img
              src="../assets/metro.jpg"
              class="metro"
              alt="metro 9 Porte de Saint Cloud"
            />
            <span class="caption">
              <strong>Métro </strong><br />Porte de Saint Cloud (ligne 9)
            </span>
          </li>
          <li>
            <img
              src="../assets/rer_c.png"
              class="rer"
              alt="RER C Pont du Garigliano"
            />
            <span class="caption"
              ><strong> RER </strong> <br />
              Pont Du Garigliano (ligne C)
            </span>
          </li>
          <li>
            <img
              src="../assets/Capture.PNG"
              class="rer"
              alt="Bus 62 Porte de Saint Cloud"
            />

            <span class="caption">
              <strong>Bus</strong>
              <br />
              Porte de Saint Cloud - Murat
            </span>
          </li>
          <li>
            <img src="../assets/parking.jpg" class="rer" alt="Parking" />
            <span class="caption">
              <strong>Parking</strong>
              <br />
              42 Rue de La Tourelle, Paris
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="maps-container">
      <iframe
        data-src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10503.652010188887!2d2.2565078!3d48.8407981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ad31fa4a1c8928e!2sOst%C3%A9opathe%20Paris%2016%20-%20Patricia%20Chung%20-%20Porte%20Saint%20Cloud%2C%20B%C3%A9b%C3%A9%2C%20enfants%2C%20adulte%2C%20femme%20enceinte%2C%20sportif!5e0!3m2!1sfr!2sfr!4v1601036448621!5m2!1sfr!2sfr"
        width=""
        height=""
        frameborder="0"
        style="border: 0; border-radius: 30px"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
        class="right transition1 lazyload"
        title="google maps"
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.featured {
  position: relative;

  & ul {
    margin-left: 20px;
  }

  & .metro {
    width: 50px;
    height: 100%;
    transform: translate(20px, 60px);
  }

  & .rer {
    width: 50px;
    height: 50%;
    transform: translate(20px, 55px);
  }

  & .caption {
    display: inline-block;
    margin-left: 10px;

    font-size: 18px;
  }

  & .maps-container {
    /* overflow: hidden; */
    padding-bottom: 56.25%;
    position: relative;
    height: 0;
    z-index: 5;
  }

  & iframe {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 5;
  }

  &:before {
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #d8dfd7;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
/* TYPOGRAPHIE */

.subtitle {
  text-transform: uppercase;
  font-weight: bold;
  color: #28b485;
  letter-spacing: 0.2em;
  font-size: 22px;
}

.featured-title {
  color: black;
  font-weight: bold;
  font-size: 1.3em;
  margin-top: 0.4em;
  display: block;
}

.featured-desc {
  color: #3b3b3b;
  margin-bottom: 3em;
  font-size: 0.9em;
  line-height: 1.8em;
  font-weight: 500;
  margin-top: -3em;
}

@media only screen and (max-width: 28em) {
  .featured {
    & ul {
      margin-top: 0px;
      margin-left: 0px;
    }

    & .metro {
      width: 40px;
      transform: translate(-20px, 60px);
    }

    & .rer {
      width: 40px;
      transform: translate(-20px, 50px);
    }

    &:before {
      height: 100px;
      width: 100px;
      transform: translate(15px, 30px);
    }
  }
}

@media only screen and (min-width: 43em) {
}

@media only screen and (min-width: 62em) {
  .featured {
    margin-top: 30px;
    display: grid;
    grid-template-columns: 40% auto;
    text-align: left;

    & ul {
      margin-left: 60px;
    }
    &:before {
      transform: translate(20px, -10px);
    }

    & iframe {
      height: 300px;
      height: 500px;
      transform: translateY(20px);
    }

    & .rer {
      transform: translate(-60px, 40px);
    }

    & .metro {
      transform: translate(-60px, 60px);
    }
  }

  .left,
  .portfolio-left {
    margin-left: 0px;
    display: -ms-grid;
    display: grid;
    place-content: center;
  }

  .right {
    margin-left: 1em;
    margin-top: 1em;
    z-index: 5;
  }
}

@media only screen and (min-width: 82em) {
  .featured {
    margin-top: 90px;
  }
}

@media only screen and (min-width: 92em) {
  .featured {
    margin-top: 100px;
    display: grid;
    grid-template-columns: 40% auto;
    text-align: left;

    & ul {
      margin-left: 50px;
    }
    &:before {
      transform: translate(90px, 0px);
    }

    & iframe {
      width: 800px;
      height: 550px;
      transform: translateY(-10px);
      z-index: 100;
    }

    & .metro {
      width: 50px;
      transform: translate(-50px, 50px);
    }
    & .rer {
      width: 50px;
      transform: translate(-50px, 40px);
    }
  }

  .left {
    margin-left: 100px;
    display: -ms-grid;
    display: grid;
    place-content: center;
  }

  .right {
    margin-left: 3em;
    margin-top: 1em;
    z-index: 5;
  }

  .subtitle {
    text-transform: uppercase;
    font-weight: bold;
    color: #28b485;
    letter-spacing: 0.2em;
    font-size: 22px;
  }

  .featured-title {
    color: black;
    font-weight: bold;
    font-size: 1.6em;
    margin-top: 0.4em;
    display: block;
  }

  .featured-desc {
    color: #3b3b3b;
    margin-bottom: 3em;
    font-size: 0.9em;
    line-height: 1.8em;
    font-weight: 500;
    margin-top: -3em;
  }
}
</style>
