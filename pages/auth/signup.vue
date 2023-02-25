<template>
    <div>
        <SignUp />
    </div>
</template>
<script>
export default {
    name: "IndexPage",
    components: {
        SignUp: () => import('~/components/SignUp.vue')
    }
}

</script>