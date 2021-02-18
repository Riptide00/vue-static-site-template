<template>
    <form name="contact" netlify>
        <label>Name <input type="text" name="name" placeholder="Full name"/></label>
        <label>Email <input type="email" name="email" placeholder="Email"/></label>
        <textarea type="text" name="comment" cols="30" rows="10" placeholder="Leave a comment for us..."></textarea>
        <button type="submit">Send</button>
        <input type="hidden" name="contact" value="contact" />
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