<!-- <template>

  <div id="apppy">

    <h1 style="text-align: center;">@meshhouse/model-viewer in Vue.js</h1>
    <model-viewer
      model="https://meshhouse.art/backend/upload/interactive/BoomBox.glb"
      modeltitle="Boom box"
      author="Khronos Group"
      authorlink="https://khronos.org"


    >
      <span slot="logo">Model Viewer 1.0.0</span>
    </model-viewer>
  </div>
</template>

<script>
import '@meshhouse/model-viewer';

export default {
  name: "Apppy"
};
</script>

<style>
#apppy {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#apppy .logo {
  display: block;
  margin: 0 auto;
}

model-viewer {
  height: 600px;
}
</style> -->

<template>

  <!-- Use it like any other HTML element -->
<div>
  <model-viewer src="shared-assets/models/Astronaut.glb" alt="A 3D model of an astronaut" auto-rotate camera-controls></model-viewer>
</div>
</template>

<script>
<script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js">
<script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js">
<script>
