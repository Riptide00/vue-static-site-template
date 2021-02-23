<template>
    <main id="main">
        <contactform/>
        <div class="padding"></div>
    </main>
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
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>