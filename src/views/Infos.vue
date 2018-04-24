<template>
      <b-container>

  <info-list :showDesc=true
             :offset=this.$route.query.offset></info-list>
  </b-container>
</template>

<script>
import Layout from '@/views/Layout'
import {InfoList, TagItem} from './components'

// import { TagItem } from './components'
import { getInfos } from '@/api/infos';

export default {
  name: 'Infos',
  // components: { TagList, Tag },
  components: { Layout, InfoList, TagItem },
  data() {
    return {
      infos: [],
      quantity: 0,
      perPage: 10,
      offset: 0,
      relSelf: '',
      relPrev: '',
      relNext: '',
      currentPage: 1
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getInfos()
        .then(response => {
          var data;
          data = response.data
          this.infos = data.content;
          this.quantity = data.quantity;
          this.perPage = data.perPage;
          this.offset = data.offset;
          this.relSelf = data.rel_self;
          this.relPrev = data.rel_prev;
          this.relNext = data.rel_next;
          // this.currentPage = data.rel_self
           // alert("in created");
          // alert(response.data.content[0].title.toString());
        })
        .catch(err => {
          this.fetchSuccess = false;
          console.log(err);
        });
    }
  }
};
</script>
