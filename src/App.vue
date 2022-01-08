<template>
  <div>
    <Navbar />
    <div class="container">
    <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Roboto&display=swap');
html, body {
  font-family: 'Poppins', sans-serif;
}
</style>
