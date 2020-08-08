<template>
  <div class="sliderbody">
<div class="viewport">
  <nav class="nav">
    <div class="nav__brand">
      <!-- Logo goes here. -->
    </div>
    <ul class="nav__list">
      <!-- Nav items go here. -->
    </ul>
  </nav>

  <main class="main">
    <div class="main__slider">
  <img class="main__slide-image"
       src="https://source.unsplash.com/random/1350x1080" />
</div>
    <div class="main__headline">
      <!-- Headline here -->
    </div>
    <div class="main__nav">
      <!-- Play video & social links will go here. -->
    </div>
  </main>
  <aside class="aside">
    <div class="aside__nav">
      <!-- Our buttons to navigate the slides will go in here. -->
    </div>
    <div class="aside__slider">
  <img class="aside__slide-image"
       src="https://source.unsplash.com/random/1350x1080" />
</div>
    <div class="progress-indicator">
      <ul class="progress-indicator" data-slides-count="03">
      <!-- This is like that 01———03 thing in the bottom right. -->
    </div>
  </aside>
</div>
</div>
</template>

<style>
@mixin slide-image {
  position: absolute;
  height: 100%;
  object-fit: cover;
}

.sliderbody {
  display: grid;
  place-items: center;
}
.viewport {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 30rem;
  background-color: $color--primary;
}
.main {
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-areas: "headline" "nav";
  align-items: end;
  &__slider {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 70rem; (T
    height: 100%;
    overflow: hidden;
  }
  &__slide-image {
    @include slide-image;
  }
  &__headline {
    padding: 5rem;
    grid-area: headline
  }
  &__nav {
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-area: nav;
    width: 30rem;
    padding: 3rem 5rem; // I'm using 3rem vertical instead of 5rem all around cause it just looks better 👀
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
}

.aside {
  position: relative;
  display: grid;
  padding: 5rem; // That DANG 5rem padding again....
  $button-size: 10rem;
  &__slider {
    position: relative;
    height: 25rem;
    margin-top: 10rem;
    overflow: hidden;
  }
  &__button {
    width: $button-size;
    height: $button-size;
  }
  &__nav {
    position: absolute;
    bottom: 0;
    left: -#{$button-size}
  }
  &__slide-image {
   @include slide-image;
 }
}
.progress-indicator {
  &:before,
  &:after {
    color: $color--neutral;
  }
  &:before {
    content: "01";
  }
  &:after {
    content: attr(data-slides-count);
  }
  &__bar {
    width: 1.5rem;
    height: 0.2rem;
    background: $color--secondary;
    &--active {
      background: $color--neutral;
    }
  }
}

</style>
