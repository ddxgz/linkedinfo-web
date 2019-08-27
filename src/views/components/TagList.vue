<template>
<b-container>
  <!-- <div class="TagList"> -->
    <b-badge pill 
      v-for="tag in tags" :key="tag.tagID" :href="'/tags/' + tag.tagID"
      variant="secondary">
        {{ tag.label }}
    </b-badge>
  <!-- </div> -->
</b-container>
</template>

<script>
// import { getTags } from '@/api/infos';

//   not used, use TagItem instead!!!!//////

export default {
  name: 'TagList',
  props: ['tags']
};
</script>
