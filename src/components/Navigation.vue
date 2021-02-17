<template>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <form action="">
            <input type="text" placeholder="Email">
            <input type="text" placeholder="Password">
            <button>Login</button>
            <a href="/register">Register</a>
        </form>
    </nav>
</template>

<style scoped lang="scss">
    nav {
        min-width: 820px;
        height: 35px;
        padding: 5px;

        background-color: var(--main-color);
        filter: invert(5%) hue-rotate(0.25turn);

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        form {
            width: 420px;

            a {
                mix-blend-mode: difference;
                filter: hue-rotate(0.10turn);
                text-decoration: none;
                color: $color-grey-2;
                transition: filter 0.3s ease-in-out;

                &:hover {
                    filter: hue-rotate(0.80turn) brightness(70%);
                }
            }

            input {
                margin-right: 5px;
            }

            button {
                margin-right: 5px;
                border: none;
                background-color: $color-grey-5;
                mix-blend-mode: difference;
                height: 25px;
                transition: color 0.3s ease-in-out;
                color: $color-grey-1;

                &:hover {
                    color: $color-grey-1;
                    background-color: var($color-grey-3);
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

                    color: $color-grey-3;
                    mix-blend-mode: difference;

                    transition: font-size 0.3s ease-in-out;

                    &:hover {
                        font-size: 1.1em;
                        color: $color-grey-1;
                        mix-blend-mode: difference;
                    }
                }
            }
        }
    }
</style>
