import api from './api'

export async function signUp(nome: string, email: string, password: string) {
    const response = await api.post('/user', { nome, email, password })
    return response.data
}
