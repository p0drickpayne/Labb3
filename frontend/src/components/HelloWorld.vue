<template>
  <div class="content">
    <div class="wrapper">
      <input type="button" value="Random Cat!" @click="getCat()" />
      <div id="img-container">
        <img id="cat" :src="$store.state.catPic" alt />
      </div>
      <div id="breed-container">
        <input type="button" value="get the breeds" @click="getBreeds()" />

        <ul id="list">
          <li
            :key="breed.name"
            v-for="breed in $store.state.catBreeds"
            @click="$store.commit('setBreed', breed)"
          >{{breed.name}}</li>
        </ul>
      </div>
      <div v-if="Object.keys($store.state.catBreed).length" id="breed-info">
        <h2>{{$store.state.catBreed.name}}</h2>
        <p>{{$store.state.catBreed.description}}</p>
        <p>Life span: {{$store.state.catBreed.life_span}}</p>
        <p>Origin: {{$store.state.catBreed.origin}}</p>
        <p @click="redirect()">More info</p>
      </div>
    </div>
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
    },
    getBreed() {
      this.$store.dispatch("getBreed");
      this.$store.commit("setBreed");
    },
    redirect() {
      window.location.href = this.$store.state.catBreed.wikipedia_url;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#list {
  height: 25vh;
  width: 25vw;
  overflow: auto;
  background-color: bisque;
  margin-left: 18px;
}
#cat {
  object-fit: scale-down;
  width: 100%;
  height: 100%;
}
#breed-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  height: 40vh;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: inherit;
  height: inherit;
}
#img-container {
  height: 25vh;
  width: 25vw;
  background-color: bisque;
}
input[type="button"] {
  width: 100px;
}
</style>
