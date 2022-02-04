
const URL = "https://www.swapi.tech/api"



export const getStarWars = () => {
    const url = URL + "/people"
    return fetch(url);
}