<template>
<div>
  <info-list
    :infos="infos"
    :showDesc="showDesc"
    :showDate="showDate"></info-list>
<!-- <p></p> -->
  <page-button
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
        relNext: ''
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
            if (data.meta) {
              this.respMeta = data.meta;
            } else {
              this.respMeta.rel_next = data.rel_next;
              this.respMeta.rel_prev = data.rel_prev;
              this.respMeta.offset = data.offset;
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
