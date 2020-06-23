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

    },
    getCatBreeds(context) {
        fetch('https://api.thecatapi.com/v1/breeds', {
            headers: {
                'x-api-key': 'e61797a8-1259-407b-b758-20182d12b50b'

            }

        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                context.commit('setCatBreeds', result)
                // for (let i = 0; i < result.length; i++) {
                //     const breed = result[i];
                //     context.commit('setCatBreeds', breed)
                //     console.log(breed)
                // }

            })

    }

}