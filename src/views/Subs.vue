<template>
  <div class="subs">
    <!-- <navbar></navbar> -->
    <b-container>

<h2 align="center">Welcome for Subscription</h2>


<p/>

<h3 align="center"><a href="/atom">Atom</a></h3>
<h3 align="center"><a href="/rss">RSS</a></h3>

    </b-container>
    <!-- <b-container>
      <a href="https://www.vultr.com/?ref=7127878">
        <b-img src="https://www.vultr.com/media/badge_ondark.png"/>
      </a>
    </b-container> -->
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar'
import Layout from '@/views/Layout'

export default {
  name: 'subs',
  components: { Layout }
//   components: {
//     Navbar,
//     InfoList
//   }
}
</script>

<style>
  .subs{
  font-size: 1.3rem;
    margin: 2em 3em 4em;
  padding: 3em 0em;

  }
</style>
