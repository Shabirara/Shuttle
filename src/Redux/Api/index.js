import axios from 'axios'

export const searchApi = () => {
    return axios({
        method: 'GET',
        url: 'https://final-project-shuttle.herokuapp.com/search/',
    })
}