<template>
<div class="navbar">
  <b-navbar toggleable="md" type="light" variant="faded">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">NavBar</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#">Link</b-nav-item>
      <!-- <b-nav-item href="about">Link</b-nav-item> -->
      <router-link to="/about" tag="b-nav-item">
        <a>About</a>
      </router-link>
      <router-link to="/about" tag="b-nav-item">About</router-link>
      <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">Both</b-dropdown-item>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">CN</b-dropdown-item>
      </b-nav-item-dropdown>

      <!-- <b-nav-item-dropdown right>
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown> -->
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</div>
</template>


<style>
.navbar {
  /* height: 100px; */
  position: sticky;
  /* padding: 20px; */
  /* height: 300px; */
  z-index: 1000;
}
</style>