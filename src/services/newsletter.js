import Api from './api';

export function saveNewsLetter(name, email) {
    return Api.post ('v1/newsletter', {name, email})
    
}

