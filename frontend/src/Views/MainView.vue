<template>
  <div class="content">
    <div>
      <img :src="$store.state.catPic" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainView",
  methods: {
    created() {
      this.$store.dispatch("getCat");
    }
  }
};
</script>

<style scoped>
.content {
  background-color: orange;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-width: 80vw;
  min-height: 80vh;
}
p {
  font-size: 72pt;
  color: black;
}
</style>