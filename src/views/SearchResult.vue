<template>
      <b-container>

  <paged-info-list :showDesc=true
             :pathIn="this.searchPath"
             :offsetIn=this.$route.query.offset></paged-info-list>
  </b-container>
</template>

<script>
import Layout from '@/views/Layout'
// import {InfoList, TagItem} from './components'
import {PagedInfoList} from './components'

// import { TagItem } from './components'
// import { getInfoList } from '@/api/infos';

export default {
  name: 'SearchResult',
  // components: { TagList, Tag },
  // components: { Layout, InfoList, TagItem }
  components: { Layout, PagedInfoList },
  computed: {
    searchPath() {
      return this.$route.fullPath
    }
  },
  // data() {
  //   return {
  //     infos: [],
  //     quantity: 0,
  //     perPage: 10,
  //     offset: 0,
  //     relSelf: '',
  //     relPrev: '',
  //     relNext: '',
  //     currentPage: 1
  //   };
  // },
  // created() {
  //   this.fetchData();
  // },
  watch: {
    '$route'(to, from) {
      // this.loadCurrentTags();
    }
  }
};
</script>
