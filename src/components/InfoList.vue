<template>
<div class="infoList">
 <b-list-group>
  <b-list-group-item 
    v-for="info in infos" :key="info.key" :href="'/infos/' + info.key" 
      class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ info.title }}</h5>
      <small class="text-muted">{{ info.modifiedAt.slice(0,10) }}</small>
    </div>
    <small class="text-muted"
      v-for="creator in info.creators" :key="creator.creatorID" 
      :href="'/creators/' + creator.creatorID">
        by {{ creator.label }}
    </small>
    <b-badge pill 
      v-for="tag in info.tags" :key="tag.tagID" :href="'/tags/' + tag.tagID"
      variant="secondary">
        {{ tag.label }}
    </b-badge>
  </b-list-group-item>
</b-list-group>
</div>
</template>

<script>
import { getInfos } from '@/api/infos';

export default {
  name: 'infoList',
  data() {
    return {
      infos: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getInfos()
        .then(response => {
          this.infos = response.data.content;
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
