<template>
    <div>
        <HomeNavBar />
        <Nuxt />
    </div>
</template>
<script>
export default {
    name: "DefaultLayout",
    components: {
        HomeNavBar: () => import('~/components/HomeNavBar.vue')
    }
}

</script>