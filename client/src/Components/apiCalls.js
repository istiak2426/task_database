import axios from "axios"


const API = "http://localhost:3001/api"

export const createCategory = ( data ) => {

    return axios.post(`${API}/category`, data)
}

export const createProduct = (data, term) => {
     return axios.post(`${API}/product`, {

        name:data.name,
        category:data.category,
        term: term

    })
}

export const getCategories = () => {
    return axios.get(`${API}/category`)
}

export const getProducts = () => {
    return axios.get(`${API}/product/`)
}

