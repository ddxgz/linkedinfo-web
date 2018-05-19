<template>
<div>
  <b-container>
      <multi-query></multi-query>
    <paged-info-list 
      :showDesc=true
      :showDate=true
      :pathIn="'infos'"
      :offsetIn=this.$route.query.offset></paged-info-list>
  </b-container>
<!-- <b-container class="mt-3">
    <Adsense 
      data-ad-client="ca-pub-2678947276108257" 
      data-ad-slot="3128485521">
    </Adsense>
</b-container> -->
</div>
</template>

<script>
import Layout from '@/views/Layout'
import {PagedInfoList, MultiQuery} from './components'
// import { getInfos } from '@/api/infos';

export default {
  name: 'Infos',
  components: { Layout, PagedInfoList, MultiQuery },
  created() {
    document.title = 'Infos | Linkedinfo.co';
    // this.fetchData();
  }
};
</script>
