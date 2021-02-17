<template>
  <div>
    <header-element></header-element>
    <navigation-element></navigation-element>
    <content-element></content-element>
    <footer-element></footer-element>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    'header-element': Header,
    'navigation-element': Navigation,
    'content-element': Content,
    'footer-element': Footer
  }
}
</script>

<style lang="scss">
  :root {
    --main-color: rgb(255, 191, 223);
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');

  html {
    font-family: 'Lato', sans-serif;
    font-size: 15px;
  }

</style>
