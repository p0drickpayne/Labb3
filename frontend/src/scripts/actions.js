export const actions = {

    getCat(context) {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(result => {
                console.log(result[0].url)
                context.commit('setCatPic', result[0].url)
            })
    }
}