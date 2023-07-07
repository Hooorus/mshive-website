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
        <a class="translate">
          <svg class="icon logo-translate" aria-hidden="true">
            <use xlink:href="#icon-translate"></use>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NavigationBar",
  data() {
    return {}
  },
  mounted() {
  },
  methods: {},
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
  //background: linear-gradient(180deg, rgba(8, 72, 168, 0.5), rgba(8, 72, 168, 0.2) 60%, rgba(8, 72, 168, 0.0) 100%);
  //background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(211, 211, 211, 0.3) 20%, rgba(211, 211, 211, 0.3) 80%, rgba(255, 255, 255, 0.1) 100%);
  backdrop-filter: blur(2px);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
}

.container {
  width: 1200px;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  background-color: rgba(211, 211, 211, 0.0);
}

.container:after {
  filter: blur(2px);
}

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

  transition: all 0.3s;
}

.nav-button:hover, .nav-button:focus {
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
  color: white;
  font-size: 28px;
}

.translate {
  width: 40px;
  height: 40px;
  background-color: rgba(211, 217, 225, 0.15);
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
  color: white;
  font-size: 25px;
}
</style>
