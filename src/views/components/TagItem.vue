<template>
      <!-- <router-link :to="{name: 'tag', params: {tagID: tag.tagID}}" 
      class="badge badge-secondary badge-pill">
        {{ tag.label }}
      </router-link> -->
      <router-link :to="{name: 'tag', params: {tagID: tag.tagID}}" 
      class="mr-1 badge badge-tag"
      :class="{'mb-1': bigTag }"
      :style="{'fontSize': fontSize}">
        {{ tag.label }} 
      </router-link>

    <!-- <b-badge pill -->
    <!--   :key="tag.tagID" :href="'/tags/' + tag.tagID" -->
    <!--   variant="secondary"> -->
    <!--     {{ tag.label }} -->
    <!-- </b-badge> -->

<!-- </b-container> -->
</template>

<script>
// import { getTags } from '@/api/infos';

export default {
  name: 'TagItem',
  props: {
    tag: {},
    bigTag: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    fontSize: function() {
      if (this.bigTag) {
        return '1em'
      }
    }
  }
};
</script>

<style scoped>
        .badge-tag {
            /* background-color: #e1ecf4;
            color: #4279a2; */
            background-color: rgb(237, 246, 254);
            color: rgb(63, 148, 247);
            font-weight: normal;
            border-radius: 3px;
            padding: .4em .4em;
            font-size: 13px;
        }

        .badge-tag:focus,
        .badge-tag.focus {
            /* background-color: #0490f3;
            color: #517c9c; */
        }

</style>