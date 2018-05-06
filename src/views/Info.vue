<template>
  <div style="min-height:800px">
    <b-container class="mb-4">
      <!-- <b-list-group> -->
      <!-- <b-list-group-item class="flex-column align-items-start"> -->
      <div>
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ info.title }}</h5>
          <!-- <small class="text-muted">{{ info.postAt}}</small> -->
        </div>
        <!-- <p>{{ info.description }}</p> -->
        <!-- </b-list-group-item> -->
        <!-- </b-list-group> -->
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
            <small class="text-muted">{{ info.modifiedAt.slice(0,10) }}&nbsp; {{ info.modifiedAt.slice(11,16) }}</small>
          </b-col>
        </b-row>
        <p class="pt-2 mb-1"> {{ info.description }}</p>
        <b-row>
          <b-col>
            <tag-item v-for="tag in info.tags" :tag="tag" :key="tag.tagID"></tag-item>
          </b-col>
          <b-col align="right">
            <origin-link :originURL="info.url"></origin-link>
          </b-col>
        </b-row>
      </div>
    </b-container>

  <b-container style="max-width: 800px">
    <Adsense
      data-ad-client="ca-pub-2678947276108257"
      data-ad-slot="3128485521">
    </Adsense>
  </b-container>

    <b-container>
      <hr/>
      <h5>You might be interested</h5>
      <b-list-group>
        <router-link class="list-group-item flex-column align-items-start list-group-item-action" v-for="infoR in recommendedInfos"
          :key="infoR.key" :to="{name: 'info', params: {infoKey: infoR.key}}">
          {{ infoR.title }}
          <tag-item v-for="tag in infoR.tags" :tag="tag" :key="tag.tagID"></tag-item>
        </router-link>
      </b-list-group>
    </b-container>
    <!-- <b-container>
      <div class="comments">
        <vue-disqus shortname="linkedinfo-1"
          :identifier="info.key"></vue-disqus>
      </div>
    </b-container> -->
  </div>
</template>

<script>
  // import VueDisqus from 'vue-disqus'
  import Layout from '@/views/Layout'
  import {
    TagItem,
    OriginLink
  } from './components'
  import {
    getInfo,
    getRecommendedInfos
  } from '@/api/infos';

  export default {
    name: 'Info',
    components: {
      Layout,
      TagItem,
      OriginLink
      // VueDisqus
    },
    data() {
      return {
        info: { modifiedAt: '' },
        recommendedInfos: []
      };
    },
    created() {
      // alert(this.$route.params.infoKey)
      this.fetchData();
    },
    watch: {
      '$route'(to, from) {
        /* this.fetchData(to.path, to.query.offset); */
        this.fetchData();
      }
    },
    methods: {
      fetchData() {
        getInfo(this.$route.params.infoKey)
          .then(response => {
            var data;
            data = response.data;
            this.info = data.content[0];
          })
          .catch(err => {
            this.fetchSuccess = false;
            console.log(err);
          });
        getRecommendedInfos(this.$route.params.infoKey)
          .then(response => {
            var data;
            data = response.data
            this.recommendedInfos = data.content;
          })
          .catch(err => {
            this.fetchSuccess = false;
            console.log(err);
          });
      }
    }
  };

</script>
