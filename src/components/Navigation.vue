<template>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <div v-if="!loggedIn" class="login-container">
            <a v-on:click="openModal('login')" href="#" class="button">Login</a>
            <a v-on:click="openModal('signup')" href="#">Signup</a>
        </div>
        <div v-else class="login-container">
            <a v-on:click="logout()" href="#" class="button">Logout</a>
        </div>
    </nav>
</template>

<script>
    const netlifyIdentity = require('netlify-identity-widget');

    let startupState = 0;
    netlifyIdentity.on('init', (user) => {
        if (user) {
            startupState = 1;
        }
    });

    netlifyIdentity.init()
    
    export default {
        data() {
            return {
                loggedIn: startupState,
            };
        },
        methods: {
            openModal: function (window) {
                // catch options here and make it foolproof
                if (window === 'login' || window =="signup") netlifyIdentity.open(window);
                else netlifyIdentity.open();
                // register eventhandler
                netlifyIdentity.on('login', () => {
                    this.loggedIn = 1;
                });
            },
            logout: function () {
                netlifyIdentity.logout().then(this.loggedIn = 0);
            }
        }
    }
</script>

<style scoped lang="scss">
    nav {
        width: calc(100vw + 10px);
        margin-left: -5px;
        height: 35px;
        padding: 5px;

        box-shadow: inset 0 0 5px #000000;
        background-color: var(--main-color);
        filter: invert(5%) hue-rotate(0.25turn);

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .login-container{
            display: flex;
            flex-direction: row;
            justify-content: center;
            a {
                text-decoration: none;
                color: $color-grey-4;
                mix-blend-mode: difference;
                align-self: center;
                margin-right: 5px;
                &.button{
                    color: #000;
                    height: 25px;
                    padding: 5px;
                    background-color: $color-grey-4;
                    border-radius: 2px;
                    
                }
                &:hover {
                    filter: hue-rotate(0.80turn) brightness(70%);
                }
            }
        }

        ul {
            width: 400px;
            height: 100%;

            display: flex;
            flex-direction: row;
            justify-content: space-evenly;

            li {
                width: 20%;
                height: 100%;

                display: flex;
                flex-direction: column;
                justify-content: center;

                a {
                    text-align: center;
                    text-decoration: none;

                    color: $color-grey-1;
                    mix-blend-mode: difference;

                    transition: font-size 0.3s ease-in-out;

                    &:hover {
                        font-size: 1.1em;
                        color: $color-grey-3;
                        mix-blend-mode: difference;
                    }
                }
            }
        }
    }
</style>
