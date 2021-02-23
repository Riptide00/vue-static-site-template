<template>
    <footer id="footer">
        <p></p>
    </footer>
</template>

<script>
    export default {
        mounted() {
            this.$nextTick(() => {
                window.addEventListener('resize', this.onResize);
            })
        },

        beforeDestroy() { 
            window.removeEventListener('resize', this.onResize); 
        },

        // TODO: Move "main"-element logic to the main component
        methods: {  
            onResize() {
                console.log("height: " + window.innerHeight + ", width: " + window.innerWidth);
                if (window.innerWidth < 480) {
                    if (window.innerHeight < 400) {
                        document.getElementById('footer').style.height = 0;
                        document.getElementById('main').style.height = '100%';
                    }
                    else {
                        document.getElementById('footer').style.height = '50px';
                        document.getElementById('main').style.height = 'calc(100vh - 286px)';
                    }
                }
                else {
                    document.getElementById('footer').style.height = '150px';
                    document.getElementById('main').style.height = 'calc(100vh - 435px)';
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    footer {
        background-color: var(--main-color);
        height: 150px;
        width: 100%;
    }

    @media only screen and (max-width: 480px) {
        footer {
            height: 50px;
        }
    }
</style>
