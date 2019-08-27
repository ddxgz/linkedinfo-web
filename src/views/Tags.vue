<template>
<b-container>
<b-container class="mb-3">
    <b-button-group >
      <!-- <b-button @click="updateTagsOrderByQuantity" variant="outline-secondary">Quantity: high to low</b-button> -->
      <!-- <b-button @click="updateTagsOrderByAlphabet" variant="outline-secondary">Alphabet: A to Z</b-button> -->
    <router-link 
      :to="{name: 'tags', query: {order: 'quantity'}}" 
      class="btn btn-outline-secondary">Quantity: high to low</router-link>
    <router-link 
      :to="{name: 'tags', query: {order: 'alphabet'}}" 
      class="btn btn-outline-secondary">Alphabet: A to Z</router-link>
    </b-button-group>
</b-container>

    <div v-if="loading" class="mb-2" align="center"> Loading... </div>

<b-container>
    <tag-item v-for="tag in tags" :tag="tag" :key="tag.tagID" bigTag="true"></tag-item>
</b-container>
</b-container>
</template>

<script>
// import Navbar from '@/components/Navbar'
import Layout from '@/views/Layout'
// import { TagList } from './components'
import { TagItem } from './components'
import { getTags } from '@/api/infos';

export default {
  name: 'tags',
  components: { Layout, TagItem, getTags },
//   components: {
//     Navbar,
//     InfoList
//   }
  data() {
    return {
      tags: [],
      order: '',
      loading: true
    };
  },
  created() {
    document.title = 'Tags | Linkedinfo.co';
    this.fetchData();
  },
  watch: {
    '$route'(to, from) {
      this.fetchData(to.query.order);
      this.loading = true;
    }
  },
  methods: {
    fetchData(order) {
      getTags(order)
        .then(response => {
          this.loading = false
          this.tags = response.data;
          // alert("in created");
          // alert(response.data.content[0].title.toString());
        })
        .catch(err => {
          this.fetchSuccess = false;
          console.log(err);
        });
    // },
    // updateTagsOrderByQuantity() {
    //   this.fetchData('quantity');
    // },
    // updateTagsOrderByAlphabet() {
    //   this.fetchData('alphabet');
    }
  }
}
</script>