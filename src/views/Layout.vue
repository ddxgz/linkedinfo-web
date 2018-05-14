<template>
  <div>
    <navbar></navbar>
    <b-container>
    <app-main></app-main>
    </b-container>
    <vm-back-top :duration="300"></vm-back-top>
    <footer-block></footer-block>
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
