<template>
<!-- <div class="navbar navbar-expand-lg"> -->
  <div class="bg-dark">
<b-container>
  <!-- <b-navbar toggleable="md" type="light" variant="faded" fixed="top"> -->
  <!-- <b-navbar toggleable="md" type="dark" variant="faded"> -->
      <b-navbar type="dark" toggleable="md">

    <router-link to="/" class="navbar-brand">
      <!-- <img src="/static/images/linkicon.png" width="30" height="30" class="d-inline-block align-top" alt=""> -->
      LinkedInfo
    </router-link>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <!-- <b-navbar-brand href="#/">NavBar</b-navbar-brand> -->

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <!-- <b-nav-item href="#">Infos</b-nav-item> -->
        <!-- <b-nav-item href="#">Tags</b-nav-item> -->
        <!-- <b-nav-item href="#">Random</b-nav-item> -->
        <!-- <b-nav-item href="about">Link</b-nav-item> -->
        <router-link to="/infos" tag="li" class="nav-item">
          <a class="nav-link">Infos</a>
        </router-link>
        <router-link to="/tags" tag="li" class="nav-item">
          <a class="nav-link">Tags</a>
        </router-link>
        <router-link to="/randominfos" tag="li" class="nav-item">
          <a class="nav-link">Random</a>
        </router-link>
        <router-link to="/subs" tag="li" class="nav-item">
      <!-- <i class="fas fa-rss-square"></i>   -->
          <a class="nav-link">Subs</a>
        </router-link>
        <router-link to="/about" tag="li" class="nav-item">
          <a class="nav-link">About</a>
        </router-link>
        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" align="right">

        <!-- <b-nav-item-dropdown text="Language" right>
          <b-dropdown-item href="#">Both</b-dropdown-item>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">CN</b-dropdown-item>
        </b-nav-item-dropdown> -->
            <!-- <b-form-select v-model="selectedLan" :options="languages" class="dropdown-toggle" size="sm" /> -->

        <b-nav-item-dropdown 
          v-model="selectedLan" 
          :options="languages" 
          :text="currentLan" no-caret right>
           <template slot="button-content">
            <!-- <i class="fas fa-globe fa-lg"></i>  -->
            <i class="fas fa-language fa-lg"></i> 
            : {{currentLan}}
            </template>
          <b-dropdown-item 
            v-for="lan in languages" 
            :key="lan.value"
            v-on:click="changeLan(lan)">
              {{ lan.text }}
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <!-- <b-nav-item-dropdown right>
             <template slot="button-content">
               <em>User</em>
             </template>
             <b-dropdown-item href="#">Profile</b-dropdown-item>
             <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <b-nav-form>
          <!-- <b-form-input size="sm" class="mr-sm-2" type="text" 
            placeholder="Search by text"
            v-on:keyup.enter="submitSearch"
            v-model="searchString"/> -->
          <input size="sm" class="mr-sm-1" type="text" 
            placeholder="Search by text"
            v-on:keyup.enter="submitSearch"
            v-model="searchString"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit"
            :to="{path:'/searchResult', query: {qs: searchString}}">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</b-container>
</div>
</template>

<script>
// import cookie from '@/utils/cookie'
import {getCookie, setCookie} from '@/utils/cookie'

export default {
  name: 'Navbar',
  data() {
    return {
      searchString: '',
      languages: [
        {value: 'en', text: 'EN'},
        {value: 'cn', text: '中文'},
        {value: 'encn', text: 'Both'}
      ],
      selectedLan: 'Both'
    }
  },
  computed: {
    currentLan: function() {
      var lanC = getCookie('lan')
      // console.log('lan:', lanC)
      for (var lan of this.languages) {
        if (lan.value === lanC) {
          // return 'Language: ' + lan.text
          this.selectedLan = lan.text
        }
      }
      // return 'Language: ' + this.selectedLan
      return this.selectedLan
    }
  },
  methods: {
    submitSearch() {
      this.$router.push({path: '/searchResult', query: {qs: this.searchString}})
    },
    changeLan(lan) {
      function getCookieLan() {
        var lanc = getCookie('lan')
                /* alert("lanc:"+lanc) */
        // console.log('get lan cookie:', lanc)
        if (lanc === 'cn' || lanc === 'en') {
          return lanc
        }
        return 'encn'
      }

      // console.log('in changeLan')
      var lanInCookie = getCookieLan()
      if (lanInCookie !== lan.value) {
        // document.cookie = 'lan=' + lan.value;
        setCookie('lan', lan.value, 30)

        // var lanc = getCookie('lan')
        this.selectedLan = lan.text
        // console.log('get lan cookie:', document.cookie)
        location.reload();
      }
    }
  }
}
</script>

<style>
.navbar-pcx {
    height: 60px;
    /* position: sticky; */
    padding: 0px;
  /* margin: 0em 0em 0em; */
  /* padding: 0.5em 0.5em; */
  width: 100%;
  background: rgb(21,21,22);
  z-index: 1000;
}
</style>
