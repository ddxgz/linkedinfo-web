<template>
    <b-container align="center" style="min-height:800px;font-size:38px">

        <div class="mt-5">404 Page not found.</div>

    </b-container>
</template>

<script>
import Layout from '@/views/Layout'

export default {
  name: 'Page404',
  components: { Layout },
  created() {
    document.title = '404 | Linkedinfo.co';
  }
}
</script>