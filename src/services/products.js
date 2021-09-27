import Api from './api';

export function getProducts(name, email) {
    return Api.get ('v1/products', {name, email})
    
}