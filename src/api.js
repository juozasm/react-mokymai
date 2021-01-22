const BASE_PATH = 'https://api.chucknorris.io'

const METHODS = {
    GET: 'GET'
}

export async function getRandomJoke() {
    try {
        const response = await fetch(BASE_PATH+'/jokes/random' , {
            method: METHODS.GET,
          })
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}