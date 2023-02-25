<template>
    <div>
        <SignIn />
    </div>
</template>
<script>

export default {
    name: "IndexPage",
    components: {
        SignIn: () => import('~/components/SignIn.vue')
    }
}

</script>