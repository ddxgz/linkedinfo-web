<template>
  <section class="appmain">
    <!-- <transition name="fade" mode="out-in"> -->
      <!-- <keep-alive :include="cachedViews"> -->
        <router-view></router-view>
      <!-- </keep-alive> -->
    <!-- </transition> -->
    <!-- <footer-block></footer-block> -->
  </section>
</template>

<script>
// import { FooterBlock } from './';

export default {
  name: 'AppMain'
  // components: { FooterBlock }
  // computed: {
  //   cachedViews() {
  //     return this.$store.state.tagsView.cachedViews
  //   }
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  // }
}
</script>

<style>
.appmain {
  margin: 0em 0em 0em;
  padding: 2em 0em;
}
</style>
