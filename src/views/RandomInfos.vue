<template>
      <b-container>

  <paged-info-list :showDesc=true
            :randomPagination=true
             :pathIn="'randominfos'"
             :offsetIn=this.$route.query.offset></paged-info-list>
  </b-container>
</template>

<script>
import Layout from '@/views/Layout'
// import {InfoList, TagItem} from './components'
import {PagedInfoList} from './components'

// import { TagItem } from './components'
// import { getInfos } from '@/api/infos';

export default {
  name: 'RandomInfos',
  // components: { TagList, Tag },
  // components: { Layout, InfoList, TagItem }
  components: { Layout, PagedInfoList }
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
  // methods: {
  //   fetchData() {
  //     getInfos()
  //       .then(response => {
  //         var data;
  //         data = response.data
  //         this.infos = data.content;
          // this.quantity = data.quantity;
          // this.perPage = data.perPage;
          // this.offset = data.offset;
          // this.relSelf = data.rel_self;
          // this.relPrev = data.rel_prev;
          // this.relNext = data.rel_next;
          // this.currentPage = data.rel_self
           // alert("in created");
          // alert(response.data.content[0].title.toString());
    //     })
    //     .catch(err => {
    //       this.fetchSuccess = false;
    //       console.log(err);
    //     });
    // }
  // }
};
</script>
