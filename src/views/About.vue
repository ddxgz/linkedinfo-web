<template>
  <div class="about mt-4" style="min-height:800px">
    <!-- <navbar></navbar> -->
    <b-container class="mb-5">
      <p>
        The Web should be an open web, as far as I thought.
        All the informations published on the Web are meant to be shared, share through links by search engines, rss, social networks, etc. This site is yet another method that tries to link all the informations (but starts with only technical articles on LinkedInfo) and share them.
      </p>

      <p>The original idea of this side project, LinkedInfo, is to utilize Semantic Web technologies and Machine Learning to link the informations, but noble ambition shall start from the basic. This project has to be improved step by step. Your suggestions are welcome.</p>
      <p>To be noted that, there's NO full text put on LinkedInfo but links and short descriptions. If you found your articles appear on LinkedInfo, but you prefer not to share via this site, please let me know.</p>

      <p>
        If you have any feedback, you are very welcome to comment here or send it to
        <a
          href="mailto:linkedinfo.co@gmail.com"
        >linkedinfo.co@gmail.com</a>.
      </p>
    </b-container>

    <b-container class="mt-4">
      <hr />
      <div class="comments">
        <!-- the reason of the identifier is set to this is due to a mistake of the previous page -->
        <vue-disqus
          shortname="linkedinfo-1"
          :identifier="'/infos/'"
          url="https://www.linkedinfo.co/about"
        ></vue-disqus>
      </div>
    </b-container>

    <!-- <b-container>
      <a href="https://www.vultr.com/?ref=7127878">
        <b-img src="https://www.vultr.com/media/badge_ondark.png"/>
      </a>
    </b-container>-->
  </div>
</template>

<script>
// import Navbar from '@/components/Navbar'
import Layout from '@/views/Layout'

export default {
  name: 'about',
  components: { Layout },
  //   components: {
  //     Navbar,
  //     InfoList
  //   }
  created() {
    document.title = 'About | Linkedinfo.co';
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
