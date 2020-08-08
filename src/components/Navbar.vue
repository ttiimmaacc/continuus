<template>

  <b-navbar class="navbar text-white"
      :class="{ 'navbar--hidden': !showNavbar, change_color: scrollPosition > 50}"  toggleable="lg" type="dark" fixed="top">
    <!-- Brand img -->
  <b-navbar variant="faded" type="dark">
    <b-navbar-brand href="#">
      <img left height="16px" alt="logo" src="~@/assets/navlogo.png" >
    </b-navbar-brand>
  </b-navbar>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-45 text-white" style="flex-grow:1;">
        <b-nav-item href="#">TRACK SYSTEMS</b-nav-item>
        <b-nav-item href="#">CONTACT</b-nav-item>
        <b-nav-item href="#"><img height="20px" alt="logo" src="~@/assets/instagram.png" class="ig"></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

</template>
<!-- v-prlx.background="{ speed: 0.08 }" -->
<style>
.navbar {
  /* height: 60px; */
  /* width: 100vw; */

  position: fixed;
  /* box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5); */
  transform: translate3d(0, 0, 0);
  transition: 0.3s all ease-out;
}
.navbar--hidden {
  /* box-shadow: none; */
  transform: translate3d(0, -100%, 0);
  background: #000;
}

.fixed-top {top:87px;}

.navbar-nav{
  /* flex-direction: row!important; */
  /* position: relative!important; */
}
.navbar-collapse{margin-bottom: 0px;}
.navbar-nav .nav-link{
  padding-right:0.5rem!important;
  padding-left:0.5rem!important;
}
.navbar {margin-left: 10px; margin-right:10px;}
.ig{
  margin-top: -2px!important;
}
.navbar{
  padding: 25px!important;
}

.ml-45{
margin-left: 13%;
}
.nav-item{flex: 0 0 33%; text-align: right;}
.nav-link{font-family: "Avenir Next";
font-size: 13px;
font-weight: 700;
}

.change_color {
      background-color:red
  }

</style>

<script>
const OFFSET = 60
export default ({
  data () {
    return {
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll () {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  }
})
</script>
