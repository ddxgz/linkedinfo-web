<template>
<!-- <b-container> -->

       <router-link to="about" class="badge badge-secondary badge-pill">
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
  props: ['tag']
};
</script>
