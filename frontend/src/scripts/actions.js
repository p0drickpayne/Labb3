export const actions = {

    getCat(context) {
        fetch('https://api.thecatapi.com/v1/images/search', {
            headers: {
                'x-api-key': 'e61797a8-1259-407b-b758-20182d12b50b'

            }

        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                context.commit('setCatPic', result[0].url)

            })

    }
}