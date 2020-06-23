

export const computed = {

    //computed properties for catpics
    catBreed: {
        get() {
            return this.$store.state.catBreeds
        },
        set(newCatBreed) {
            this.$store.commit('setCatBreeds', newCatBreed)
        }
    }

}