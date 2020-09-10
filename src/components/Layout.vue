
<template>
  <b-container fluid>
  <div class="parent">
      <div class="item last align-self-center">
        <h1 class="heading">All wheels, <br /> all ages, all fun.</h1>
        <p class="mt-5 half-width-text">Our pump tracks are suited for all wheels and all age groups, providing excellent health and wellbeing benefits through active fun.
Pump tracks provide a unique opportunity to develop the rider's skills on a      professionally designed and engineered track. </p>
      </div>
        <div v-prlx.background="{ speed: 0.08}" class="item" id="intro"></div>
        </div>

    <div class="parent">
      <video class="videosection" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="~@/assets/videointro.mp4" type="video/mp4">
  </video>

      <!-- <div class="videoitem " id="videointro" style="background:; background-size: ;"></div> -->
      </div>





    <div class="parent">

      <div class="item last align-self-center">
        <h5 class="link-text mb-5 align-items-start">MODULAR PUMP TRACKS</h5>
        <h1 class="mt-5 heading">Complete loops</h1>
        <p class="mt-5 half-width-text">Our track system consists of rolling transitions, dips, jumps, and sweeping turns, made of timber composite or precast concrete, all modular and interchangeable, providing unlimited opportunities to create circuits suited for indoor or outdoor environments.</p>
        <p class="half-width-text">Excite riders and help your local community stay active through fun. </p>
      </div>
      <div v-prlx.background="{ speed: 0.08}" class="item" id="subintro" style="background:; background-size: ;"></div>
    </div>

    <!-- <div class="parent-white ">

      <div class="item " id="" style="">
        <img  height="800px" alt="VeloTrack" src="~@/assets/velotrack.png" class="">
      </div>
      <div class="item last-white align-self-center text-primary">
        <h5 class="link-text mb-5">EXPLORE LOOPS</h5>
        <h1 class="mt-5 heading">The VeloTrak</h1>
        <p class="mt-5 half-width-text">Our VeloTrack system consists of rolling transitions, dips, jumps, and sweeping turns, made of timber composite or precast concrete, all modular and interchangeable, providing unlimited opportunities to create circuits suited for indoor or outdoor environments.</p>
        <p class="half-width-text">Excite riders and help your local community stay active through fun. </p>
        <p class="text-white" style="text-align:right;">
          <a href="#" class="link-text">CONFIGURE<img width="30px" alt="logo" src="~@/assets/Arrowright.png" class="text-white"></a>
        </p>
      </div>
    </div> -->
    <!-- SLIDER -->
        <b-container fluid class="slidewrap">
          <div class="viewport" >
        <!-- <nav class="slidenav">
          <div class="slidenav__brand">
            <p class="link-text">EXPLORE RAMPS</p>
          </div>
          <ul class="slidenav__list">
            <li class="slidenav__list-item link-text">About</li>
            <li class="slidenav__list-item link-text">More</li>
          </ul>
        </nav> -->
        <main class="main">
          <div class="main__slider">
            <div v-for="(slide, index) of slides" :key="index">
            <transition name="fade">
            <img v-if="index === currentActiveSlide" class="main__slide-image" :src="slide.img" /></transition>
          </div>
        </div>
          <div class="main__headline heading">
            <div v-for="(slide, index) of slides" :key="index">
            <span  v-if="index === currentActiveSlide" class="main__headline-span">{{ slide.headline }}</span>
          </div>
          </div>
          <!-- <div class="main__nav">
            <p>Play Video</p>
            <ul class="social-links">
              <li class="social-links__item">
                <a href="https://facebook.com">Fb</a>
              </li>
              <li class="social-links__item">
                <a href="https://twitter.com/">Tw</a>
              </li>
              <li class="social-links__item">
                <a href="https://www.linkedin.com/">In</a>
              </li>
            </ul>
          </div> -->
        </main>
        <div class="aside__nav">
          <div class ="d-inline-flex w-100 justify-content-between align-middle">
          <button class="aside__button rounded-circle" @click="handleSlideChange(-1)">←</button>
          <!-- <div class="">spacer</div> -->
          <button class="aside__button rounded-circle" @click="handleSlideChange(1)">→</button>
        </div>
        </div>
        <aside class="aside ">
    <p class="mb-5 link-text">EXPLORE RAMPS</p>
          <div class="aside__slider">

            <div class="slidenav__brand">

            </div>
            <div v-for="(slide, index) of slides" :key="index">
            <span  v-if="index === currentActiveSlide" class="main__headline-span heading text-white mt-5">{{ slide.headline }}</span>
          </div>
          <div v-for="(slide, index) of slides" :key="index" style="margin-top:35px;">
          <span  v-if="index === currentActiveSlide" class="aside__info">{{ slide.info }}</span>
        </div>
            <!-- <div v-for="(slide, index) of slides" :key="index">
            <img v-if="index === nextActiveSlide" class="aside__slide-image" :src="slide.img" />
          </div> -->
          </div>
          <div class="aside__info">
            <div class="slidenav__brand">
              <p class="link-text">DESCRIPTION</p>
            </div>
            <div v-for="(slide, index) of slides" :key="index">
            <span  v-if="index === currentActiveSlide" class="aside__info">{{ slide.info }}</span>
          </div>
        </div>
          <ul class="progress-indicator" :data-slides-count="'0' + slides.length">
            <li v-for="(slide,index) of slides" :key="index" :class="index === currentActiveSlide ? 'progress-indicator__bar  progress-indicator__bar--active' : 'progress-indicator__bar'"></li>
          </ul>
        </aside>
      </div>
      </b-container>

    <!-- <b-container fluid class="slidewrap">
      <div class="viewport" >
    <nav class="slidenav">
      <div class="slidenav__brand">
        <p class="link-text">MODULAR PUMP TRACKS</p>
      </div>
      <ul class="slidenav__list">
        <li class="slidenav__list-item">About</li>
        <li class="slidenav__list-item">More</li>
      </ul>
    </nav>
    <main class="main">
      <div class="main__slider"> -->
<!-- <transition name="clip-path-wipe"> -->
        <!-- <transition name="clip-path-wipe" tag="div" v-for="(slide, index) of slides" :key="index">

        <img v-if="index === currentActiveSlide" class="main__slide-image" :src="slide.img" /> -->

      <!-- </div> -->
<!-- </transition>
    </div>
      <div class="main__headline">
        <div v-for="(slide, index) of slides" :key="index">

        <span  v-if="index === currentActiveSlide" class="main__headline-span">{{ slide.headline }}</span>
      </div>
      </div>
      <div class="main__nav">
        <p>Play Video</p>
        <ul class="social-links">
          <li class="social-links__item">
            <a href="https://facebook.com">Fb</a>
          </li>
          <li class="social-links__item">
            <a href="https://twitter.com/">Tw</a>
          </li>
          <li class="social-links__item">
            <a href="https://www.linkedin.com/">In</a>
          </li>
        </ul>
      </div>
    </main>
    <aside class="aside">
      <div class="aside__nav">
        <button class="aside__button" @click="handleSlideChange(-1)">←</button><button class="aside__button" @click="handleSlideChange(1)">→</button>
      </div>
      <div class="aside__slider">
        <div v-for="(slide, index) of slides" :key="index">
        <img v-if="index === nextActiveSlide" class="aside__slide-image" :src="slide.img" />
      </div>
      </div>
      <ul class="progress-indicator" :data-slides-count="'0' + slides.length">
        <li v-for="(slide,index) of slides" :key="index" :class="index === currentActiveSlide ? 'progress-indicator__bar  progress-indicator__bar--active' : 'progress-indicator__bar'"></li>
      </ul>
    </aside>
    </div>
    </b-container> -->


    <div class="parent">
      <div class="item last align-self-center">
        <h5 class="link-text mb-5">TRACK MODULES</h5>
        <h1 class="mt-5 heading">Single Jump Ramps</h1>
        <p class="mt-5 half-width-text">Our track system consists of rolling transitions, dips, jumps, and sweeping turns, made of timber composite or precast concrete, all modular and interchangeable, providing unlimited opportunities to create circuits suited for indoor or outdoor environments.</p>
        <p class="half-width-text">Excite riders and help your local community stay active through fun. </p>
      </div>
      <div v-prlx.background="{ speed: 0.06 }" class="item " id="jumptracks" style="background:; background-size: ;"></div>


    </div>

    <!-- <div class="parent-white ">

      <div class="item " id="" style="">
        <img  height="800px" alt="VeloTrack" src="~@/assets/velotrack.png" class="">
      </div>

      <div class="item last-white align-self-center text-primary">

        <b-container class="">
        <b-row>
          <b-col>
              <h5 class="link-text mb-5">EXPLORE RAMPS</h5>
              <h1 class="mt-5 heading">The VeloTrak</h1>
              <p class="mt-5 half-width-text">Our VeloTrack system consists of rolling transitions, dips, jumps, and sweeping turns, made of timber composite or precast concrete, all modular and interchangeable, providing unlimited opportunities to create circuits suited for indoor or outdoor environments.</p>
              <p class="half-width-text">Excite riders and help your local community stay active through fun. </p>
          </b-col>
        </b-row>

          <b-row>
            <b-col cols="6"></b-col>
            <b-col cols="4"><p class="text-white" style="text-align:right;">
              <a href="#" class="link-text">CONFIGURE<img width="30px" alt="logo" src="~@/assets/Arrowright.png" class="text-white"></a>
            </p></b-col>
          </b-row>
        </b-container>
      </div>

    </div> -->

<!-- SLIDER -->
    <b-container fluid class="slidewrap">
      <div class="viewport" >
    <!-- <nav class="slidenav">
      <div class="slidenav__brand">
        <p class="link-text">EXPLORE RAMPS</p>
      </div>
      <ul class="slidenav__list">
        <li class="slidenav__list-item link-text">About</li>
        <li class="slidenav__list-item link-text">More</li>
      </ul>
    </nav> -->
    <main class="main">
      <div class="main__slider">
        <div v-for="(slide, index) of slides" :key="index">
        <transition name="fade">
        <img v-if="index === currentActiveSlide" class="main__slide-image" :src="slide.img" /></transition>
      </div>
    </div>
      <div class="main__headline heading">
        <div v-for="(slide, index) of slides" :key="index">
        <span  v-if="index === currentActiveSlide" class="main__headline-span">{{ slide.headline }}</span>
      </div>
      </div>
      <!-- <div class="main__nav">
        <p>Play Video</p>
        <ul class="social-links">
          <li class="social-links__item">
            <a href="https://facebook.com">Fb</a>
          </li>
          <li class="social-links__item">
            <a href="https://twitter.com/">Tw</a>
          </li>
          <li class="social-links__item">
            <a href="https://www.linkedin.com/">In</a>
          </li>
        </ul>
      </div> -->
    </main>
    <div class="aside__nav">
      <div class ="d-inline-flex w-100 justify-content-between align-middle">
      <button class="aside__button rounded-circle" @click="handleSlideChange(-1)">←</button>
      <!-- <div class="">spacer</div> -->
      <button class="aside__button rounded-circle" @click="handleSlideChange(1)">→</button>
    </div>
    </div>
    <aside class="aside ">
<p class="mb-5 link-text">EXPLORE RAMPS</p>
      <div class="aside__slider">

        <div class="slidenav__brand">

        </div>
        <div v-for="(slide, index) of slides" :key="index">
        <span  v-if="index === currentActiveSlide" class="main__headline-span heading text-white mt-5">{{ slide.headline }}</span>
      </div>
      <div v-for="(slide, index) of slides" :key="index" style="margin-top:35px;">
      <span  v-if="index === currentActiveSlide" class="aside__info">{{ slide.info }}</span>
    </div>
        <!-- <div v-for="(slide, index) of slides" :key="index">
        <img v-if="index === nextActiveSlide" class="aside__slide-image" :src="slide.img" />
      </div> -->
      </div>
      <div class="aside__info">
        <div class="slidenav__brand">
          <p class="link-text">DESCRIPTION</p>
        </div>
        <div v-for="(slide, index) of slides" :key="index">
        <span  v-if="index === currentActiveSlide" class="aside__info">{{ slide.info }}</span>
      </div>
    </div>
      <ul class="progress-indicator" :data-slides-count="'0' + slides.length">
        <li v-for="(slide,index) of slides" :key="index" :class="index === currentActiveSlide ? 'progress-indicator__bar  progress-indicator__bar--active' : 'progress-indicator__bar'"></li>
      </ul>
    </aside>
  </div>
  </b-container>







    <div class="parent">
      <div class="item last align-self-center">
        <h5 class="link-text mb-5">CONSTRUCTION</h5>
        <h1 class="mt-5 heading">Low Maintenance</h1>
        <p class="mt-5 half-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra laoreet eu et mattis semper. Sociis lorem turpis pharetra iaculis ipsum mauris nec scelerisque.</p>
        <p class="half-width-text">Excite riders and help your local community stay active through fun. </p>
      </div>
      <div v-prlx.background="{ speed: 0.04 }" class="item" id="construction" style="background:; background-size: ;"></div>
    </div>

    <div class="parent-half">
      <div v-prlx.background="{ speed: 0.08}" class="item" id="feature1" style="background:; background-size: ;"></div>

      <div class="item last align-self-center">
        <h5 class="link-text mb-4">FEATURE</h5>
        <p class="mt-3 half-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra laoreet eu et mattis semper. Sociis lorem turpis pharetra.</p>

      </div>
    </div>
    <div class="parent-half">
      <div v-prlx.background="{ speed: 0.08}" class="item" id="feature2" style="background:; background-size: ;"></div>

      <div class="item last ">
        <h5 class="link-text mb-4">FEATURE</h5>
        <p class="mt-3 half-width-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra laoreet eu et mattis semper. Sociis lorem turpis pharetra.</p>

      </div>
    </div>





  </b-container>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.clip-path-wipe-enter-to {
 clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }


.clip-path-wipe-enter {
   clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
   /* transform: scale(1.3); */
 }
 .clip-path-wipe-leave-to {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    /* transform: scale(1.3); */
  }
 .clip-path-wipe-leave {
   clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
   /* transform: scale(1.3); */
 }
.clip-path-wipe-leave-active {
   transition: all 700ms;
   transition-delay: 100ms;
 }
.clip-path-wipe-enter-active {
   transition: all 700ms;
 }


.img-ml{margin-left: -45%;}
.img-mr{margin-right: -100%;}
.title-mt{margin-top: -15%;}
.m-t{margin-top: 8rem;}
.ml-hr{margin-left: -40%!important;}
.hr{border-color: white!important;}
.anchor-one{margin-top: -40%;}
.anchor-two{margin-top: 10%;}
.anchor-three{margin-top: 20%;}
.mb-6{margin-bottom: 20%;}
.link-text{font-family: "Avenir Next";font-size: 13px;font-weight: 700; color: white!important; letter-spacing: 1px;text-transform: uppercase; list-style: none;}

.container-fluid, .container-sm, .container-md, .container-lg, .container-xl{
  padding-left:0px!important;
  padding-right:0px!important;
}

.parent {
  display: flex;
  height:100vh;
  background-color:#130F0B;
}
.parent-white {
  display: flex;
  height:100vh;
  background-color:#EEEEEE;
}

.parent-half {
  display: flex;
  height:50vh;
  background-color:#130F0B;
}

.item {
  width: 50%;
  padding: 2.3em;
  /* color: #ffffff; */
  /* background: #eeeeee; */
  /* min-height: 500px; */
  text-align: left;
  /* background-image: url('~@/assets/allwheelsallagesallfun.png'); */
}
.videoitem {
  width: 100%;
  padding: 4em;
  color: #ffffff;
  background: #eeeeee;
  min-height: 500px;
  text-align: left;
  /* background-image: url('~@/assets/allwheelsallagesallfun.png'); */
}
#intro{
  background-image: url('~@/assets/allwheelsallagesallfun.png');
  background-size: cover;
  padding: 0px;
  z-index: 1;
  }
#subintro{
  background-image: url('~@/assets/intro2.png');
  background-size: cover;
  padding: 0px;
}
#videointro{
  background-image: url('~@/assets/allwheelsallagesallfun.png');
  background-size: cover;
  padding: 0px;
  }
#jumptracks{
  background-image: url('~@/assets/jumpramps.png');
  background-size: cover;
  padding: 0px;
}
#construction{
  background-image: url('~@/assets/construction.png');
  background-size: cover;
  padding: 0px;
}
#feature1{
  background-image: url('~@/assets/concrete.png');
  background-size: cover;
  padding: 0px;
}
#feature2{
  background-image: url('~@/assets/finish.png');
  background-size: cover;
  padding: 0px;
}

.last {
  color: #FFF;
  background: #130f0b;
}
.lastwhite {
  color: #000;
  background: #fff;
}

.heading {
  font-family: Minion Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
}

.half-width-text {
  max-width: 80%!important;
  font-size: 24px;
}

@media screen and (max-width: 991px){
  .half-width-text {
    min-width: 100%;
  }

  .parent {
    /* flex-direction: column-reverse; */
    height: 100%;
  }
  .parent-half {
    /* flex-direction: column-reverse; */
    height: 100%;
  }

  .item {
    width: auto;
    height: 100%;
  }
  .videoitem {
    width: auto;
    height: 100%;
  }

  .last {
    background: #000;
  }

}
.videosection {
  min-width: 100%;
  min-height: 100%;
  object-fit: unset;
}




</style>


<style lang="scss">
@import url('https://rsms.me/inter/inter.css');

$color--background: hsl(300, 3%, 15%); // Note the $block--modifier syntax. This is just personal preference. Just be consistent!
$color--primary: hsl(0, 0%, 100%); // White color for most of the app.
$color--secondary: hsl(0, 0%, 90%); // Off-white for the progress indicator
$color--neutral: hsl(0, 0%, 1%); // Nearly-black color for text.


$app-width: 95vmin;

$debug: false;
@mixin debugger($color) {
  @if $debug == true {
    border: 1px solid $color;
  }
}
@mixin slide-image {
  position: absolute;
  height: 100%;
  object-fit: cover;
  width: 50%;
}
*, *:before, *:after{box-sizing: border-box;}

.slidewrap {
  display: grid;
  // place-items: center;
  min-height: 100vh;
  background-color: #130F0B;
  font-size: calc(#{$app-width} / 100);
   // font-family: "Inter", sans-serif;
  @supports (font-variation-settings: normal) {
    // font-family: "Inter var", sans-serif;
}
}
a {
  color: inherit;
  text-decoration: none;
  &:hover, &:active {
    color: inherit;
    text-decoration: underline;
  }
  &:active {
    opacity: .7;
  }
  &:visited {
    color: inherit;
  }
}
.viewport {
  @include debugger(grey);

  min-width: 100%;
  min-height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 50%;
  background-color: #353535;
  box-shadow: 0 1rem 2rem hsla(0, 0%, 0%, 0.2);
}
@media screen and (max-width: 991px){
  .viewport {
    grid-template-columns: 100% 100%;
  }
  .main__slide-image{
    width:100%!important;
  }
  .aside__nav{
    width:100%!important;
  }
  .main__headline {
    padding:55px!important;
  }
  .slidenav__brand {
    min-width:200px;
    margin-left:-25px;
  }
}
.slidenav {
  @include debugger(cyan);

  padding: 5rem;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  z-index: 1;
  padding-left: -1px!important;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  &__brand {
    color: $color--primary;
    font-weight: 730;
    font-size: 2rem;
  }
  &__list {
    @include debugger(cyan);

    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
    font-weight: 500;
    width: 20rem;
    padding: 0;
  }
}
.main {
  @include debugger(chartreuse);

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "headline" "nav";
  align-items: end;
  &__slider {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow:hidden;
  }
  &__slide-image {
    @include slide-image;
  }
  &__headline {
    @include debugger(chartreuse);

    padding: 2.4rem;
    grid-area: headline;
    z-index: 1;
    color: $color--primary;
    font-size: 48px;
    font-weight: 730;
    z-index: 1;
    margin-left: 30px;
  }
  &__nav {
    @include debugger(chartreuse);

    z-index: 1;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-area: nav;
    width: 30rem;
    padding: 3rem 5rem;
    color: $color--primary;
  }
}
.social-links {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.4rem;
  align-items: center;
  &:before,
  &:after {
    content: "";
    display: block;
    width: 1rem;
    height: 0.1rem;
    background: $color--primary;
  }
  &:before {
    grid-column: 2;
  }
  &:after {
    grid-column: 4;
  }
  &__item {
    color: $color--primary;
  }
}
.aside {
  @include debugger(magenta);

  position: relative;
  // display: grid;
  padding: 5rem;
  $button-size: 10rem;
  &__slider {
    @include debugger(magenta);

    position: relative;
    height: 25rem;
    margin-top: 10rem;
    overflow:hidden;
  }
  &__slide-image {
    @include slide-image;
  }
  &__info {
    @include debugger(chartreuse);

    padding: 5rem;
    grid-area: headline;
    z-index: 1;
    color: $color--primary;
    font-size: 24px;
    font-weight: 730;
    z-index: 1;
  }
  &__button {
    width: $button-size;
    height: $button-size;
    font-size: 1.5rem;
    width: 4rem;
    height: 4rem;
    margin: 0;
    cursor: pointer;
    border: 1px solid $color--primary;
    outline: 0;
    background: $color--primary;
    &:hover,
    &:focus {
      border-color: $color--neutral;
    }
    &:active {
      color: $color--primary;
      border-color: $color--neutral;
      background: $color--neutral;
    }
  }
  &__info {
    @include debugger(chartreuse);

    padding: 0px;
    grid-area: headline;
    z-index: 1;
    color: $color--primary;
    font-size: 24px;
    font-weight: 300;
    z-index: 1;
  }

  &__nav {
    @include debugger(magenta);

    position: absolute;
    bottom: 0;
    width: 50%;
    height: 50%;
    padding: 0 35px 0 35px;
    // left: -20rem;
  }
}
.progress-indicator {
  @include debugger(magenta);

  position: absolute;
  right: 5rem;
  bottom: 3rem;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  align-items: center;
  justify-content: end;
  width: 10rem;
  font-size: 13px;
  font-weight: 700;
  list-style: none;
  &__bar {
      width: 1.5rem;
      height: 0.2rem;
      background: $color--secondary;
      &--active {
        background: $color--neutral;
      }
    }
    &:before,
    &:after {
      color: white;
    }
    &:before {
      content: "01";
    }
    &:after {
      content: attr(data-slides-count);
    }
}
</style>
<script>
export default ({
  // el: "#app",
  data() {
    return {
      currentActiveSlide: 0,
      slides: [
        {
          headline: 'The Wave ramp.',
          img: 'https://source.unsplash.com/random/1350x1080',
          info: 'This is where the info on the product will go'
        },
        {
          headline: 'Consectetur adipiscing elit, sed do.',
          img: 'https://source.unsplash.com/random/1350x1081'
        },
        {
          headline: 'Eiusmod tempor incididunt ut labore.',
          img: 'https://source.unsplash.com/random/1350x1082'
        },
      ]
    }
  },
  computed: {
    nextActiveSlide() {
      return this.currentActiveSlide + 1 >= this.slides.length ? 0 : this.currentActiveSlide + 1;
    }
  },
  methods: {
    // We'll pass the function either 1 or -1 to indicate which direction we'the slides will go
    handleSlideChange(val) {
      let direction;
      const calculatedNextSlide = this.currentActiveSlide + val;
      if (val > 0) {
        direction = "next";
      } else {
        direction = "previous";
      }
      if (direction === "next" && calculatedNextSlide < this.slides.length) {
        this.currentActiveSlide += val;
      } else if (direction === "next") {
        this.currentActiveSlide = 0;
      } else if (direction === "previous" && calculatedNextSlide < 0) {
        this.currentActiveSlide = this.slides.length - 1;
      } else {
        this.currentActiveSlide += val;
      }
    }
  }
})

</script>
