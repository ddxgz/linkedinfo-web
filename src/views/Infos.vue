<template>
  <b-container>
    <paged-info-list 
      :showDesc=true
      :showDate=true
      :pathIn="'infos'"
      :offsetIn=this.$route.query.offset></paged-info-list>
  </b-container>
</template>

<script>
import Layout from '@/views/Layout'
import {PagedInfoList} from './components'
// import { getInfos } from '@/api/infos';

export default {
  name: 'Infos',
  components: { Layout, PagedInfoList },
  created() {
    document.title = 'Infos | Linkedinfo.co';
    this.fetchData();
  }
};
</script>
