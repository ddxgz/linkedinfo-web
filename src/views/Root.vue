<template>
  <div>
    <!-- <navbar></navbar> -->
    <b-container>
      <b-row>
        <b-col cols="12" md="8">
          <info-list></info-list>
        </b-col>
        <b-col cols="6" md="4">
          <!-- <info-list></info-list> -->
          <h5>Feeling Lucky</h5>
          <b-list-group>
            <b-list-group-item v-for="info in randomInfos" :href="'infos/' + info.key" :key="info.key" v-html="info.title">
            </b-list-group-item>
          </b-list-group>

          <h5>Tags</h5>
          <div id="vmRandomTagList" class="ui relaxed list">
            <!-- <a v-for="item in infoResp" :href="'/tags/'+item.tagID" class="ui grey circular label" style="margin-bottom: 5px;"> -->
            <!-- ${ item.label } -->
            <!-- </a> -->

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
    TagItem
  } from './components'
  import {
    getRandomTags,
    getRandomInfos
  } from '@/api/infos';

  export default {
    name: 'root',
    components: {
      Layout,
      InfoList,
      TagItem
    },
    data() {
      return {
        randomTags: [],
        randomInfos: []
      };
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
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
