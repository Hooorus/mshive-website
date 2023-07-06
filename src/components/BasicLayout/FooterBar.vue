<template>
  <div id="footer-bar">
    <div class="button-container">
      <a class="button" href="#">
        <svg class="icon logo-instagram" aria-hidden="true">
          <use xlink:href="#icon-instagram"></use>
        </svg>
      </a>
      <a class="button" href="#">
        <svg class="icon logo-youtube" aria-hidden="true">
          <use xlink:href="#icon-youtube"></use>
        </svg>
      </a>
      <a class="button" href="#">
        <svg class="icon logo-facebook" aria-hidden="true">
          <use xlink:href="#icon-tuitetwitter44"></use>
        </svg>
      </a>
      <a class="button" href="#">
        <svg class="icon logo-twitter" aria-hidden="true">
          <use xlink:href="#icon-facebook"></use>
        </svg>
      </a>
    </div>
    <div class="copy-right">2023 Ms. Hive Co., Ltd</div>
  </div>
</template>

<script>
export default {
  name: "FooterBar"
}
</script>

<style scoped>
#footer-bar {
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  height: 80px;
  background: linear-gradient(rgba(8, 72, 168, 0.0) 0%,rgba(8, 72, 168, 0.2) 40%, rgba(8, 72, 168, 0.3) 60%, rgba(8, 72, 168, 0.5) 100%);
  /*border: 1px solid white;*/
  z-index: 100;
}

.button-container {
  width: 600px;
  height: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  /*border: 1px solid white;*/
}

.button {
  color: #eeeeee;
  font-size: 20px;
  line-height: 20px;
  box-shadow: 1px 4px 20px rgba(0, 0, 0, 0.7);
}

.copy-right{
  width: 100%;
  height: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  line-height: 20px;
  color: #eeeeee;
  font-size: 24px;
  /*border: 1px solid white;*/
  font-family: "Monotype Corsiva";
  /*font-family: Ubuntu;*/
  text-shadow: 1px 4px 20px rgba(0, 0, 0, 0.7);
}
</style>
