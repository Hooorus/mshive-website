<template>
  <div id="navbar">
    <div class="container">
      <a class="logo-container" href="/">
        <!--        <img class="logo" src="../../assets/logo.png">-->
        <div class="brand">Ms. Hive</div>
      </a>
      <div class="nav-button-container">
        <div class="nav-button">
          <router-link to="/download">
            <div class="nav-button-text">{{ $t('navigationBar.download') }}</div>
          </router-link>
        </div>
        <div class="nav-button">
          <router-link to="/online">
            <div class="nav-button-text">{{ $t('navigationBar.online') }}</div>
          </router-link>
        </div>
        <div class="nav-button">
          <a href="https://github.com/Hooorus">
            <div class="nav-button-text">{{ $t('navigationBar.github') }}</div>
          </a>
        </div>
        <div class="nav-button">
          <router-link to="/about">
            <div class="nav-button-text">{{ $t('navigationBar.about') }}</div>
          </router-link>
        </div>
      </div>
      <div class="user-container">
        <router-link class="avatar" to="/user">
          <svg class="icon logo-account" aria-hidden="true">
            <use xlink:href="#icon-zhanghaodenglu"></use>
          </svg>
        </router-link>
        <div class="translate-box" @mouseleave="changeTranslateContainerDropdownUnvisible">
          <div class="translate" @mouseover="changeTranslateContainerDropdownVisible">
            <svg class="icon logo-translate" aria-hidden="true">
              <use xlink:href="#icon-translate"></use>
            </svg>
          </div>
          <transition name="translate-slide">
            <div class="translate-container" v-if="translateContainerDropdownVisible">
              <div class="translate-item" v-for="languageItem in languageList"
                   @click="changeLanguage(languageItem.lang)">
                <span :class="'fi fi-'+languageItem.flag+ ' translate-item-icon'"></span>
                {{ languageItem.name }}
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "NavigationBar",
  data() {
    return {
      translateContainerDropdownVisible: false,
      languageList: [
        {lang: "zh_cn", name: "简体中文", flag: "cn"},
        {lang: "zh_tw", name: "繁體中文", flag: "hk"},
        {lang: "en", name: "English", flag: "gb"},
        {lang: "es", name: "Español", flag: "es"},
        {lang: "kr", name: "한국어", flag: "kr"},
        {lang: "jp", name: "日本語", flag: "jp"},
        {lang: "ar", name: "بالعربية", flag: "sa"},
        {lang: "ru", name: "Русский", flag: "ru"},
      ],
    }
  },
  mounted() {
  },
  methods: {
    changeLanguage(languageItem) {
      this.$i18n.locale = languageItem
      sessionStorage.setItem('lang', languageItem)
    },
    changeTranslateContainerDropdownVisible() {
      this.translateContainerDropdownVisible = true
    },
    changeTranslateContainerDropdownUnvisible() {
      this.translateContainerDropdownVisible = false
    }
  },
  computed: {},
}
</script>

<style scoped lang="scss">
#navbar {
  padding-top: 10px;
  padding-bottom: 10px;
  //margin-top: 10px;
  position: fixed !important;
  z-index: 100;
  width: 100vw;
  height: 60px;
  text-decoration: none;
  //box-sizing: border-box;
  //background: linear-gradient(110deg, rgba(8, 72, 168, 0.3) 0%, rgba(8, 72, 168, 0.1) 15%, rgba(8, 72, 168, 0.1) 85%, rgba(8, 72, 168, 0.3) 100%);
  //background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(211, 211, 211, 0.3) 20%, rgba(211, 211, 211, 0.3) 80%, rgba(255, 255, 255, 0.1) 100%);
  backdrop-filter: blur(6px);
  //border: 1px solid #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
}

.container {
  width: 1200px;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  //border: 1px solid #ffffff;
  background-color: rgba(211, 211, 211, 0.0);
}

//.container:after {
//  filter: blur(2px);
//}

.logo-container {
  flex: 2;

  display: flex;
  justify-content: space-evenly;
}

//.logo{
//  line-height: 60px;
//  margin-right: 10px;
//}
.brand {
  flex: 1;

  line-height: 40px;
  margin: 10px;

  font-family: "Monotype Corsiva";
  font-weight: 500;
  color: #ffffff;
  font-size: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  transition: all 0.3s;
}

.brand:hover, .brand:focus {
  text-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3);
}

.nav-button-container {
  flex: 4;
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
}

.nav-button {
  flex: 1;
  height: 40px;
  margin: 0 15px;
  text-align: center;
  border-bottom: 3px solid rgba(255, 255, 255, 0);
  background-color: rgba(8, 72, 168, 0.0);
  //border-radius: 5px;
  //background-position-y: 40px;
  transition: all 0.3s;
}

.nav-button:hover, .nav-button:focus {
  background-color: rgba(211, 217, 225, 0.15);
  border-bottom: 3px solid rgba(255, 255, 255, 1);
}

.nav-button-text {

  font-family: Ubuntu;
  color: white;
  font-size: 22px;
  line-height: 40px;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

.user-container {
  flex: 1;
  display: flex;

  margin: 10px;
  line-height: 40px;
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: rgba(211, 217, 225, 0.15);
  //background-color: rgba(48, 180, 246, 0.3);
  border-radius: 50px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  transition: all 0.3s;
}

.avatar:hover {
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3);
}

.logo-account {
  display: block;
  text-align: center;
  height: 40px;
  color: #ffffff;
  font-size: 28px;
}

.translate {
  width: 40px;
  height: 40px;
  background-color: rgba(211, 217, 225, 0.15);
  //background-color: rgba(48, 180, 246, 0.3);
  border-radius: 50px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  transition: all 0.3s;
}

.translate:hover {
  cursor: pointer;
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3);
}

.logo-translate {
  display: block;
  text-align: center;
  height: 40px;
  color: #ffffff;
  font-size: 25px;
}

.translate-box {
  display: flex;
  flex-direction: column;
  width: 110px;
  height: 230px;
  //border: 1px solid #ffffff;
}

.translate-container {
  margin-top: 20px;
  padding-bottom: 2px;
  width: 105px;
  height: 166px;
  overflow: scroll;
  //border: 1px solid #ffffff;
}

::-webkit-scrollbar {
  display: none;
}

.translate-item {
  width: 95px;
  height: 30px;
  line-height: 30px;
  margin-top: 3px;
  padding-left: 5px;
  background-color: #ffffffcc;
  border-radius: 3px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  //border: 1px solid #ffffff;
  font-family: Ubuntu;
  color: #222222;
  cursor: pointer;
}

.translate-item:hover {
  background-color: rgba(8, 72, 168, 0.8);
  color: #eeeeee;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}

.translate-item-icon {
  border-radius: 3px;
  //box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

//translate集合滑动过渡
.translate-slide-enter-active {
  transition: all 150ms ease;
}

.translate-slide-leave-active {
  transition: all 150ms cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.translate-slide-enter, .translate-slide-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
