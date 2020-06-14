<template>
  <div class="about mt-4" style="min-height:800px">
    <!-- <navbar></navbar> -->
    <b-container class="mb-5">
      <h1>Technologies and projects this site is using and used</h1>
    </b-container>
  </div>
</template>

<script>
import Layout from '@/views/Layout'

export default {
  name: 'techstack',
  components: { Layout },
  created() {
    document.title = 'Technology Stack | Linkedinfo.co';
  }
}
</script>

<style>
.about {
  font-size: 1.2rem;
  /* margin: 2em 3em 4em; */
  /* padding: 3em 0em; */
}
</style>
