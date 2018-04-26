<template>
<div>
  <b-container>
 <b-list-group>
  <b-list-group-item
    :key="info.key"
      class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ info.title }}</h5>
      <small class="text-muted">{{ info.modifiedAt.slice(0,10) }}</small>
    </div>
    <small class="text-muted"
      v-for="creator in info.creators" :key="creator.creatorID">
        by <a :href="'/creators/' + creator.creatorID">{{ creator.label }}</a>
    </small>
    <tag-item v-for="tag in info.tags" :tag="tag" :key="tag.tagID"></tag-item>
    <p>{{ info.description }}</p>
    <origin-link :originURL="info.url" size="sm" variant="outline-danger"></origin-link>

  </b-list-group-item>
</b-list-group>


          <h5>You might be interested</h5>
          <b-list-group>
   <router-link class="list-group-item flex-column align-items-start list-group-item-action"
     v-for="infoR in recommendedInfos" :key="infoR.key" :to="{name: 'info', params: {infoKey: infoR.key}}">{{ infoR.title }}</router-link>
            <!-- <b-list-group-item v-for="infoR in recommendedInfos" :href="'infos/' + infoR.key" :key="infoR.key" v-html="infoR.title">
            </b-list-group-item> -->
          </b-list-group>
<!-- <b-pagination size="md" :total-rows="quantity"
  v-model="currentPage" :per-page="perPage">
</b-pagination> -->
</b-container>
</div>
</template>

<script>
// import TagList from './TagList';
import Layout from '@/views/Layout'
// import { TagItem } from './components'
import {TagItem, OriginLink} from './components'
import { getInfo, getRecommendedInfos } from '@/api/infos';

export default {
  name: 'Info',
  // components: { TagList, Tag },
  components: { Layout, TagItem, OriginLink },
  data() {
    return {
            // infos: [],
      info: {},
      recommendedInfos: [],
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
        // alert('sk');
        // alert(this.$route.params.infoKey)
    this.fetchData();
  },
  watch: {
    '$route'(to, from) {
      /* this.fetchData(to.path, to.query.offset); */
      this.fetchData();
    }
  },
  methods: {
    fetchData() {
      getInfo(this.$route.params.infoKey)
                .then(response => {
                  var data;
                  data = response.data
                    // this.infos = data.content;
                  this.info = data.content[0];
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
      getRecommendedInfos(this.$route.params.infoKey)
                .then(response => {
                  var data;
                  data = response.data
                  this.recommendedInfos = data.content;
                })
        .catch(err => {
          this.fetchSuccess = false;
          console.log(err);
        });
    }
  }
};
</script>
