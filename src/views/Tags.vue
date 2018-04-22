<template>
<b-container>
    <tag-item v-for="tag in tags" :tag="tag" :key="tag.tagID"></tag-item>
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
      tags: []
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getTags()
        .then(response => {
          this.tags = response.data;
          // alert("in created");
          // alert(response.data.content[0].title.toString());
        })
        .catch(err => {
          this.fetchSuccess = false;
          console.log(err);
        });
    }
  }
}
</script>