<template>
    <main-element></main-element>
</template>

<script>
  import Home from './Home.vue'
  import About from './About.vue'
  import Contact from './Contact.vue'
  import NotFound from './NotFound.vue'

   const routes = {
    '/': Home,
    '/home': Home,
    '/about': About,
    '/contact': Contact
  }

  let content;
  const currentRoute = window.location.pathname;
  console.log(`Routing ${currentRoute}`)
  if (routes[currentRoute]) {
    content = routes[currentRoute];
  } else {
    content = NotFound;
  }

  export default {
    components: {
      'main-element': content,
    }
  }
</script>
