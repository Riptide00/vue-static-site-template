<template>
    <header>
        <a href="/home">
            <h1> Company name </h1>
            <div class="mask"></div>
            <div class="border"></div>
            <p>An inspiring tagline</p>
        </a>
    </header>
</template>

<script>
</script>

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
            width: 500px;
        }

        h1 {
            color: $color-grey-3;
            mix-blend-mode: difference;
            text-align: center;
            width: auto;
            font-size: 3em;
            padding: 20px;
            font-family: 'Monoton', cursive;
            width: 499px;
        }

        p {
            font-family: 'Playfair Display', serif;
            color: $color-grey-4;
            mix-blend-mode: difference;
            width: 200px;
            height: 30px;
            margin-top: -25px;
            text-align: center;
            align-self: center;
            z-index: 3;
        }

        .mask {
            margin-top: -15px;
            background-color: var(--main-color);
            height: 30px;
            width: 150px;
            align-self: center;
            z-index: 2;
        }

        .border {
            height: 2px;
            width: 350px;
            background-color: $color-grey-3;
            mix-blend-mode: difference;
            border-radius: 100px;
            margin: auto;
            margin-top: -11px;
        }
    }
</style>
