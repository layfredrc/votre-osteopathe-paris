<template>
  <div>
    <ProfileCard />
    <Changelog />
    <Navigation />
    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    title: "Votre Ostéopathe | Patricia Chung",
    htmlAttrs: {
      lang: "fr"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Ostéopathe agréée, Patricia Chung vous accueille au sein du Pôle de Santé Murat situé dans le 16e arrondissement de Paris.Elle accueille tous types de patients du nourrisson, enfant, adulte, à la personne âgée, la femme enceinte et le sportif. Son approche thérapeutique vise à répondre aux besoins spécifiques des patients, en personnalisant chaque traitement afin d'obtenir un résultat efficace sur le long terme."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

      {
        hid: "canonical",
        rel: "canonical",
        href: "https://votreosteopatheparis16.netlify.app/patriciachung/"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content:
          "Ostéopathe agréée, Patricia Chung vous accueille au sein du Pôle de Santé Murat situé dans le 16e arrondissement de Paris.Elle accueille tous types de patients du nourrisson, enfant, adulte, à la personne âgée, la femme enceinte et le sportif. Son approche thérapeutique vise à répondre aux besoins spécifiques des patients, en personnalisant chaque traitement afin d'obtenir un résultat efficace sur le long terme."
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content:
          "Ostéopathe agréée, Patricia Chung vous accueille au sein du Pôle de Santé Murat situé dans le 16e arrondissement de Paris.Elle accueille tous types de patients du nourrisson, enfant, adulte, à la personne âgée, la femme enceinte et le sportif. Son approche thérapeutique vise à répondre aux besoins spécifiques des patients, en personnalisant chaque traitement afin d'obtenir un résultat efficace sur le long terme."
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content:
          "Ostéopathe agréée, Patricia Chung vous accueille au sein du Pôle de Santé Murat situé dans le 16e arrondissement de Paris.Elle accueille tous types de patients du nourrisson, enfant, adulte, à la personne âgée, la femme enceinte et le sportif. Son approche thérapeutique vise à répondre aux besoins spécifiques des patients, en personnalisant chaque traitement afin d'obtenir un résultat efficace sur le long terme."
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Ostéopathe agréée, Patricia Chung vous accueille au sein du Pôle de Santé Murat situé dans le 16e arrondissement de Paris.Elle accueille tous types de patients du nourrisson, enfant, adulte, à la personne âgée, la femme enceinte et le sportif. Son approche thérapeutique vise à répondre aux besoins spécifiques des patients, en personnalisant chaque traitement afin d'obtenir un résultat efficace sur le long terme."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "osteopathe, paris, paris 16eme, 16, douleurs, drainage lymphatique, femme enceinte, nourisson, sportifs, nutrition, urgence, soins, cabinet"
      },
      { hid: "og:type", name: "og:type", content: "website" },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://votreosteopatheparis16.netlify.app/patriciachung"
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Votre Ostéopathe Paris 16ème | Patricia Chung"
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "Votre Ostéopathe Paris 16ème | Patricia Chung"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "Ostéopathe agréée, Patricia Chung vous accueille au sein du Pôle de Santé Murat situé dans le 16e arrondissement de Paris.Elle accueille tous types de patients du nourrisson, enfant, adulte, à la personne âgée, la femme enceinte et le sportif. Son approche thérapeutique vise à répondre aux besoins spécifiques des patients, en personnalisant chaque traitement afin d'obtenir un résultat efficace sur le long terme."
      },
      { hid: "og:locale", name: "og:locale", content: "fr" },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://votreosteopatheparis16.netlify.app/favicon.ico"
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "Votre Ostéopathe Paris 16ème | Patricia Chung"
      },
      {
        hid: "google-site-verification",
        name: "google-site-verification",
        content: process.env.GOOGLE_SITE_VERIFICATION_TOKEN
      }
    ]
  }
};
</script>

<style></style>
