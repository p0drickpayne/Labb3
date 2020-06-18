

export const computed = {

    //computed properties for catpics
    catPic: {
        get() {
            return this.$store.state.catPic
        },
        set(newId) {
            this.$store.commit('setPinId', newId)
        }
    }
}