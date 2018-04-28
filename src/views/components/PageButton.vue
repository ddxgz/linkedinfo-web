<template>
<div>
<!-- <b-pagination size="md" :total-rows="quantity"
  v-model="currentPage" :per-page="perPage">
</b-pagination> -->
<div align="right">
  <b-button-group>
    <!-- <b-button v-if="respMeta.offset > 0" :href="respMeta.rel_prev">Prev</b-button> -->
    <!-- <router-link v-if="respMeta.offset > 0" :to="{path:'infos',query:{offset:respMeta.prev}}" tag="b-button">Prev</router-link> -->
    <!-- <router-link v-if="respMeta.offset > 0" :to="{path:this.pathIn,query:{offset:respMeta.prev}}" tag="b-button" class="btn btn-outline-secondary">Prev</router-link> -->
    <!-- <router-link v-if="respMeta.offset > 0" :to="{path:this.pathIn,query:{offset:respMeta.prev}}" class="btn btn-outline-secondary">Prev</router-link> -->
    <!-- <router-link v-if="respMeta.offset > 0" :to="{path:this.respMeta.rel_prev}" class="btn btn-outline-secondary">Prev</router-link> -->
    <router-link 
      :to="{path:this.relPrev}" 
      :class="{ disabled: hasNoPrev }"
      class="btn btn-outline-secondary">Prev</router-link>
    <!-- <b-button v-else disabled variant="outline-secondary">Prev</b-button> -->
    <!-- <b-button v-if="respMeta.offset < respMeta.quantity" :href="respMeta.rel_next">Next</b-button> -->
    <!-- <router-link v-if="respMeta.offset < respMeta.quantity" :to="{path:'infos',query:{offset:respMeta.next}}" tag="b-button">Next</router-link> -->
    <!-- <router-link v-if="respMeta.offset < respMeta.quantity" :to="{path:this.pathIn,query:{offset:respMeta.next}}" class="btn btn-outline-secondary">Next</router-link> -->
    <router-link 
      :to="{path:this.relNext}" 
      :class="{ disabled: hasNoNext }"
      class="btn btn-outline-secondary">Next</router-link>
    <!-- <b-button v-else disabled>Next</b-button> -->
  </b-button-group>
</div>
</div>
</template>

<script>
  export default {
    name: 'InfoList',
    // components: { TagItem, OriginLink },
    props: {
      hasNoPrev: {
        type: Boolean,
        default: false
      },
      hasNoNext: {
        type: Boolean,
        default: false
      },
      relPrev: {
        type: String,
        default: ''
      },
      relNext: {
        type: String,
        default: ''
      }
    }
  };
</script>
