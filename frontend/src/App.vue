<template>
  <div class="frame">
    <div id="app">
      <img class="animate__animated animate__bounce" alt="Vue logo" src="./assets/logo.png" />
      <p>Hello</p>
      <vue-tags-input
        v-model="$store.state.tag"
        :tags="$store.state.tags"
        @tags-changed="newTags => $store.state.tags = newTags"
      />
      <router-link to="/">Home</router-link>
      <br />
      <router-link to="/main-view">Another view</router-link>
      <input type="button" value="Cat!" @click="getCat()" />
      <img :src="$store.state.catPic" alt />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  methods: {
    getCat() {
      this.$store.dispatch("getCat");
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
