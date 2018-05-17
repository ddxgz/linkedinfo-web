<template>
  <div>
    <!-- <b-container> -->
    <navbar></navbar>
    <app-main></app-main>
    <vm-back-top :duration="300"></vm-back-top>
    <footer-block></footer-block>
    <!-- </b-container> -->
  </div>
</template>

<script>
import VmBackTop from 'vue-multiple-back-top';
import { Navbar, AppMain, FooterBlock } from './components';

export default {
  name: 'layout',
  components: {
    Navbar,
    AppMain,
    VmBackTop,
    FooterBlock
  }
}
</script>
