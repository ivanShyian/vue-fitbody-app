import axios from 'axios'

const edamamAxios = axios.create({
  baseURL: process.env.VUE_APP_EDAMAM_API_URL
})

export default edamamAxios
