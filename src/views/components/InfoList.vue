<template>
<div>
  <div>
 <b-list-group>
   <!-- <b-list-group-item -->
   <!-- v-for="info in infos" :key="info.key" :href="'/infos/' + info.key" -->
   <!-- class="flex-column align-items-start"> -->
   <router-link class="list-group-item flex-column align-items-start list-group-item-action"
     v-for="info in infos" :key="info.key" :to="{name: 'info', params: {infoKey: info.key}}">
    <div class="d-flex w-100 justify-content-between">
      <!-- <h5 class="mb-1"><router-link to="about">{{ info.title }}</router-link></h5> -->
      <h6 class="mb-1">{{ info.title }}</h6>
      <!-- <small class="text-muted">{{ info.modifiedAt.slice(0,10) }}</small> -->
    </div>
    <!-- <small class="text-muted"
         v-for="creator in info.creators" :key="creator.creatorID">
         by <a :href="'/creators/' + creator.creatorID">{{ creator.label }}</a>
         </small> -->
    <small class="text-muted"
      v-for="creator in info.creators" :key="creator.creatorID">
        by <router-link :to="{name: 'author', params: {authorID: creator.creatorID}}">{{ creator.label }}</router-link>
    </small>
    <!-- <b-badge pill
      v-for="tag in info.tags" :key="tag.tagID" :href="'/tags/' + tag.tagID"
      variant="secondary">
        {{ tag.label }}
    </b-badge> -->
    <tag-item v-for="tag in info.tags" :tag="tag" :key="tag.tagID"></tag-item>
    <!-- <tag-list :tags="info.tags"></tag-list> -->
    <p v-if="showDesc">{{ info.description }}</p>
    <origin-link :originURL="info.url" size="sm" variant="outline-danger"></origin-link>
    <!-- </b-list-group-item> -->
   </router-link>
</b-list-group>
  </div>
<!-- <b-pagination size="md" :total-rows="quantity"
  v-model="currentPage" :per-page="perPage">
</b-pagination> -->
<p></p>
<div align="right">
  <b-button-group>
    <!-- <b-button v-if="respMeta.offset > 0" :href="respMeta.rel_prev">Prev</b-button> -->
    <!-- <router-link v-if="respMeta.offset > 0" :to="{path:'infos',query:{offset:respMeta.prev}}" tag="b-button">Prev</router-link> -->
    <!-- <router-link v-if="respMeta.offset > 0" :to="{path:this.pathIn,query:{offset:respMeta.prev}}" tag="b-button" class="btn btn-outline-secondary">Prev</router-link> -->
    <!-- <router-link v-if="respMeta.offset > 0" :to="{path:this.pathIn,query:{offset:respMeta.prev}}" class="btn btn-outline-secondary">Prev</router-link> -->
    <!-- <router-link v-if="respMeta.offset > 0" :to="{path:this.respMeta.rel_prev}" class="btn btn-outline-secondary">Prev</router-link> -->
    <router-link 
      :to="{path:this.respMeta.rel_prev}" 
      :class="{ disabled: hasNoPrev }"
      class="btn btn-outline-secondary">Prev</router-link>
    <!-- <b-button v-else disabled variant="outline-secondary">Prev</b-button> -->
    <!-- <b-button v-if="respMeta.offset < respMeta.quantity" :href="respMeta.rel_next">Next</b-button> -->
    <!-- <router-link v-if="respMeta.offset < respMeta.quantity" :to="{path:'infos',query:{offset:respMeta.next}}" tag="b-button">Next</router-link> -->
    <!-- <router-link v-if="respMeta.offset < respMeta.quantity" :to="{path:this.pathIn,query:{offset:respMeta.next}}" class="btn btn-outline-secondary">Next</router-link> -->
    <router-link 
      :to="{path:this.respMeta.rel_next}" 
      :class="{ disabled: hasNoNext }"
      class="btn btn-outline-secondary">Next</router-link>
    <!-- <b-button v-else disabled>Next</b-button> -->
  </b-button-group>
</div>
</div>
</template>

<script>
  // import TagList from './TagList';
  import TagItem from './TagItem';
  import OriginLink from './OriginLink';
  /* import { getInfos, getInfoList } from '@/api/infos'; */
  import { getInfoList } from '@/api/infos';

  export default {
    name: 'InfoList',
    // components: { TagList, Tag },
    components: { TagItem, OriginLink },
    props: {
      showDesc: {
        type: Boolean,
        default: false
      },
      tagsIn: {
        type: String,
        default: null
      },
      pathIn: {
        type: String,
        default: '/infos'
      },
      offsetIn: {
        type: String,
        default: '0'
      }
    },
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
      },
      hasNoPrev: function() {
        return this.respMeta.offset <= 0
      },
      hasNoNext: function() {
        return this.respMeta.offset + this.respMeta.per_page >= this.respMeta.quantity
      },
      querys: function() {
        var q = {}
        q.offset = this.offsetIn
        if (this.$route.query.tags) {
          q.tags = this.$route.query.tags
        }
        return q
      }
    },
    created() {
      /* this.fetchData(this.pathIn, this.offsetCurrent); */
      this.fetchData(this.pathIn, this.querys);
    },
    /* beforeRouteUpdate(to, from, next) { */
    /* alert('update'); */
    /* this.fetchData(); */
    /* next(); */
    /* }, */
    watch: {
      '$route'(to, from) {
        /* alert('update2'); */
        /* this.fetchData(to.path, to.query.offset); */
        this.fetchData(to.path, this.querys);
        // alert(to.path + '  ' + to.query.offset);
        /* this.offsetIn = this.respMeta.offset; */
      }
    },
    methods: {
      fetchData(path, offset) {
        /* getInfos(this.offsetCurrent) */
        // alert(path)
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
