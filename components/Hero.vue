<template>
  <div class="hero">
    <div class="content">
      <h1 class="stagger1 slogan">
        Votre Ostéopathe<br />
        à Paris 16ème
      </h1>
      <div class="meet stagger1">
        <span>👇</span>
        <p>Patricia Chung</p>
      </div>
      <div class="hero-bouton">
        <a
          href="https://www.doctolib.fr/osteopathe/paris/patricia-chung"
          class="btn btn--green btn--animated mobile"
          target="_blank"
          rel="noopener"
          >Prendre un RDV</a
        >
        <nuxt-link
          to="/services"
          class="btn btn--beige btn--animated mobile-btn-beige"
          >Découvrir</nuxt-link
        >
      </div>
      <svg
        width="40"
        height="77"
        viewBox="0 0 70 126"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="stagger1 scroll"
      >
        <rect
          x="4.5"
          y="4.5"
          width="61"
          height="117"
          rx="30.5"
          stroke="white"
          stroke-width="9"
        />
        <ellipse
          cx="35"
          cy="36.5"
          rx="17"
          ry="18.5"
          fill="white"
          class="cercle"
          transform="translate(0 0)"
        />
      </svg>
    </div>

    <div class="right">
      <nuxt-link to="/services#douleurs"
        ><img
          data-src="../assets/mosaique.png"
          alt="mosaique"
          class="mosaique lazyload"
      /></nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$color-white: #fff;
$color-black: #000;
$color-primary-dark: #28b485;
$color-grey-dark: #777;
$btnBeige: #f09d6d;

.hero {
  background: #ced5c5;
  color: white;
  display: -ms-grid;
  display: grid;
  text-align: center;
  padding: 4em;
}

.meet {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 auto;
  width: 200px;
  font-size: 18px;
  font-weight: bold;
  color: #ff64cb;

  & span {
    margin-top: 1em;
    margin-right: 0.5em;
  }
}

.hero-bouton {
  margin-top: 20px;
}

.mobile {
  margin-bottom: 30px;
}

.mobile-btn-beige {
  margin-right: 40px;
  margin-bottom: 30px;
}
.scroll {
  margin-left: 180px;
  display: none;
}

.slogan {
  color: white;
  font-size: 36px;
  font-weight: bold;
  /* text-transform: uppercase; */
}

.cercle {
  animation: circleAnim 1s infinite alternate-reverse;
}

@-webkit-keyframes circleAnim {
  from {
    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
    z-index: 5;
  }
  to {
    -webkit-transform: translate(0px, 50px);
    transform: translate(0px, 50px);
    z-index: 5;
  }
}

@keyframes circleAnim {
  from {
    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
    z-index: 5;
  }
  to {
    -webkit-transform: translate(0px, 50px);
    transform: translate(0px, 50px);
    z-index: 5;
  }
}

.btn {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;

  &,
  &:link,
  &:visited {
    text-decoration: none;
    padding: 0.9rem 2.5rem;
    display: inline-block;
    border-radius: 30rem;
    transition: all 0.2s;
    position: relative;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    letter-spacing: 1.25%;
    border: none;
    cursor: pointer;
    height: 50px;

    transform: translateY(-0.9rem);
  }

  &:not(:first-child) {
    margin-left: 2.5rem;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  &:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  &:active:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 100px;
    transition: all 0.4s;
    background-color: --bgColor;
  }

  &--animated {
    animation: movesInBottom 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
  }

  &--white {
    background-color: $color-white;
    color: $color-grey-dark;

    &::after {
      background-color: $color-white;
    }
  }

  &--green {
    background-color: $color-primary-dark;
    color: $color-white;

    &::after {
      background-color: $color-primary-dark;
    }
  }
  &--beige {
    background-color: $btnBeige;
    color: $color-white;

    &::after {
      background-color: $btnBeige;
    }
  }

  .mosaique {
    transform: translate(0px, 0px);
    width: 500px;
  }
}

@media only screen and (max-width: 28em) {
  header nav ul {
    display: none;
  }

  .mosaique {
    transform: translate(0px, 0px);
  }

  .scroll {
    display: none;
  }
  .slogan {
    font-size: 36px;
  }
}

@media only screen and (min-width: 43em) {
  .hero {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 66% auto;
    grid-template-columns: 66% auto;

    & .content {
      text-align: left;
    }
  }
  .scroll {
    display: none;
  }

  .mosaique {
    width: 700px !important;
  }
  .slogan {
    font-size: 36px;
  }

  .meet {
    margin: unset;
    margin-top: 20px;
    & span {
      transform: translateY(-10px);
    }
  }

  .hero-bouton {
    margin-left: 0px;
    display: flex;
  }

  .btn {
    font-size: 14px !important;
    &,
    &:link,
    &:visited {
      padding: 0.8rem 1.5rem;
    }
  }
}

@media only screen and (min-width: 63em) {
  .hero {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 66% auto;
    grid-template-columns: 66% auto;
    background: unset;
    padding: 0;
    width: unset;
    & .content {
      background: #b4cdbf;
      text-align: left;
      padding: 6em 8em 8em 6em;
    }
  }
  .scroll {
    display: block;
    margin-left: 0px;
  }

  .slogan {
    font-size: 40px;
  }

  .mosaique {
    width: 500px;
    transform: translate(-170px, 35px) !important;
  }
  .meet {
    margin: unset;
    margin-top: 20px;
    & span {
      transform: translateY(-15px);
    }
  }

  .hero-bouton {
    margin-left: 0px;
  }

  .btn {
    font-size: 16px !important;
    &,
    &:link,
    &:visited {
      padding: 0.8rem 1.6rem;
    }
  }
}

@media only screen and (min-width: 82em) {
  .hero {
    margin-bottom: -80px;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 66% auto;
    grid-template-columns: 66% auto;
    background: unset;
    padding: 0;
    width: unset;

    & .content {
      background: #b4cdbf;
      padding: 6em 8em 6em 10em;
      text-align: left;
    }

    & .slogan {
      font-size: 56px;
    }

    & .meet {
      margin: unset;
      margin-top: 20px;
      font-size: 20px;

      & span {
        transform: translateY(-15px);
      }
    }

    & .mosaique {
      width: 700px;
      transform: translate(-225px, 25px) !important;
    }

    &-img {
      position: relative;
    }

    & .scroll {
      display: block;
      margin-left: 0px;
    }

    & .hero-bouton {
      margin-left: 0px;
    }
  }

  .btn {
    font-size: 16px !important;
    &,
    &:link,
    &:visited {
      padding: 0.9rem 2.5rem;
    }
  }
}
</style>
