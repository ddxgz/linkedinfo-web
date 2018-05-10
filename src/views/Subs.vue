<template>
  <div class="subs" style="min-height:800px">
    <!-- <navbar></navbar> -->
    <Adsense 
      data-ad-client="ca-pub-2678947276108257" 
      data-ad-slot="3128485521">
    </Adsense>
    <b-container>

<h2 class="mt-5" align="center">Welcome for Subscription</h2>


<p/>

<h3 align="center">
    <a rel="alternate" type="application/atom+xml" href="//www.linkedinfo.co/atom.xml">
      <!-- <i class="fas fa-rss-square"></i>   -->
      Atom
    </a>
</h3>

<h3 align="center">
      <a rel="alternate" type="application/rss+xml" href="//www.linkedinfo.co/rss.xml">
      <!-- <i class="fas fa-rss-square"></i>   -->
      RSS
      </a>
  </h3>

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
  components: { Layout },
//   components: {
//     Navbar,
//     InfoList
//   }
  created() {
    document.title = 'Subscriptions | Linkedinfo.co';
  }
}
</script>

<style>
  .subs{
  font-size: 1.3rem;
    /* margin: 1em 4em 22em; */
  /* paddin: 1em 0em 18em; */

  }
</style>
