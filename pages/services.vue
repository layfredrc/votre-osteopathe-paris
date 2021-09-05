<template>
  <div>
    <!-- <Navbar/> -->
    <Navigation />
    <Pain />
    <Overview />
    <Glossaire />
    <Timestamps />
    <Footer />
  </div>
</template>

<script>
export default {
  head: {
    title: "Des soins adaptés pour tous | Patricia Chung",
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
          "L’ostéopathie pour prendre soin de vous. Les zones principalement touchées sont le plus souvent le cou et le dos, d’une manière générale les articulations et diverses douleurs mécaniques."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },

      {
        hid: "canonical",
        rel: "canonical",
        href: "https://www.votreosteopatheparis16.com/services/"
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
          "L’ostéopathie pour prendre soin de vous. Les zones principalement touchées sont le plus souvent le cou et le dos, d’une manière générale les articulations et diverses douleurs mécaniques."
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content:
          "L’ostéopathie pour prendre soin de vous. Les zones principalement touchées sont le plus souvent le cou et le dos, d’une manière générale les articulations et diverses douleurs mécaniques."
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content:
          "L’ostéopathie pour prendre soin de vous. Les zones principalement touchées sont le plus souvent le cou et le dos, d’une manière générale les articulations et diverses douleurs mécaniques."
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "L’ostéopathie pour prendre soin de vous. Les zones principalement touchées sont le plus souvent le cou et le dos, d’une manière générale les articulations et diverses douleurs mécaniques."
      },

      { hid: "og:type", name: "og:type", content: "website" },
      {
        hid: "og:url",
        name: "og:url",
        content: "https://www.votreosteopatheparis16.com/services/"
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Des soins adaptés pour tous | Patricia Chung"
      },
      {
        hid: "og:site_name",
        name: "og:site_name",
        content: "Des soins adaptés pour tous | Patricia Chung"
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "L’ostéopathie pour prendre soin de vous. Les zones principalement touchées sont le plus souvent le cou et le dos, d’une manière générale les articulations et diverses douleurs mécaniques."
      },
      { hid: "og:locale", name: "og:locale", content: "fr" },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://votreosteopatheparis16.com/favicon.ico"
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "Des soins adaptés pour tous | Patricia Chung"
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
