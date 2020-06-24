<template>
  <div>
    <b-jumbotron id="bg-img" class=" text-white text-left rgba-stylish-strong py-5 px-4" fluid>

      <b-container class="stroke">
        <b-row class="mt-50 mb-5">
          <b-col cols="12" md="6">
          <h1><img alt="Vue logo" src="~@/assets/logo-hero.png" width="400px"></h1>
            <h4 class="">MODULAR PUMP TRACKS</h4>
            <p  class="">Continuus specialise. Wedesign and build modular pump tracks for indoor and outdoor enviroments. Helping children of all ages to stay active while enjoying the ride. Designed and manufactured in Canada.</p>
            <b-button variant="primary" href="#">CONTACT US</b-button>
            <b-link href="#">LEARN MORE</b-link>
          </b-col>
          </b-row>

          <b-row>
              <b-col cols="8">
                <b-row class="mt-60">
                  <b-col md="6" sm="12"><h6>DEFINITION</h6><h2>CONTINUUS</h2><p class="">/CON-TIN-UUS/ (LATIN)</p></b-col>
                  <b-col md="6" sm="12" class="mt-6"><h6>1. forming an unbroken whle, without interruption</h6></b-col>
                </b-row>
              </b-col>
              <b-col cols="4" class="mt-7"><img alt="icon logo" src="~@/assets/Icon-logo.png" width="340px"></b-col>
            </b-row>

    </b-container>
    </b-jumbotron>
  </div>
</template>
<style>

#bg-img {
  background-image: linear-gradient(204.41deg, rgba(0, 0, 0, 0.49) 56.43%, rgba(0, 0, 0, 0.71) 88.88%), url('~@/assets/ramp-stroke.png'), url('~@/assets/bg-hero.png');
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
  margin-bottom: 0px!important;
}
.mt-7{
  margin-top:7rem;
}
.mt-6{margin-top:5rem;}
</style>
