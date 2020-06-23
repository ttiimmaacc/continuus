<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark" sticky=true >
    <!-- Brand img -->
  <b-navbar variant="faded" type="dark">
    <b-navbar-brand href="#">
      <img left height="16px" alt="logo" src="~@/assets/navlogo.png" >
    </b-navbar-brand>
  </b-navbar>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">TRACK SYSTEMS</b-nav-item>
        <b-nav-item href="#">CONTACT</b-nav-item>
        <b-nav-item href="#" disabled><img height="20px" alt="logo" src="~@/assets/instagram.png"></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
