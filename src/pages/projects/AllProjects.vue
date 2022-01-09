<template>
  <div>
    <br>
    <h1 style="text-align: center; background-color:#343a40; color: white;">Projects</h1>
    <b-container>
    <div v-if="projects">
      <b-row align-h="center">
      <b-col lg="2" md="8" sm="10">
        <label for="search">
          <h3>
            <b-badge variant="info">Search Projects :</b-badge>
          </h3>
        </label>
      </b-col>
      <b-col lg="4" md="8" sm="10">
        <b-form-input id="search" v-model="searchTerm"></b-form-input>
      </b-col>
    </b-row>

    <br>

    <b-row align-h="center" v-for="project in filteredProjects" :key="project.id">
      <b-col lg="6" md="8" sm="10">
        <b-card no-body border-variant="dark" :header="project.title" header-text-variant="white"
          header-bg-variant="dark" footer-bg-variant="dark">
          <b-card-body>
            <b-card-img :src="require('@/assets/images/' + project.image)"></b-card-img>
          </b-card-body>
          <b-list-group flush>
            <b-list-group-item>
              <p>{{project.description}}</p>
              <b-button v-if="project.demo" :to="{name: project.demo}" variant="info">Demo</b-button>
              <b-button v-if="project.website" :href="project.website" target="_blank" variant="info">Hosted Site
              </b-button>
            </b-list-group-item>
          </b-list-group>
          <template #footer>
            <b-badge v-for="tag in project.tags" :key="tag" variant="info">{{ tag }}</b-badge>
          </template>
        </b-card>
      </b-col>
    </b-row>
    </div>
    <div v-else>
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
    </b-container>
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