<template>
  <div>
    <navbar></navbar>
    <app-main></app-main>
    <footer-block></footer-block>
  </div>
</template>

<script>
import { Navbar, AppMain, FooterBlock } from './components';

export default {
  name: 'layout',
  components: {
    Navbar,
    AppMain,
    FooterBlock
  }
}
</script>