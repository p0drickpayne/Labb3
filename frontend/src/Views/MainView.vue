<template>
  <div class="content">
    <div id="wrap-row">
      <div>
        <h1>Welcome to Catter</h1>
        <p>Here you can get som info about cats</p>
        <p>Press Breeds to get to the cat info page</p>
      </div>
      <div id="form">
        <p>please write something so i can show that i know how to use v-model</p>
        <input v-model="$store.state.vmodel" type="text" placeholder="v-model text" />
        <p v-if="$store.state.vmodel.length">{{$store.state.vmodel}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "../scripts/computed";

export default {
  name: "MainView",
  computed: computed,

  methods: {
    // getVmodel() {
    //   this.$store.dispatch("vModel");
    // }
  }
};
</script>

<style scoped>
#wrap-row {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-self: center;
  width: 60vw;
}
</style>