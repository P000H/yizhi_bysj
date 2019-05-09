<template>
  <div id="app">
    <div v-if="$route.meta.keepAlive">
      <nav-head></nav-head>
      <router-view></router-view>
      <nav-foot></nav-foot>
    </div>
     <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import navHead from "@/components/navHead";
import navFoot from "@/components/navFoot";
export default {
  name: "App",
  components: {
    navHead: navHead,
    navFoot: navFoot
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
