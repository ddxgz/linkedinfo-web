<template>
  <div>
    <navbar></navbar>
    <app-main></app-main>
  </div>
</template>

<script>
import { Navbar, AppMain } from './components';

export default {
  name: 'layout',
  components: {
    Navbar,
    AppMain
  }
}
</script>