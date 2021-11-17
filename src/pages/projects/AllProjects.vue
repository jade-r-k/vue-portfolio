<template>
  <div>
    This is the all projects page

    <div
    v-for="project in projects"
    :key="project.id">
    <br>
    Title: {{ project.title }}
    <br>
    Description: {{ project.description }}
    <br>
    Demo: <router-link :to="{name: project.demo}">Demo</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AllProjects',
  components: {
  },
  data(){
    return {
      projects: []
    }
  },
  mounted(){
    this.getAllProjects()
  },
  methods:{
    getAllProjects(){
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