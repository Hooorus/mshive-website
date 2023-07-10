<template>
  <div id="download-view">
    <div class="download-card-container">
      <div class="download-card" v-for="card in cardList">
        <div class="download-card-cover-layer" :style="'background-color: '+card.backgroundColor"
             v-if="card.name==='Windows'">
          <button class="download-version">Win11</button>
          <button class="download-version">Win10</button>
          <button class="download-version">Win8</button>
        </div>
        <div class="download-card-cover-layer" :style="'background-color: '+card.backgroundColor"
             v-if="card.name==='Linux'">
          <button class="download-version">Ubuntu</button>
          <button class="download-version">CentOS</button>
          <button class="download-version">Arch</button>
          <button class="download-version">Debain</button>
        </div>
        <div class="download-card-cover-layer" :style="'background-color: '+card.backgroundColor"
             v-if="card.name==='Android'">
          <button class="download-version">Android</button>
          <button class="download-version">Android TV</button>
          <button class="download-version">HarmonyOS</button>
        </div>
        <div class="download-card-cover-layer" :style="'background-color: '+card.backgroundColor"
             v-if="card.name==='iOS'">
          <button class="download-version">iPhone</button>
          <button class="download-version">iPad</button>
        </div>
        <div class="download-card-name">{{ card.name }}</div>
        <div class="download-button-container">
          <button class="download-button" :style="'background-color: '+card.buttonColor" @click="getDownloadResources">
            {{ $t('downloadView.download_card.download_button') }}
          </button>
        </div>
        <div class="download-background" :style="{backgroundImage: 'url('+card.img+')'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Windows from "../../assets/images/facilities/windows.png"
import Linux from "../../assets/images/facilities/linux.png"
import Android from "../../assets/images/facilities/android.png"
import iOS from "../../assets/images/facilities/iphone.png"

export default {
  name: "DownloadView",
  data() {
    return {
      cardList: [
        {index: 1, name: "Windows", url: "", img: Windows, buttonColor: "#098acc", backgroundColor: "#098accaa"},
        {index: 2, name: "Linux", url: "", img: Linux, buttonColor: "#E3B654", backgroundColor: "#E3B654aa"},
        {index: 3, name: "Android", url: "", img: Android, buttonColor: "#19c589", backgroundColor: "#19c589aa"},
        {index: 4, name: "iOS", url: "", img: iOS, buttonColor: "#AC33C1", backgroundColor: "#AC33C1aa"},
      ]
    }
  },
  methods: {
    getDownloadResources() {
      console.log("ok")
    }
  }
}
</script>

<style scoped lang="less">
#download-view {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: fixed;
  background-image: url("../../assets/images/bkg1.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  z-index: 1;
}

.download-card-container {
  width: 90rem;
  height: 75vh;
  margin: auto auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /*align-content: space-between;*/
  /*align-content: center;*/
  align-content: flex-start;
  overflow: scroll;
  /*box-sizing: border-box;*/
  /*background-color: #ffffff;*/
}

::-webkit-scrollbar {
  display: none;
}

.download-card {
  width: 20rem;
  height: 30rem;
  margin: 20px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #ffffff33;
  border-radius: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s;

  .download-card-cover-layer {
    position: absolute;
    width: 100%;
    height: 0%;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-content: space-evenly;
    background: rgba(8, 72, 168, 0.6);
    opacity: 0;
    transition: all 0.3s;

    .download-version {
      margin: 15px 10px 10px;
      background-color: #ffffff55;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      cursor: pointer;
      font-family: Ubuntu;
      font-size: 24px;
      color: white;
      text-align: center;
      //border: 1px solid white;
    }

    overflow: hidden;
  }

  .download-card-name {
    flex: 1;
    margin: 10px 20px;
    text-align: center;
    line-height: 4rem;
    font-family: Ubuntu;
    font-size: 24px;
    color: white;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    font-weight: 700;
    //border: 1px solid white;
  }

  .download-button-container {
    flex: 1;
    margin: 10px 20px;
    text-align: center;
    /*border: 1px solid white;*/

    .download-button {
      width: 200px;
      height: 70px;
      line-height: 70px;
      border-radius: 50px;
      cursor: pointer;
      background: linear-gradient(100deg, rgb(8, 72, 168), rgba(255, 255, 255, 0.20) 50%, rgb(8, 72, 168) 100%);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      font-family: Ubuntu;
      color: #ffffff;
      font-size: 20px;
      transition: all 0.3s;
    }
  }

  .download-background {
    flex: 3;
    margin: 10px 20px;
    /*border: 1px solid white;*/
    background-repeat: no-repeat;
    background-position: center;
    background-size: 250px;
    transition: all 0.3s;
  }
}

.download-card:hover, .download-card:focus {
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);

  .download-card-cover-layer {
    height: 60%;
    opacity: 1;
  }

  .download-button-container {
    .download-button:hover, .download-button:focus {
      box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
    }
  }

  .download-background {
    flex: 5;
    background-size: 300px;
  }
}
</style>
