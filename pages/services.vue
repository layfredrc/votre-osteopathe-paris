<template>
    <div>
        <!-- <Navbar/> -->
        <Navigation/>
        <Pain/>
        <Overview/>
        <Glossaire/>
        <Timestamps/>
        <Footer/>
    </div>
</template>

<script>




export default {
    components:{
        Navbar: () => import('../components/Navbar'),
        Navigation: () => import('../components/Navigation'),
        Footer: () => import('../components/Footer'),
        Overview: () => import('../components/Overview'),
        Pain: () => import('../components/Pain'),
        Timestamps: () => import('../components/Timestamps'),
        Glossaire: () => import('../components/Glossaire')
    }
}
</script>

<style>

</style>