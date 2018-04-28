<template>
  <div>
    <multiselect 
            v-model="value"
            :options="options"
            :multiple="true"
            :max="5"
            :hide-selected="true"
            :close-on-select="false"
            :clear-on-select="true"
            @input="changeQuery"
            placeholder="Query by 1 or more Tags"
            label="label"
            track-by="label">
    </multiselect>

    <div class="center aligned column">
      <router-link :to="queryPage" 
      class="btn btn-primary">
      Query
      </router-link>
      <!-- <router-link :to="{name: 'infosByTags', query: {tags: value[0].tagID}}" 
      class="btn btn-primary">
      Query
      </router-link> -->
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import { getInfoList } from '@/api/infos';

export default {
  components: { Multiselect },
  props: {
    tagsIn: {
      type: Array,
      default: function() { return [] }
    }
  },
  data() {
    return {
      value: [],
      options: [],
      queryPage: '/infosbytags',
      tagList: [],
      tagInQuery: []
    };
  },
  created() {
    this.getTagList();
    // this.loadCurrentTags();
  },
  watch: {
    '$route'(to, from) {
      this.loadCurrentTags();
    }
  },
  methods: {
    getTagList() {
      getInfoList('/tags', {})
        .then(response => {
          var data;
          data = response.data;
          this.options = data;
          this.loadCurrentTags();
        })
        .catch(err => {
          this.fetchSuccess = false;
          console.log(err);
        });
    },
    loadCurrentTags() {
      this.value = [];
      // for (var op of this.options) {
      //   for (var tag of this.tagsIn) {
      //     if (tag === op.tagID) {
      //       this.value.push(op);
      //     }
      //   }
      // }
      var ctags = this.$route.query.tags;
      // console.log(ctags)
      // console.log(typeof ctags)
      // console.log(Array.isArray(ctags))
      // console.log(typeof ctags === 'string')
      // if (typeof ctags === 'array') {
      if (Array.isArray(ctags)) {
        // console.log(this.value)
        for (var op of this.options) {
          for (var tag of ctags) {
            if (tag === op.tagID) {
              this.value.push(op);
            }
          }
        }
      } else if (typeof ctags === 'string') {
        for (op of this.options) {
          if (ctags === op.tagID) {
            this.value.push(op);
          }
        }
      }
      // console.log(this.value)
      this.changeQuery(this.value);
    },
    changeQuery(value, id) {
      var q = '/infosbytags?'
      for (var i = 0; i < value.length; i++) {
        q += 'tags=' + value[i].tagID
        if (i < value.length - 1) {
          q += '&'
        }
      }
      this.queryPage = q
      if (value.length === 0) {
        this.queryPage = '/'
      }
    }
  }
};
</script>

<!-- New step!
     Add Multiselect CSS. Can be added as a static asset or inside a component. -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>

</style>