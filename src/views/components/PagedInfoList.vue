<template>
  <div style="min-height:800px">

    <b-alert :show="showPageInfo"
      variant="secondary">
      {{ this.pageInfo }}
    </b-alert>
    <!-- <div v-if="loading" class="mb-2" align="center"> Loading... </div> -->
    <info-list
      :infos="infos"
      :loading="loading"
      :showDesc="showDesc"
      :showDate="showDate"></info-list>
    <!-- <p></p> -->

    <!-- <b-container
         v-if="randomPagination" class="mt-3" align="center">
         <b-button
         @click="updatePage"
         variant="outline-secondary"
         >Again</b-button>
         </b-container> -->

    <page-button
      :relPrev="respMeta.rel_prev"
      :hasNoPrev="hasNoPrev"
      :relNext="respMeta.rel_next"
      :hasNoNext="hasNoNext"
    ></page-button>

    <b-container class="mt-3">
      <Adsense
        data-ad-client="ca-pub-2678947276108257"
        data-ad-slot="3128485521">
      </Adsense>
    </b-container>
  </div>
</template>

<script>
  // import TagList from './TagList';
  import PageButton from './PageButton'
  import InfoList from './InfoList'
  /* import { getInfos, getInfoList } from '@/api/infos'; */
  import { getInfoList } from '@/api/infos';

  export default {
    name: 'PagedInfoList',
    // components: { TagList, Tag },
    components: { InfoList, PageButton },
    props: {
      showDate: {
        type: Boolean,
        default: false
      },
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
      },
      showPageInfo: {
        type: Boolean,
        default: false
      },
      randomPagination: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        // showDesc: false,
        infos: [],
        respMeta: { quantity: '*' },
        quantity: '*',
        perPage: 10,
        offset: 0,
        relSelf: '',
        relPrev: '',
        relNext: '',
        loading: true
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
        // TODO: maybe need to add query for search qs
        //   if (this.$route.query.qs) {
        // q.qs = this.$route.query.qs
        //   }
        return q
      },
      pageInfo: function() {
        var pageName = this.$route.name
        if (pageName === 'author') {
          document.title = 'Author: ' + this.$route.params.authorID + ' | Linkedinfo.co'
          return this.respMeta.quantity + ' articles by ' + this.$route.params.authorID
        } else if (pageName === 'infosByTags') {
          document.title = 'Infos by tags: ' + this.$route.query.tags + ' | Linkedinfo.co'
          return this.respMeta.quantity + ' articles with queried tags'
        } else if (pageName === 'searchResult') {
          document.title = 'Search result: ' + this.$route.query.qs + ' | Linkedinfo.co'
          return 'Found ' + this.respMeta.quantity + ' articles with keyword "' + this.$route.query.qs + '"'
        } else {
          return 'Found ' + this.respMeta.quantity + ' articles'
        }
      }
    },
    created() {
      this.fetchData(this.pathIn, this.querys);
    },
    /* beforeRouteUpdate(to, from, next) { */
    /* alert('update'); */
    /* this.fetchData(); */
    /* next(); */
    /* }, */
    watch: {
      '$route'(to, from) {
        //   console.log(from.fullPath);
        //   console.log(to.path, this.querys);
        //   console.log(to.fullPath);
        // this.fetchData(to.path, this.querys);
        this.fetchData(to.fullPath);
        /* this.offsetIn = this.respMeta.offset; */
        this.loading = true
      }
    },
    methods: {
      fetchData(path, offset) {
        /* getInfos(this.offsetCurrent) */
        // alert(path)
        getInfoList(path, offset)
          .then(response => {
            this.loading = false
            var data;
            data = response.data
            this.infos = data.content;
            if (data.meta) {
              this.respMeta = data.meta;
            } else {
              this.respMeta.rel_next = data.rel_next;
              this.respMeta.rel_prev = data.rel_prev;
              this.respMeta.offset = data.offset;
              this.respMeta.quantity = data.quantity;
            }
            // if (data.tags) {
            //   console.log('tags');
            //   this.$bus.$emit('update-selected-tags', data.tags)
            // }
          })
          .catch(err => {
            this.fetchSuccess = false;
            console.log(err);
          });
      }
    }
  };
</script>
