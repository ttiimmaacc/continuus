<template>

    <b-jumbotron id="bg-img" class="text-white text-left rgba-stylish-strong py-5 px-4" fluid>

      <b-container>
        <b-row class="mt-50 mb-5">
          <b-col cols="12" md="6">
          <img class="img-fluid" alt="logo" src="~@/assets/logo-hero.png" >
            <h4 class="font-italic mt-1 font-weight-light">MODULAR PUMP TRACKS</h4>
            <p  class="mt-4">Continuus specialise. We design and build modular pump tracks for indoor and outdoor enviroments. Helping children of all ages to stay active while enjoying the ride.</p>
            <p>Designed and manufactured in Canada.</p>
            <b-button variant="outline-white" href="#"><small>CONTACT US</small></b-button>
            <b-link class="ml-3 text-white" href="#"><small>LEARN MORE</small></b-link>
          </b-col>
          </b-row>

          <b-row>
              <b-col cols="8">
                <b-row class="mt-60">
                  <b-col md="6" sm="12"><h6 class="font-weight-light">DEFINITION</h6><h2 class="font-italic">CONTINUUS</h2><p class="text-dark">/CON-TIN-UUS/ (LATIN)</p></b-col>
                  <b-col md="6" sm="12" class="mt-6"><h6>1. forming an unbroken whle, without interruption</h6></b-col>
                </b-row>
              </b-col>
              <b-col cols="4" class="mt-7 img-container"><img alt="icon logo" src="~@/assets/Icon-logo.png" width="340px"></b-col>
            </b-row>

    </b-container>
    </b-jumbotron>

</template>
<style>

#bg-img {
  background-image: linear-gradient(204.41deg, rgba(0, 0, 0, 0.49) 56.43%, rgba(0, 0, 0, 0.71) 88.88%), url('~@/assets/stroke-outline.png'), url('~@/assets/bg-hero.png');
  min-height: 110vh;
  background-size: cover;
}
.mt-60{
  margin-top:60%;
}
.mt-50{
  margin-top:15%;
}
.jumbotron{
  /* margin-top: -75px!important; */
  margin-bottom: 0px!important;
  /* height: 110vh!important; */
}
.mt-7{
  margin-top:7rem;
}
.mt-6{margin-top:5rem;}

/* .img-container{overflow: hidden;} */
</style>
