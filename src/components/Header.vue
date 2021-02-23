<template>
    <header>
        <a href="/home">
            <h1> Company name </h1>
            <div class="tagline">
                <div class="border"></div>
                <div class="mask"></div>
                <p>An inspiring tagline</p>
            </div>
        </a>
    </header>
</template>

<style scoped lang="scss">
    header {
        height: 150px;
        background-color: var(--main-color);
        padding: 20px;
        display: flex;
        justify-content: center;

        a {
            text-decoration: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            max-width: 500px;
        }

        h1 {
            color: $color-grey-3;
            mix-blend-mode: difference;
            font-size: 3em;
            font-family: 'Monoton', cursive;
            text-align: center;
        }

        .tagline {
            margin-top: 25px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }


        p {
            margin-top: -9px;
            position: absolute;
            font-family: 'Playfair Display', serif;
            color: $color-grey-4;
            mix-blend-mode: difference;
            z-index: 3;
        }

        .mask {
            position: absolute;
            background-color: var(--main-color);
            height: 30px;
            width: 150px;
            z-index: 2;
        }

        .border {
            position: absolute;
            height: 2px;
            width: 350px;
            background-color: $color-grey-4;
            mix-blend-mode: difference;
            border-radius: 100px;
            margin: auto;
            margin-top: -7px;
        }
    }

    @media only screen and (max-width: 480px) {
        header {
            height: 100px;
            h1 {
                font-size: 2em;
            }

            .border {
                width: 250px;  
                margin-top: -20px;
            }

            .mask {
                margin-top: -20px;
            }

            p {
                margin-top: -23px;
            }
        }
    }
</style>
