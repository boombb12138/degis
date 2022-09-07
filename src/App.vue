<template>
  <mainPage msg="Welcome to Your Vue.js App" />
</template>

<script>
import mainPage from "./components/main.vue";

export default {
  name: "App",
  components: {
    mainPage,
  },
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
  color: #000;
  background-color: #191433;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
