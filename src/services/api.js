import axios from 'axios'

const Api = axios.create({
    baseURL:'https://corebiz-test.herokuapp.com/api/',
})

export default Api;

