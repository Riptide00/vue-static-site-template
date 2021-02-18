<template>
    <div>
        <contactform/>
    </div>
</template>

<script>
    import ContactForm from './MyContactForm.vue';

    export default {
        components: {
            'contactform': ContactForm,
        }
    }
</script>

<style lang="scss" scoped>
    div {
        width: 100%;
        height: calc(100vh - 300px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>