<template>
  <div id="app">
    <!--导航栏-->
    <transition name="navbar-slide">
      <NavigationBar></NavigationBar>
    </transition>
    <!--<nav>-->
    <!--  <router-link to="/">Home</router-link>-->
    <!--  <router-link to="/about">About</router-link>-->
    <!--</nav>-->
    <!--视图展示-->
    <transition name="fade">
      <router-view/>
    </transition>
    <!-- 底部栏-->
    <transition name="footer-slide">
      <FooterBar></FooterBar>
    </transition>
    <!--线性渐变遮罩层-->
    <!--    <CoverLayer></CoverLayer>-->
  </div>
</template>

<style lang="scss">
@import "./assets/fonts/font.css";

* {
  margin: 0 auto;
  padding: 0;
  border: 0;
  text-decoration: none;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

//vue过渡区域
//渐变过渡
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

//navbar滑动过渡
.navbar-slide-enter-active {
  transition: all .4s .5s ease;
}

.navbar-slide-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.navbar-slide-enter, .navbar-slide-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

//footer-bar滑动过渡
.footer-slide-enter-active {
  transition: all .4s .5s ease;
}

.footer-slide-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.footer-slide-enter, .footer-slide-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>
<script>
import "./assets/iconfont/iconfont.js";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import NavigationBar from "@/components/BasicLayout/NavigationBar.vue";
import FooterBar from "@/components/BasicLayout/FooterBar.vue";
import CoverLayer from "@/components/BasicLayout/CoverLayer.vue";

export default {
  // name: "App",
  components: {
    NavigationBar,
    FooterBar,
    CoverLayer
  },
  data() {
    return {}
  }
}
</script>
