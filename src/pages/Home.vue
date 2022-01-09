<template>
  <div>
    <div>
      <b-jumbotron text-variant="white" fluid header="I'm Jade Kelly" lead="Creative Computing student at IADT"
        style="background-image: url(https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80); background-size: cover;">
        <p>This is a portfolio of my projects from college</p>
        <b-button variant="info" :to="{name: 'projects'}">My Projects</b-button>
        <br>
        <br>
        <p class="float-right">Photo by <a
        href="https://unsplash.com/@nateggrant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nate
        Grant</a> on <a
        href="https://unsplash.com/s/photos/coding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    </p>
      </b-jumbotron>
      <b-row align-h="center">
      <b-col>
        <div style="text-align: center;">
      <h1 style="background-color:#343a40; color: white;">Contact</h1>
      <b-link href="https://ie.linkedin.com/in/jade-kelly-0b526b209" target="_blank">LinkedIn</b-link>
    </div>
      </b-col>
      <b-col>
        <div style="text-align: center;">
      <h1 style="background-color:#343a40; color: white;">Preview</h1>
        <b-carousel
        id="carousel-1"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      img-blank-color
      style="text-shadow: 3px 3px 4px #17a2b8;"
      >
          <b-carousel-slide v-for="project in projects" :key="project.id"
          :caption="project.title"
          :img-src="require('@/assets/images/' + project.image)">
          </b-carousel-slide>
        </b-carousel>
        </div>
      </b-col>
    </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    components: {},
    data() {
      return {
        projects: [],
      }
    },
    mounted() {
      this.getAllProjects()
    },
    methods: {
      getAllProjects() {
        fetch('./data/project.json')
          .then(res => res.json())
          .then(data => {
            console.log(data)
            this.projects = data
          })
      }
    }
  }
</script>

<style>
</style>