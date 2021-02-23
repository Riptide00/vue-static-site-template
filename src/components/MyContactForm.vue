<template>
    <form 
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
    >
        <input type="hidden" name="form-name" value="contact" />
        <label>Name <input style="mail" type="text" name="name" placeholder="Full name"/></label>
        <label>Email <input type="email" name="email" placeholder="Email"/></label>
        <textarea type="text" name="comment" cols="30" rows="10" placeholder="Leave a comment for us..."></textarea>
        <button type="submit">Send</button>
    </form>
</template>

<style lang="scss" scoped>
    form {
        display: flex;
        flex-direction: column;
        width: 90%;
        max-width: 400px;
        label {
            margin-bottom: 5px;
            height: 40px;
            text-align: right;
            max-width: 400px;

            input {
                width: 75%;
                max-width: 350px;
                height: 25px;
                margin-left: 15px;
                border-radius: 4px;
                padding: 3px;
                border: 2px solid #E9EBEB;
                &::placeholder{
                    color: #9c9b9b;
                    font-weight: bold;
                }
            }
        }

        textarea {
            font-family: 'Lato', sans-serif;
            resize: none;
            padding: 3px;
            border-radius: 4px;
            border: 2px solid #E9EBEB;
            &::placeholder{
                color: #9c9b9b;
                font-weight: bold;
            }
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