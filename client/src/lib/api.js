import axios from 'axios'

const baseUrl = '/api'

export function getAllPictures() {
  return axios.get(`${baseUrl}/pictures/`)
}
