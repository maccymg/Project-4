import axios from 'axios'

const baseUrl = '/api'

export function getAllPictures() {
  return axios.get(`${baseUrl}/pictures/`)
}

export function getSinglePicture(id) {
  return axios.get(`${baseUrl}/pictures/${id}/`)
}

export function createForm(formdata) {
  return axios.post(`${baseUrl}/enquire/`, formdata)
}
