<template>
  <div>
    <input type="button" value="Cat!" @click="getCat()" />
    <div id="img-container">
      <img id="cat" :src="$store.state.catPic" alt />
    </div>
    <input type="button" value="breeds" @click="getBreeds()" />
    <ul>
      {{$store.state.catBreeds[0]}}
      <li :key="breed.name" v-for="breed in $store.state.catBreeds">{{breed.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  methods: {
    getCat() {
      this.$store.dispatch("getCat");
    },
    getBreeds() {
      this.$store.dispatch("getCatBreeds");
      console.log(this.$store.state.catBreeds);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
#cat {
  object-fit: scale-down;
  width: 100%;
  height: 100%;
}
#img-container {
  height: 25vh;
  width: 25vw;
  background-color: bisque;
}
</style>
