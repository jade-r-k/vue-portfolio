<template>
  <div class="columns">
    <div class="column">

      <b-field label="Search Projects">
        <b-input v-model="searchTerm"></b-input>
      </b-field>

      <div class="card" v-for="project in filteredProjects" :key="project.id">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ project.title }}</p>
              <p class="subtitle">
                <b-taglist>
                  <b-tag type="is-dark"
                  v-for="tag in project.tags"
                  :key="tag"
                  >{{ tag }}</b-tag>
                </b-taglist>
              </p>
            </div>
          </div>
          <div class="content">
            {{ project.description }}
            <br>
            <router-link v-if="project.demo" :to="{name: project.demo}">Demo</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AllProjects',
    components: {},
    data() {
      return {
        projects: [],
        searchTerm: ""
      }
    },
    computed: {
      filteredProjects: function () {
        return this.projects.filter(project => {
          return project.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        })
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