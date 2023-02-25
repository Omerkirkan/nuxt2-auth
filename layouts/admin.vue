<template>
    <div>

        <div class="sign-out-button">
            <button @click="signOut()"> Sign Out </button>
        </div>

        <Nuxt />
    </div>
</template>
<script>
export default {
    name: 'AdminLayout',
    middleware: ['session-control', 'auth'],

    methods: {
        signOut() {
            this.$store.dispatch('authSignOut').then(() => {
                this.$router.push('/auth/signin')
            })
        }
    }
}
</script>
<style scoped>

.sign-out-button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 1rem;
}

</style>