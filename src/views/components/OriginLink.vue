<template>
    <b-button :href="originURL" size="sm" variant="outline-danger">
      {{ btnText }}
    </b-button>

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
  name: 'OriginLink',
  props: {
    originURL: String,
    btnText: {
      type: String,
      default: 'Original Link'
    }
  }
};
</script>
