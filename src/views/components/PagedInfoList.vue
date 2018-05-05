<template>
<div>

  <b-alert :show="showPageInfo"
    variant="secondary">
    {{ this.pageInfo }}
    </b-alert>
    <div v-if="loading" class="mb-2" align="center"> Loading... </div>
  <info-list
    :infos="infos"
    :showDesc="showDesc"
    :showDate="showDate"></info-list>
<!-- <p></p> -->

  <b-container
    v-if="randomPagination" class="mt-3" align="center">
  <b-button
    @click="updatePage"
    :variant="outline-secondary"
    >Again</b-button>
  </b-container>

  <page-button
    v-else
    :relPrev="respMeta.rel_prev"
    :hasNoPrev="hasNoPrev"
    :relNext="respMeta.rel_next"
    :hasNoNext="hasNoNext"
    ></page-button>

    <Adsense 
      data-ad-client="ca-pub-2678947276108257" 
      data-ad-slot="3128485521">
    </Adsense>
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
        return q
      },
      pageInfo: function() {
        var pageName = this.$route.name
        if (pageName === 'author') {
          return this.respMeta.quantity + ' articles by ' + this.$route.params.authorID
        } else if (pageName === 'infosByTags') {
          return this.respMeta.quantity + ' articles with queried tags'
        } else if (pageName === 'searchResult') {
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
        // console.log(to.path, this.querys);
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
      },
      updatePage() {
        this.$router.go({name: 'randomInfos', force: true})
      }
    }
  };
</script>
