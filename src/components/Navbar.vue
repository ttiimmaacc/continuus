<template>

  <b-navbar class="" toggleable="lg" type="dark">
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
        <b-nav-item href="#"><img height="20px" alt="logo" src="~@/assets/instagram.png" class="ig"></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style>
.navbar-nav{
  /* flex-direction: row!important; */
  /* position: relative!important; */
}
.navbar-collapse{margin-bottom: 0px;}
.navbar-nav .nav-link{
  padding-right:0.5rem!important;
  padding-left:0.5rem!important;

}
.ig{
  margin-top: -2px!important;
}

</style>
