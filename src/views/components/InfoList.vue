<template>
  <div>
    <div v-if="loading" class="mb-2" align="center"> Loading... </div>
    <b-list-group>
      <!-- <router-link class="list-group-item flex-column align-items-start list-group-item-action" v-for="info in infos" :key="info.key"
           :to="{name: 'info', params: {infoKey: info.key}}"> -->
      <b-list-group-item v-for="info in infos" :key="info.key">
        <div class="d-flex w-100 justify-content-between">
          <!-- <h5 class="mb-1"><router-link to="about">{{ info.title }}</router-link></h5> -->
          <!-- <h6 class="mb-1">{{ info.title }}</h6> -->
          <router-link class="title-info" :to="{name: 'info', params: {infoKey: info.key}}">{{ info.title }}</router-link>

        </div>
        <!-- <small class="text-muted"
             v-for="creator in info.creators" :key="creator.creatorID">
             by <a :href="'/creators/' + creator.creatorID">{{ creator.label }}</a>
             </small> -->
        <!-- <b-row> -->
        <!-- <div class="d-flex w-100 justify-content-between"> -->
        <!-- </b-row> -->
        <!-- </div> -->
        <b-row>
          <b-col>
            <small class="text-muted" v-for="creator in info.creators" :key="creator.creatorID">
              by
              <router-link :to="{name: 'author', params: {authorID: creator.creatorID}}">
                {{ creator.label }}
              </router-link>
            </small>
          </b-col>
          <b-col align="right">
            <small v-if="showDate" class="text-muted"><i class="far fa-clock"></i>   {{ info.modifiedAt.slice(0,10) }}</small>
          </b-col>
        </b-row>
        <p class="pt-2 mb-1" v-if="showDesc"> {{ info.description }}</p>
        <b-row>
          <b-col>
            <tag-item v-for="tag in info.tags" :tag="tag" :key="tag.tagID"></tag-item>
          </b-col>
          <b-col align="right">
            <origin-link :originURL="info.url"></origin-link>
          </b-col>
        </b-row>
        <!-- <div class="pt-2"> -->
        <!-- </div> -->
      </b-list-group-item>
      <!-- <div align="right"> -->
      <!-- </div> -->
      <!-- </router-link> -->
    </b-list-group>
  </div>
</template>

<script>
  import TagItem from './TagItem';
  import OriginLink from './OriginLink';

  export default {
    // name: 'InfoList',
    components: {
      TagItem,
      OriginLink
    },
    props: {
      infos: {
        type: Array,
        default: function() {
          return [];
        }
      },
      showDate: {
        type: Boolean,
        default: false
      },
      showDesc: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style scoped>
  .title-info {
    font-size: 18px;
    font-weight: 500;
    color: rgb(39, 44, 49);
  }

  .title-info:hover {
    color: rgb(88, 98, 106);
  }
</style>
