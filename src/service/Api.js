import axios from 'axios'

export const Api = axios.create({
  baseURL: 'http://nodep2.ddns.net:3000'
})