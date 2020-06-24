

export const computed = {

    //computed properties for catpics
    vModel: {
        get() {
            return this.$store.state.vmodel
        },
        set(newVModel) {
            this.$store.commit('setVModel', newVModel)
        }
    }

}