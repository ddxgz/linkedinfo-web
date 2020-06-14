<template>
  <div>
    <!-- <navbar></navbar> -->
    <b-container>
      <multi-query></multi-query>
      <b-row>
        <b-col cols="12" lg="8" md="7" sm="12">
          <info-list :infos="infos" :showDate="true"></info-list>
          <!-- <paged-info-list :showDesc=true
             :pathIn="'infosbytags'"
          :offsetIn=this.$route.query.offset></paged-info-list>-->
          <!-- <button @click="isTriggerFirstLoad = true" v-if="!isTriggerFirstLoad">Load more</button> -->
          <!-- <infinite-loading v-else @infinite="infiniteHandler"></infinite-loading> -->
          <infinite-loading @infinite="infiniteHandler"></infinite-loading>
        </b-col>

        <b-col cols="12" lg="4" md="5" sm="12">
          <div class="mt-2">
            <Adsense data-ad-client="ca-pub-2678947276108257" data-ad-slot="6325497482"></Adsense>
          </div>

          <!-- <info-list></info-list> -->
          <h5 class="mt-3">Books</h5>
          <book-list :books="randomBooks"></book-list>

          <h5 class="mt-3">Feeling Lucky</h5>
          <b-list-group>
            <!-- <b-list-group-item v-for="info in randomInfos" :href="'infos/' + info.key" :key="info.key" v-html="info.title"> -->
            <!-- </b-list-group-item> -->
            <router-link
              class="list-group-item flex-column align-items-start list-group-item-action"
              v-for="info in randomInfos"
              :key="info.key"
              :to="{name: 'info', params: {infoKey: info.key}}"
            >{{ info.title }}</router-link>
          </b-list-group>

          <!-- <p/> -->
          <h5 class="mt-3">Tags</h5>
          <div id="vmRandomTagList" class="ui relaxed list">
            <tag-item
              v-for="tag in randomTags"
              v-bind:tag="tag"
              v-text="tag.label"
              :key="tag.tagID"
              v-bind:href="'/tags/'+tag.tagID"
              bigTag="true"
            ></tag-item>
          </div>

          <h5 class="mt-3">Share this site</h5>
          <div>
            <social-sharing
              url="https://www.linkedinfo.co"
              title="LinkedInfo.co"
              description="Utilize Semantic Web technologies to link and share articles, the Web should be an open web."
              inline-template
            >
              <div class="networks">
                <network network="email">
                  <i class="fas fa-envelope fa-lg"></i>
                </network>
                <network network="googleplus">
                  <i class="fab fa-google-plus fa-lg"></i>
                </network>
                <network network="reddit">
                  <i class="fab fa-reddit fa-lg"></i>
                </network>
                <network network="telegram">
                  <i class="fab fa-telegram fa-lg"></i>
                </network>
                <network network="twitter">
                  <i class="fab fa-twitter fa-lg"></i>
                </network>
                <network network="facebook">
                  <i class="fab fa-facebook fa-lg"></i>
                </network>
                <network network="linkedin">
                  <i class="fab fa-linkedin fa-lg"></i>
                </network>
                <network network="weibo">
                  <i class="fab fa-weibo fa-lg"></i>
                </network>
                <network network="whatsapp">
                  <i class="fab fa-whatsapp fa-lg"></i>
                </network>
                <network network="line">
                  <i class="fab fa-line fa-lg"></i>
                </network>
              </div>
            </social-sharing>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';

// import Navbar from '@/components/Navbar'
import Layout from '@/views/Layout'
import {
  InfoList,
  BookList,
  TagItem,
  MultiQuery
} from './components'
import {
  // getInfoList,
  getInfos,
  getCompoundInfos,
  getRandomTags,
  getRandomBooks,
  getRandomInfos
} from '@/api/infos';

export default {
  name: 'root',
  components: {
    BookList,
    InfiniteLoading,
    Layout,
    InfoList,
    TagItem,
    MultiQuery
  },
  data() {
    return {
      // isTriggerFirstLoad: false,
      infos: [],
      respMeta: {},
      randomTags: [],
      randomBooks: [],
      randomInfos: []
    };
  },
  computed: {
    compoundInfosOffset: function() {
      if (!this.respMeta.next || this.respMeta.next === 0) {
        return 10
      }
      return this.respMeta.next;
    }
  },
  created() {
    document.title = 'Linkedinfo.co';
    this.fetchInfos();
    this.fetchSide()
  },
  methods: {
    infiniteHandler($state) {
      // getInfoList(this.respMeta.rel_next, {})
      function arrayUnique(array) {
        var a = array.concat();
        for (var i = 0; i < a.length; ++i) {
          for (var j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j]) { a.splice(j--, 1); }
          }
        }
        return a;
      }
      // getCompoundInfos(this.respMeta.next)
      getCompoundInfos(this.compoundInfosOffset)
        .then(response => {
          var data;
          data = response.data
          if (data.content.length) {
            this.infos = arrayUnique(this.infos.concat(data.content));
            this.respMeta = data.meta;
            // console.log('meta', data.meta.next)
            $state.loaded();
            if (this.infos.length / 10 === 100) {
              $state.complete();
            }
          } else {
            $state.complete();
          }
        })
        .catch(err => {
          this.fetchSuccess = false;
          console.log(err);
        });
    },
    fetchInfos() {
      /* getInfos(this.offsetCurrent) */
      // alert(path)
      // getCompoundInfos()
      getInfos()
        .then(response => {
          var data;
          data = response.data
          this.infos = data.content;
          this.respMeta = data.meta;
          // console.log(this.respMeta.next)
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
      getRandomBooks(3)
        .then(response => {
          this.randomBooks = response.data.content;
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

 <style>
.networks {
  cursor: pointer;
}
</style>