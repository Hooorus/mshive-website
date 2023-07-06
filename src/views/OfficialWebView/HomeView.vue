<template>
  <div id="home-view">
    <div class="middle-display">
      <div class="slogan">
        Convenient & Fast Tool<br>Recording & Search Item
      </div>
      <div class="visit-area">
        <button class="button">Start</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="less">
@import "@/less/variables.less";

#home-view {
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  position: fixed;

  display: flex;

  //background-image: @background-image-1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;
  animation: backgroundChange 60s infinite cubic-bezier(0.5, 0, 0.5, 1);
}

//背景切换动画
@keyframes backgroundChange {
  0% {
    background-image: @background-image-1;
  }
  15% {
    background-image: @background-image-1;
  }
  20% {
    background-image: @background-image-2;
  }
  35% {
    background-image: @background-image-2;
  }
  40% {
    background-image: @background-image-3;
  }
  55% {
    background-image: @background-image-3;
  }
  60% {
    background-image: @background-image-4;
  }
  75% {
    background-image: @background-image-4;
  }
  80% {
    background-image: @background-image-5;
  }
  95% {
    background-image: @background-image-5;
  }
  100% {
    background-image: @background-image-1;
  }
}

.middle-display {
  height: 60%;
  width: 1250px;
  margin: 10% auto;
  /*border: 1px solid white;*/
  position: center;
  line-height: 100%;

  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: ;*/
  z-index: 102;
}

.slogan {
  height: 70%;

  display: flex;
  align-items: center;

  line-height: 80px;

  color: white;
  font-family: "Monotype Corsiva";
  font-size: 50px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  //border: 1px solid white;
}

.visit-area {
  //border: 1px solid white;
}

.button {
  width: 150px;
  height: 50px;
  cursor: pointer;
  border-radius: 50px;
  background: linear-gradient(120deg, rgb(255, 255, 255, 1.0) 0%, rgb(255, 255, 255, 1.0) 50%, rgb(255, 255, 255, 1.0) 100%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  font-family: Ubuntu;
  font-size: 20px;
  color: #222222;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  transition: all 0.3s;
  //border: 1px solid white;
}

.button:hover, .button:focus {
  background: linear-gradient(120deg, rgb(255, 255, 255, 0.5) 0%, rgb(255, 255, 255, 0.5) 50%, rgb(255, 255, 255, 0.5) 100%);
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
}
</style>
