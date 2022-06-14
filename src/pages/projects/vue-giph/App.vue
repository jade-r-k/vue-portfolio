<template>
  <b-container>
    <b-row>
      <b-col>
        <GiphyViewer />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import GiphyViewer from '@/pages/projects/vue-giph/GiphyViewer.vue'


export default {
  name: 'App',
  components: {
    GiphyViewer
  }
}
</script>

<style>
</style>
