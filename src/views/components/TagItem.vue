<template>
<!-- <b-container> -->
  <!-- <div class="TagList"> -->
    <b-badge pill 
      :key="tag.tagID" :href="'/tags/' + tag.tagID"
      variant="secondary">
        {{ tag.label }}
    </b-badge>
  <!-- </div> -->
<!-- </b-container> -->
</template>

<script>
// import { getTags } from '@/api/infos';

export default {
  name: 'TagItem',
  props: ['tag']
};
</script>
