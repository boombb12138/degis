<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
  setup() {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  background-color: #191433;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* 顶部 */
.hidden {
  display: none;
  visibility: hidden;
}
.app-mint {
  display: flex;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  /* background-color: rgb(150, 150, 150); */
  padding-top: 50px;
  padding-right: 125px;
  padding-left: 70px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.tabbar {
  position: absolute;
  top: 45%;
  /* right: %;
  display: flex;
  justify-content: space-between;
  align-items: center; */
}
.tabbar a {
  margin-right: 15px;
}
/* mint */
.box {
  width: 82px;
  height: auto;
  position: absolute;
  top: -20%;
  display: inline-block;
  left: -70px;
  transform: translateX();
}
.mint {
  position: relative;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  background-color: #3f2e89;
  border: 5px solid #6645db;
  box-shadow: 0 10px 20px rgb(0, 0, 0, 50%);
  border-radius: 5px;
  color: white;
  margin-right: 5px;
  position: relative;
  left: -7%;
  line-height: 31px;
  text-align: center;
  padding: 0px 33px;
  z-index: -1;
}
.mintbtn {
  background: transparent;
}
</style>
