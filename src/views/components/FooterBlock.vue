<template>
  <div class="footer">
    <b-container>
      <b-row class="mb-3">
        <b-col align="center">
          <router-link to="/" class="footer-link">
            LinkedInfo.co |
          </router-link>
          <router-link to="/subs" class="footer-link">
            Subscription |
          </router-link>
          <router-link to="/about" class="footer-link">
            About
          </router-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col align="center">
          <a href="https://www.vultr.com/?ref=7127878">
            <b-img center src="https://www.vultr.com/media/badge_ondark.png" width="120" fluid alt="Fluid image"/>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
  export default {
    name: 'FooterBlock'
  };
</script>

<style scoped>
  .footer {
    /* height: 150px; */
    /* bottom: 0; */
    /* position: sticky; */
    /* position: fixed; */
    /* padding: 20px; */
    /* margin: 1em 0em 0em; */
    /* background: rgb(22,23,24); */
    /* z-index: 1000; */

    width: 100%;
    padding: 1em 0em;
    background: rgb(40,44,49);
  }
  .footer-link {
    font-size:15px;
    color:grey;
    text-decoration:none
  }
</style>
