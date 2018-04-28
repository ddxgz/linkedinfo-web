<template>
  <div>
    <b-list-group>
      <router-link class="list-group-item flex-column align-items-start list-group-item-action" 
        v-for="info in infos" 
        :key="info.key"
        :to="{name: 'info', params: {infoKey: info.key}}">
        <div class="d-flex w-100 justify-content-between">
          <!-- <h5 class="mb-1"><router-link to="about">{{ info.title }}</router-link></h5> -->
          <h6 class="mb-1">{{ info.title }}</h6>
          <!-- <small class="text-muted">{{ info.modifiedAt.slice(0,10) }}</small> -->
        </div>
        <!-- <small class="text-muted"
         v-for="creator in info.creators" :key="creator.creatorID">
         by <a :href="'/creators/' + creator.creatorID">{{ creator.label }}</a>
         </small> -->
        <small class="text-muted" 
            v-for="creator in info.creators" 
            :key="creator.creatorID">
          by
          <router-link 
            :to="{name: 'author', params: {authorID: creator.creatorID}}">
            {{ creator.label }}
          </router-link>
        </small>
        <tag-item   
            v-for="tag in info.tags" 
            :tag="tag" 
            :key="tag.tagID"></tag-item>
        <p v-if="showDesc">{{ info.description }}</p>
        <origin-link 
            :originURL="info.url" 
            size="sm" variant="outline-danger"></origin-link>
        <!-- </b-list-group-item> -->
      </router-link>
    </b-list-group>
  </div>
</template>

<script>
  import TagItem from './TagItem';
  import OriginLink from './OriginLink';

  export default {
    // name: 'InfoList',
    components: { TagItem, OriginLink },
    props: {
      infos: {
        type: Array,
        default: function() {
          return [];
        }
      },
      showDesc: {
        type: Boolean,
        default: false
      }
    }
  };
</script>
