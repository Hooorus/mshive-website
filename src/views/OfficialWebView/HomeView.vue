<template>
  <div id="home-view">
    <transition name="bkg-slide" mode="in-out">
      <div class="img-body" v-for="item in backgroundImageList"
           :key="`background-toggle`+ item.index"
           v-if="bkgSelection === item.index"
           :style="{backgroundImage: 'url('+backgroundImageList.at(item.index).url+')'}"/>
    </transition>
    <div class="middle-display">
      <transition name="slide" mode="out-in">
        <div class="slogan" v-if="bkgSelection === 0" key="bkg1">
          {{ $t('homeView.slogan_info.slogan1_bkg1') }}
          <br>
          {{ $t('homeView.slogan_info.slogan1_bkg2') }}
        </div>
        <div class="slogan" v-else-if="bkgSelection === 1" key="bkg2">
          {{ $t('homeView.slogan_info.slogan2_bkg1') }}
          <br>
          {{ $t('homeView.slogan_info.slogan2_bkg2') }}
        </div>
        <div class="slogan" v-else-if="bkgSelection === 2" key="bkg3">
          {{ $t('homeView.slogan_info.slogan3_bkg1') }}
          <br>
          {{ $t('homeView.slogan_info.slogan3_bkg2') }}
        </div>
        <div class="slogan" v-else-if="bkgSelection === 3" key="bkg4">
          {{ $t('homeView.slogan_info.slogan4_bkg1') }}
          <br>
          {{ $t('homeView.slogan_info.slogan4_bkg2') }}
        </div>
      </transition>
      <div class="visit-area">
        <button class="change-bkg-button button-left" @click="changeBackgroundAdd(); bkgTrigger();">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-left"></use>
          </svg>
        </button>
        <button class="button">{{ $t('homeView.buttons.start_button') }}</button>
        <button class="change-bkg-button button-right" @click="changeBackgroundSub(); bkgTrigger();">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-right"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import bkg1 from "../../assets/images/bkg1.png";
import bkg2 from "../../assets/images/bkg2.jpg";
import bkg3 from "../../assets/images/bkg3.jpg";
import bkg4 from "../../assets/images/bkg4.jpg";

export default {
  name: "HomeView",
  computed: {},
  data() {
    return {
      // 背景与转换操作
      triggerBkgBtn: false,
      bkgSelection: 0,
      bkgCount: 0,
      backgroundImageList: [
        {index: 0, url: bkg1},
        {index: 1, url: bkg2},
        {index: 2, url: bkg3},
        {index: 3, url: bkg4},
      ],
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      this.changeBackgroundAdd()
    }, 10000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    bkgTrigger() {
      this.triggerBkgBtn = true
      clearInterval(this.timer)
    },
    changeBackgroundAdd() {
      this.bkgCount++;
      this.bkgSelection = Math.abs((this.bkgCount) % this.backgroundImageList.length);

    },
    changeBackgroundSub() {
      this.bkgCount--;
      this.bkgSelection = Math.abs((this.backgroundImageList.length - this.bkgCount) % this.backgroundImageList.length);
    },
  }
}
</script>

<style scoped lang="less">
#home-view {
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  display: flex;
  z-index: 1;
}

.img-body {
  width: 100%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: backgroundChange 60s infinite cubic-bezier(0.5, 0, 0.5, 1);
}

//渐变过渡
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

//滑动过渡
.slide-enter-active {
  transition: all .4s .4s ease;
}

.slide-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-enter, .slide-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

//背景滑动过渡
.bkg-slide-enter-active {
  transition: all .4s .4s ease;
}

.bkg-slide-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.bkg-slide-enter, .bkg-slide-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.middle-display {
  height: 60%;
  width: 1250px;
  margin: 10% auto;
  //border: 1px solid white;
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
  //font-family: "ZCOOL Addict Italic 01";
  font-size: 50px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  //border: 1px solid white;
}

.visit-area {
  display: flex;
}

.button {
  width: 150px;
  height: 50px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 50px;
  background: linear-gradient(120deg, rgba(255, 255, 255, 1.0) 0%, rgba(255, 255, 255, 1.0) 50%, rgba(255, 255, 255, 1.0) 100%);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  font-family: Ubuntu;
  font-size: 20px;
  color: #222222;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  transition: all 0.3s;
  //border: 1px solid white;
}

.button:hover, .button:focus {
  //background: linear-gradient(120deg, rgb(255, 255, 255, 0.5) 0%, rgb(255, 255, 255, 0.5) 50%, rgb(255, 255, 255, 0.5) 100%);
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.25);
}

.change-bkg-button {
  width: 30px;
  height: 50px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 40px;
  color: #ffffff;
  background-color: transparent;
}

@media (min-width: 0px) {
  .middle-display {
    //height: 10%;
    width: 80%;
    margin: 120px auto;
  }

  .slogan {
    height: 60%;
    line-height: 40px;
    font-size: 30px;
  }

  .button {
    width: 60px;
    height: 30px;
    margin: 0 5px;
    font-size: 16px;
    //border: 1px solid white;
  }

  .change-bkg-button {
    width: 30px;
    height: 30px;
    margin: 0 5px;
    font-size: 30px;
  }
}

@media (min-width: 850px) {
  .middle-display {
    //height: 40%;
    width: 80%;
    margin: 120px auto;
  }

  .slogan {
    height: 60%;
    line-height: 40px;
    font-size: 40px;
  }

  .button {
    width: 100px;
    height: 40px;
    margin: 0 5px;
    font-size: 20px;
    //border: 1px solid white;
  }

  .change-bkg-button {
    width: 80px;
    height: 40px;
    margin: 0 5px;
    font-size: 40px;
  }
}

@media (min-width: 1200px) {
  .middle-display {
    height: 60%;
    width: 1250px;
    margin: 10% auto;
  }

  .slogan {
    height: 70%;
    line-height: 80px;
    font-size: 50px;
  }

  .button {
    width: 150px;
    height: 50px;
    margin: 0 10px;
    font-size: 20px;
  }

  .change-bkg-button {
    width: 30px;
    height: 50px;
    margin: 0 10px;
    font-size: 40px;
  }
}
</style>
