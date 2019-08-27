<template>
      <!-- <router-link :to="{name: 'tag', params: {tagID: tag.tagID}}" 
      class="badge badge-secondary badge-pill">
        {{ tag.label }}
      </router-link> -->
      <router-link :to="{name: 'tag', params: {tagID: tag.tagID}}" 
      class="mr-1 badge badge-secondary"
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
