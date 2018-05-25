<template>
  <div>
    <!-- <b-container> -->
    <navbar></navbar>
    <!-- <b-container> -->
      <!-- <div v-if="notCookieConsent"> -->
    <!-- <b-alert show dismissible fade> -->
    <b-alert :show="showAlert" fade>
       <!-- <h4 class="alert-heading">We use cookie!</h4> -->
        LinkedInfo.co uses cookie only for the language preference. We do not 
        collect or store any user data on our server.

        There are Google ads on this site use cookies, but we chose to show 
        only non-personalized ads for users in the EEA. 
        <a href="https://policies.google.com/technologies/partner-sites" target="blank">
          Learn more about how google ads use cookies</a>
          <b-button class="mx-3 my-0"
            @click="agreeCookie">Agree</b-button>
    </b-alert>
      <!-- </div> -->
    <!-- </b-container> -->
    <app-main></app-main>
    <vm-back-top :duration="300"></vm-back-top>
    <footer-block></footer-block>
    <!-- </b-container> -->
  </div>
</template>

<script>
import VmBackTop from 'vue-multiple-back-top';
import { Navbar, AppMain, FooterBlock } from './components';
import {getCookie, setCookie} from '@/utils/cookie'

export default {
  name: 'layout',
  components: {
    Navbar,
    AppMain,
    VmBackTop,
    FooterBlock
  },
  data() {
    return {
      showAlert: true
    }
  },
  created() {
    this.notCookieConsent();
  },
  methods: {
    notCookieConsent: function() {
    // showAlert: function() {
      var consent = getCookie('cookieConsent')
      if (consent === '1') {
        // return false
        this.showAlert = false
      }
      // return true;
    },
    agreeCookie: function() {
      setCookie('cookieConsent', '1', 7);
      this.showAlert = false;
    }
  }
}
</script>
