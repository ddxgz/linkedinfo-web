<template>
<div>
  <div>
 <b-list-group>
   <!-- <b-list-group-item -->
   <!-- v-for="info in infos" :key="info.key" :href="'/infos/' + info.key" -->
   <!-- class="flex-column align-items-start"> -->
   <router-link class="list-group-item flex-column align-items-start list-group-item-action"
     v-for="info in infos" :key="info.key" :to="{name: 'Info', params: {infoKey: info.key}}">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ info.title }}</h5>
      <!-- <small class="text-muted">{{ info.modifiedAt.slice(0,10) }}</small> -->
    </div>
    <small class="text-muted"
      v-for="creator in info.creators" :key="creator.creatorID">
        by <a :href="'/creators/' + creator.creatorID">{{ creator.label }}</a>
    </small>
    <!-- <b-badge pill
      v-for="tag in info.tags" :key="tag.tagID" :href="'/tags/' + tag.tagID"
      variant="secondary">
        {{ tag.label }}
    </b-badge> -->
    <tag-item v-for="tag in info.tags" :tag="tag" :key="tag.tagID"></tag-item>
    <!-- <tag-list :tags="info.tags"></tag-list> -->
    <p v-if="showDesc">{{ info.description }}</p>
    <b-button :href="info.url" size="sm" variant="outline-danger" right>
      Original Link
    </b-button>
    <!-- </b-list-group-item> -->
   </router-link>
</b-list-group>
  </div>
<!-- <b-pagination size="md" :total-rows="quantity"
  v-model="currentPage" :per-page="perPage">
</b-pagination> -->
<p></p>
<div align="right">
  <b-button-group align="right">
    <!-- <b-button v-if="respMeta.offset > 0" :href="respMeta.rel_prev">Prev</b-button> -->
    <!-- <router-link v-if="respMeta.offset > 0" :to="{path:'infos',query:{offset:respMeta.prev}}" tag="b-button">Prev</router-link> -->
    <router-link v-if="respMeta.offset > 0" :to="{path:this.pathIn,query:{offset:respMeta.prev}}" tag="b-button">Prev</router-link>
    <b-button v-else disabled>Prev</b-button>
    <!-- <b-button v-if="respMeta.offset < respMeta.quantity" :href="respMeta.rel_next">Next</b-button> -->
    <!-- <router-link v-if="respMeta.offset < respMeta.quantity" :to="{path:'infos',query:{offset:respMeta.next}}" tag="b-button">Next</router-link> -->
    <router-link v-if="respMeta.offset < respMeta.quantity" :to="{path:this.pathIn,query:{offset:respMeta.next}}" tag="b-button">Next</router-link>
    <b-button v-else disabled>Next</b-button>
  </b-button-group>
</div>
</div>
</template>

<script>
// import TagList from './TagList';
import TagItem from './TagItem';
  /* import { getInfos, getInfoList } from '@/api/infos'; */
import { getInfoList } from '@/api/infos';

export default {
  name: 'InfoList',
  // components: { TagList, Tag },
  components: { TagItem },
  props: ['showDesc', 'pathIn', 'offsetIn'],
  data() {
    return {
      // showDesc: false,
      infos: [],
      respMeta: {},
      quantity: 0,
      perPage: 10,
      offset: 0,
      relSelf: '',
      relPrev: '',
      relNext: '',
      currentPage: 1
    };
  },
  computed: {
    offsetCurrent: {
      get: function() {
        if (this.offsetIn) {
          return this.offsetIn
        } else {
          return this.respMeta.offset
        }
      }
    }
  },
  mounted() {
    this.fetchData(this.pathIn, this.offsetCurrent);
  },
    /* beforeRouteUpdate(to, from, next) { */
    /* alert('update'); */
    /* this.fetchData(); */
    /* next(); */
    /* }, */
  watch: {
    '$route'(to, from) {
      /* alert('update2'); */
      this.fetchData(to.path, to.query.offset);
      alert(to.path);
      alert(to.query.offset);
      /* alert(from); */
      /* this.offsetIn = this.respMeta.offset; */
    }
  },
  methods: {
    fetchData(path, offset) {
      /* getInfos(this.offsetCurrent) */
      getInfoList(path, offset)
        .then(response => {
          var data;
          data = response.data
          this.infos = data.content;
          this.respMeta = data.meta;
          // this.$set(this.respMeta, )
          /* this.quantity = data.quantity; */
          /* this.perPage = data.perPage; */
          /* this.offset = data.offset; */
          /* this.relSelf = data.rel_self; */
          /* this.relPrev = data.rel_prev; */
          /* this.relNext = data.rel_next; */
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
