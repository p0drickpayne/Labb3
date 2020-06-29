<template>
  <div>
    <HelloWorld cat="Hello Cat"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "HelloWorldView",
  components: {
    HelloWorld
  }
};
</script>

<style>
</style>