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

}
</script>

<style scoped>
#home-view {
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  position: fixed;

  display: flex;

  background-image: url("../../assets/images/sky1k.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;
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
  /*border: 1px solid white;*/
}

.visit-area {
  /*border: 1px solid white;*/
}

.button {
  width: 150px;
  height: 50px;
  cursor: pointer;
  border-radius: 50px;
  background: linear-gradient(120deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 50%, rgb(255, 255, 255) 100%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  font-family: Ubuntu;
  font-size: 20px;
  color: #222222;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  transition: all 0.3s;
  /*border: 1px solid white;*/
}
.button:hover, .button:focus{
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
}
</style>
