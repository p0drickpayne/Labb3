<template>
  <div class="frame">
    <div id="app">
      <img class="animate__animated animate__bounce" alt="Vue logo" src="./assets/logo.png" />
      <p>Hello</p>
      <router-link to="/"></router-link>
      <router-link to="/main-view"></router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p {
  word-break: break-all;
}
.frame {
  border: 6px solid black;
  border-radius: 8px;
}
</style>
