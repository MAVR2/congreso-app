import axios from 'axios'

const api = axios.create({
    baseURL: 'https://mi-congreso-server.onrender.com/api'
})

export const getListado = (q) =>
    api.get('/listado', { params: q ? { q } : {} }).then(r => r.data)

export const getParticipante = (id) =>
    api.get(`/participante/${id}`).then(r => r.data)

export const postRegistro = (payload) =>
    api.post('/registro', payload).then(r => r.data)
