<template>
  <div>
    <Navbar />
    <Navigation />
    <Hero />
    <Featured />
    <Skills />
    <Partenaires />
    <Drainage />
    <Sport />

    <Gallery />
    <GoogleReviews />
    <InstagramFeed />

    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          hid: "elfsight",
          src: "https://apps.elfsight.com/p/platform.js",
          defer: true
        }
      ]
    };
  },
  mounted() {
    var logo = document.querySelector(".logo");
    console.log(logo);

    var isInViewport = function(elem) {
      var bounding = elem.getBoundingClientRect();
      if (bounding == null) {
        return null;
      }
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    var navigation = document.querySelector(".navigation");

    window.addEventListener(
      "scroll",
      function(e) {
        if (isInViewport(logo)) {
          navigation.style.opacity = 0;
        } else {
          navigation.style.opacity = 1;
        }
        if (
          window.innerHeight <= 448 ||
          document.documentElement.clientWidth <= 448
        ) {
          navigation.style.opacity = 1;
        }
      },
      false
    );

    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline();

    tl.from(".content", {
      y: "-30%",
      opacity: 0,
      duration: 1.5,
      ease: Power3.easeOut
    });

    tl.from(
      ".stagger1",
      {
        opacity: 0,
        y: -50,
        stagger: 0.3,
        duration: 2,
        ease: Power4.easeOut
      },
      "-=1.5"
    );

    gsap.from(".transition1", {
      scrollTrigger: {
        trigger: ".transition1",
        start: "top center"
      },
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1.2
    });

    gsap.from(".transition2", {
      scrollTrigger: {
        trigger: ".transition2",
        start: "top center"
      },
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1.2
    });

    gsap.from(".transition3", {
      scrollTrigger: {
        trigger: ".transition3",
        start: "top center"
      },
      y: 50,
      opacity: 0,
      stagger: 0.6,
      duration: 1.2
    });

    gsap.from(".transition4", {
      scrollTrigger: {
        trigger: ".transition4",
        start: "top center"
      },
      y: 50,
      opacity: 0,
      stagger: 0.6,
      duration: 1.2
    });

    gsap.from(".transition5", {
      scrollTrigger: {
        trigger: ".transition5",
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

<style lang="scss">
.instagram {
  width: 80%;
  padding-left: 60px;
}

.section-avis {
  width: 80%;
  padding-left: 60px;
}

@media only screen and (max-width: 28em) {
  .section-avis {
    /* width: 70vw; */
    padding-left: 10%;
  }

  .instagram {
    /* width: 70vw; */
    padding-left: 0%;
  }
}

@media only screen and (min-width: 43em) {
  .instagram {
    margin-left: 80px;

    padding-left: 0px;
  }

  .section-avis {
    padding-left: 10%;
  }
}

@media only screen and (min-width: 62em) {
  .instagram {
    margin-left: 100px;
    width: 80vw;
    padding-left: 0px;
  }

  .section-avis {
    width: 80vw;

    padding-left: 20%;
  }
}

@media only screen and (min-width: 82em) {
  .instagram {
    width: 80vw;
    margin-left: 160px;
    padding-left: 0px;
  }

  .section-avis {
    width: 80vw;

    padding-left: 20%;
  }
}
</style>
