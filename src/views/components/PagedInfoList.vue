<template>
<div>
  <info-list
    :infos="infos"
    :showDesc="showDesc"></info-list>
<p></p>
  <page-button
    :relPrev="respMeta.rel_prev"
    :hasNoPrev="hasNoPrev"
    :relNext="respMeta.rel_next"
    :hasNoNext="hasNoNext"
    ></page-button>
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
        /* this.fetchData(to.path, to.query.offset); */
        // console.log(to.path, this.querys);
        this.fetchData(to.path, this.querys);
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
