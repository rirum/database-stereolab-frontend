import api from './api'

export async function postCategory(nome: string) {
    const response = await api.post('/category', { nome })
    return response.data
}

export async function getAllCategories(nome: string) {
    const response = await api.get('/category', { params: { nome } })
    return response.data
}
