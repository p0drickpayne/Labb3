<template>
  <div id="app">
    <header id="head">
      <img
        id="logo"
        class="animate__animated animate__bounce"
        alt="Vue logo"
        src="./assets/logo.png"
      />
      <h1 id="title">Catter</h1>
    </header>
    <router-link to="/cat-list">Breeds</router-link>
    <router-link to="/">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  methods: {
    created() {
      this.$store.dispatch("getCatBreeds");
    }
  }
};
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px;
}
#head {
  display: flex;
  flex-direction: row;
  position: relative;
  padding-top: 20px;
  height: 10vh;
  background-color: #ffb042;
  /*extra bold font*/
  font-weight: 900;
  margin-bottom: 20px;
}
#title {
  position: absolute;
  align-self: center;
  top: 5px;
  right: 45vw;
}
#logo {
  object-fit: scale-down;
  position: relative;
  top: -10px;
}
p {
  word-break: break-all;
}
</style>
