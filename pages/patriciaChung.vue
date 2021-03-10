<template>
  <div>
      <ProfileCard/>
      <Changelog/>
      <Navigation/>
      <Footer/>
  </div>
</template>

<script>


export default {
    components:{
        Navigation: () => import('../components/Navigation'),
        ProfileCard: () => import('../components/ProfileCard'),
        Changelog: () => import('../components/Changelog'),
        Footer: () => import('../components/Footer')
    }
}
</script>

<style>

</style>