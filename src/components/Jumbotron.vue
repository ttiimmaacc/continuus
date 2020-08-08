<template>

    <b-jumbotron id="bg-img" class="text-white text-left rgba-stylish-strong py-5 px-4">

      <b-container fluid>
        <div class="heroparent mt-7">
          <div class="heroitem row" style="background:; background-size: ;"></div>
          <!-- <parallax fixed=true> -->
          <div class="heroitem herolast row">
            <h1 v-prlx="{ speed: 0.08, reverse: true }" class="headertext my-auto">Engage and excite riders of all ages and wheels with Continuus</h1>



          </div>

        <!-- </parallax> -->
        </div>
        <div class="mt-6">
          <p class="def">/CON-TIN-US/ (LATIN)<br /> forming an unbroken whole; without interruption.</p>

        </div>

    </b-container>
    </b-jumbotron>

</template>
<style>
.def {
  font-family: "Avenir Next";
  font-size: 13px;
  font-weight: 700;
  color: darkgray;
  margin-left:30px;
}

#bg-img {
  background-image: linear-gradient(204.41deg, rgba(0, 0, 0, 0.49) 96.43%, rgba(0, 0, 0, 0.71) 98.88%), url('~@/assets/Group 35.png');
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
  margin-top: -137px!important;
  margin-bottom: 0px!important;
  /* height: 110vh!important; */
}
.mt-7{
  margin-top:7rem;
}
.mt-6{margin-top:4.5rem;}
.heroparent {
  display: flex;
  font-family: arial, sans-serif;
}

.heroitem {
  width: 50%;
  padding: 2em;
  color: #ffffff;
  /* background: #eeeeee; */
  min-height: 500px;
  text-align: left;
}

.herolast {
  color: #FFF;
  /* background: #ccc; */
}
/*
@media screen and (max-width: 600px){

  .parent {
    flex-direction: column-reverse;
  }

  .item {
    width: auto;
    min-height: 200px;
  }

  .last {
    background: #aa0000;
  }

} */

@media screen and (max-width: 991px){

  .heroparent {
    flex-direction: column-reverse;
  }

  .heroitem {
    width: auto;
    min-height: 200px;
  }

  .herolast {
    background: #aa0000;
  }

}

.headertext {
      font-family: Minion Pro;
      font-weight:600;
      font-size:48px;
      line-height: 48px;
      width:80%;
      margin-left: 70px;
    }
    .mt-7{margin-top:22rem;}

    .start-button.animate {
      animation: draw-line 3.5s forwards infinite cubic-bezier(.76,0,.3,1);
    }


/* .img-container{overflow: hidden;} */
</style>
