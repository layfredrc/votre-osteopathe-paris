<template>
  <section class="partenaires">
    <h2 class=" subtitle slogan text-gradient" style="font-size: 28px;">
      En partenariat avec
    </h2>
    <div class="partenaire-container transition3">
      <img data-src="../assets/aqualoft1.svg" alt="aqualoft" class="lazyload" />
      <img
        data-src="../assets/hbp1.svg"
        alt="healthy body program"
        class="lazyload"
      />
      <img
        data-src="../assets/casino1.svg"
        alt="circus club paris"
        class="lazyload"
      />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.partenaires {
  background-color: #d8dfd7;

  & img {
    width: 150px;
    margin: 20px;
    display: inline-block;
  }
}

.text-gradient {
  background-image: linear-gradient(to right, #5c258d, #28b485);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@media only screen and (max-width: 28em) {
}

@media only screen and (min-width: 43em) {
  .partenaires {
    & img {
      width: 150px;
      margin: 20px;
      display: inline-block;
    }
  }
}

@media only screen and (min-width: 62em) {
  .partenaires img {
    width: 180px;
    margin: 20px;
  }
  .partenaire-container {
    display: flex;
    justify-content: space-evenly;
  }
}
@media only screen and (min-width: 82em) {
}
</style>
