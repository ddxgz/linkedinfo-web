<template>
  <div>
    <b-list-group>
      <!-- <router-link class="list-group-item flex-column align-items-start list-group-item-action" 
        v-for="book in books" 
        :key="book.key"
        :to="{name: 'book', params: {bookKey: book.key}}"> -->
      <b-list-group-item
        v-for="book in books" 
        :key="book.key">
        <b-row>
        <b-col cols="8">
        <div class="d-flex w-100 justify-content-between">
          <!-- <h5 class="mb-1"><router-link to="about">{{ book.title }}</router-link></h5> -->
          <h6 class="mb-1">{{ book.title }}</h6>
        </div>
        <!-- <small class="text-muted"
         v-for="creator in book.creators" :key="creator.creatorID">
         by <a :href="'/creators/' + creator.creatorID">{{ creator.label }}</a>
         </small> -->by 
        <small class="text-muted"> {{ book.creators }}
        </small>

        <tag-item   
            v-for="tag in book.tags" 
            :tag="tag" 
            :key="tag.tagID"></tag-item>
        <origin-link 
            :originURL="'http://www.amazom.com/'+book.amazon_dp+'?tag=linkedinfo-20'" 
            :btnText="'Amazon'"
            target="_blank" size="sm" variant="outline-danger"></origin-link>
        </b-col>

        <b-col cols="4">
        <!-- <a :href="'http://www.amazon.com/' + book.amazon_dp + '?tag=linkedinfo-20'" 
          target="_blank">  -->
          <b-img 
             fluid-grow alt="Fluid-Grow image"
            :src="'/static/images/books/amazon/' + book.amazon_dp + '.jpeg'"/>
        <!-- </a> -->
        </b-col>
        </b-row>
        </b-list-group-item>
      <!-- </router-link> -->
    </b-list-group>
  </div>
</template>

<script>
  import TagItem from './TagItem';
  import OriginLink from './OriginLink';

  export default {
    components: { TagItem, OriginLink },
    props: {
      books: {
        type: Array,
        default: function() {
          return [];
        }
      // },
      // showDesc: {
      //   type: Boolean,
      //   default: false
      }
    }
  };
</script>
