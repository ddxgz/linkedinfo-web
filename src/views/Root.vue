<template>
  <div>
    <!-- <navbar></navbar> -->
    <b-container>
      <multi-query></multi-query>
      <b-row>
        <b-col cols="12" md="8">
          <info-list
            :infos="infos"></info-list>
          <!-- <paged-info-list :showDesc=true
             :pathIn="'infosbytags'"
             :offsetIn=this.$route.query.offset></paged-info-list> -->
        </b-col>
        <b-col cols="6" md="4">
          <!-- <info-list></info-list> -->
          <h5>Feeling Lucky</h5>
          <b-list-group>
            <!-- <b-list-group-item v-for="info in randomInfos" :href="'infos/' + info.key" :key="info.key" v-html="info.title"> -->
            <!-- </b-list-group-item> -->
            <router-link class="list-group-item flex-column align-items-start list-group-item-action" v-for="info in randomInfos" :key="info.key"
              :to="{name: 'info', params: {infoKey: info.key}}">{{ info.title }}</router-link>
          </b-list-group>

          <p/>
          <h5>Tags</h5>
          <div id="vmRandomTagList" class="ui relaxed list">
            <tag-item v-for="tag in randomTags" v-bind:tag="tag" v-text="tag.label" :key="tag.tagID" v-bind:href="'/tags/'+tag.tagID">
            </tag-item>
          </div>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  // import Navbar from '@/components/Navbar'
  import Layout from '@/views/Layout'
  import {
    InfoList,
    TagItem,
    MultiQuery
  } from './components'
  import {
    getInfoList,
    getRandomTags,
    getRandomInfos
  } from '@/api/infos';

  export default {
    name: 'root',
    components: {
      Layout,
      InfoList,
      TagItem,
      MultiQuery
    },
    data() {
      return {
        infos: [],
        respMeta: {},
        randomTags: [],
        randomInfos: []
      };
    },
    created() {
      this.fetchInfos();
      this.fetchSide()
    },
    methods: {
      fetchInfos(path, offset) {
        /* getInfos(this.offsetCurrent) */
        // alert(path)
        getInfoList(path, offset)
          .then(response => {
            var data;
            data = response.data
            this.infos = data.content;
            this.respMeta = data.meta;
          })
          .catch(err => {
            this.fetchSuccess = false;
            console.log(err);
          });
      },
      fetchSide() {
        getRandomTags(22)
          .then(response => {
            this.randomTags = response.data;
          })
          .catch(err => {
            this.fetchSuccess = false;
            console.log(err);
          });
        getRandomInfos(3)
          .then(response => {
            this.randomInfos = response.data.content;
          })
          .catch(err => {
            this.fetchSuccess = false;
            console.log(err);
          });
      }
    }
  }

</script>
