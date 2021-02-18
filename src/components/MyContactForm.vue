<template>
    <form netlify>
        <label>Name <input type="text" name="name" placeholder="Full name"/></label>
        <label>Email <input type="email" name="email" placeholder="Email"/></label>
        <textarea name="comment" cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
    </form>
</template>

<style lang="scss" scoped>
    form {
        display: flex;
        flex-direction: column;
        width: 400px;
        label {
            margin-bottom: 5px;
            height: 40px;
            text-align: right;
            width: 400px;

            input {
                width: 350px;
                height: 25px;
                margin-right: 1px;
            }
        }

        textarea {
            resize: none;
        }

        button {
            margin-top: 10px;
            color: #FFFFFF;
            background-color: #1876f1;
            border: none;
            height: 30px;
            border-radius: 90px;
            &:hover {
                filter: hue-rotate(0.1turn);
            }
        }
    }
</style>