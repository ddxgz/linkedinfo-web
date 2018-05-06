<template>
  <b-container>

    <!-- <paged-info-list 
      :showDesc=true 
      :pathIn="'randominfos'" 
      :offsetIn=this.$route.query.offset></paged-info-list> -->

  <info-list
    :infos="infos"
    :loading="loading"
      :showDesc=true 
      :pathIn="'randominfos'"></info-list>

    <b-container class="mt-3" align="center">
      <b-button @click="updatePage" variant="outline-secondary">Again</b-button>
    </b-container>

    <Adsense 
      data-ad-client="ca-pub-2678947276108257" 
      data-ad-slot="3128485521">
    </Adsense>
  </b-container>
</template>

<script>
  import Layout from '@/views/Layout'
  // import {InfoList, TagItem} from './components'
  import {
    InfoList
  } from './components'

  // import { TagItem } from './components'
  import { getRandomInfos } from '@/api/infos';

  export default {
    name: 'RandomInfos',
    // components: { TagList, Tag },
    // components: { Layout, InfoList, TagItem }
    components: {
      Layout,
      InfoList
    },
    data() {
      return {
        infos: [],
        quantity: 0,
        perPage: 10,
        loading: true
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        getRandomInfos(10)
          .then(response => {
            this.loading = false;
            var data;
            data = response.data
            this.infos = data.content;
            this.quantity = data.quantity;
            this.perPage = data.perPage;
          })
        .catch(err => {
          this.fetchSuccess = false;
          console.log(err);
        });
      },
      updatePage() {
        // this.$router.go({name: 'randomInfos', force: true})
        this.fetchData()
        this.loading = true
        window.scrollTo(0, 0);
      }
    }
  };

</script>
