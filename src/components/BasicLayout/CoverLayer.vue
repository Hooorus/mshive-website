<template>
  <div class="blue-screen-bkg"></div>
</template>

<script>
export default {
  name: "CoverLayer"
}
</script>

<style scoped>
.blue-screen-bkg {
  height: 100%;
  width: 100%;
  position: fixed;
  background: linear-gradient(180deg, rgb(8, 72, 168, 0.5), rgba(41, 153, 227, 0) 20%, rgba(41, 153, 227, 0) 80%, rgb(8, 72, 168, 0.5) 100%);
  z-index: 0;
}
</style>
