<template>
  <div id="app">
    <h1>Person Greeter</h1>
    <img alt="Vue logo" src="@/assets/logo.png">
    <br>
    <label for="name">Name</label>
    <input type="text" id="name" name="name" v-model="name">
    <br>
    <PersonGreeter :personName="this.name"/>
  </div>
</template>

<script>
import PersonGreeter from './components/PersonGreeter.vue';

export default {
  name: 'App',
  data() {
      return {
        name: ""
      }
    },
  components: {
    PersonGreeter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>