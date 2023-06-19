import api from './api'
export class Conflict extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'Conflict'
    }
}

export async function postCategory(nome: string) {
    const response = await api.post('/category', { nome })
    return response.data
}

export async function getAllCategories(nome: string) {
    try {
        const response = await api.get('/category', { params: { nome } })
        return response.data
    } catch (error) {
        if (error.response.status === 409) {
            throw new Conflict('Categoria já existe')
        }
    }
}
