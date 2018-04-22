<template>
<div>
 <b-list-group>
  <b-list-group-item 
    v-for="info in infos" :key="info.key" :href="'/infos/' + info.key" 
      class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ info.title }}</h5>
      <!-- <small class="text-muted">{{ info.modifiedAt.slice(0,10) }}</small> -->
    </div>
    <small class="text-muted"
      v-for="creator in info.creators" :key="creator.creatorID">
        by <a :href="'/creators/' + creator.creatorID">{{ creator.label }}</a>
    </small>
    <!-- <b-badge pill 
      v-for="tag in info.tags" :key="tag.tagID" :href="'/tags/' + tag.tagID"
      variant="secondary">
        {{ tag.label }}
    </b-badge> -->
    <tag-item v-for="tag in info.tags" :tag="tag" :key="tag.tagID"></tag-item>
    <!-- <tag-list :tags="info.tags"></tag-list> -->
    <b-button :href="info.url" size="sm" variant="outline-danger" right>
      Original Link
    </b-button>
  </b-list-group-item>
</b-list-group>
<!-- <b-pagination size="md" :total-rows="quantity" 
  v-model="currentPage" :per-page="perPage">
</b-pagination> -->
  <b-button-group>
    <b-button v-if="offset > 0" :href="relPrev">Prev</b-button>
    <b-button v-else disabled>Prev</b-button>
    <b-button v-if="offset < quantity" :href="relNext">Next</b-button>
    <b-button v-else disabled>Next</b-button>
  </b-button-group>
</div>
</template>

<script>
// import TagList from './TagList';
import TagItem from './TagItem';
import { getInfos } from '@/api/infos';

export default {
  name: 'InfoList',
  // components: { TagList, Tag },
  components: { TagItem },
  data() {
    return {
      infos: [],
      quantity: 0,
      perPage: 10,
      offset: 0,
      relSelf: '',
      relPrev: '',
      relNext: '',
      currentPage: 1
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getInfos()
        .then(response => {
          var data;
          data = response.data
          this.infos = data.content;
          this.quantity = data.quantity;
          this.perPage = data.perPage;
          this.offset = data.offset;
          this.relSelf = data.rel_self;
          this.relPrev = data.rel_prev;
          this.relNext = data.rel_next;
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
