import React, { useState, useEffect } from 'react'
import ParticipantCard from '../components/ParticipantCard'
import { getListado } from '../services/api'
import { useSearchParams, useNavigate } from 'react-router-dom'

export default function Participantes() {
    const [lista, setLista] = useState([])
    const [q, setQ] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        const s = searchParams.get('search') || ''
        setQ(s)
        fetchList(s)
    }, [])

    function fetchList(query) {
        getListado(query).then(setLista).catch(() => setLista([]))
    }

    function onSearch(e) {
        e.preventDefault()
        setSearchParams(q ? { search: q } : {})
        fetchList(q)
    }

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3>Participantes</h3>
                <button className="btn btn-primary" onClick={() => navigate('/registro')}>Registrar</button>
            </div>
            <form onSubmit={onSearch} className="mb-3">
                <div className="input-group">
                    <input className="form-control" value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar por nombre" />
                    <button className="btn btn-outline-secondary" type="submit">Buscar</button>
                </div>
            </form>

            {lista.map(p => <ParticipantCard key={p.id} p={p} />)}
        </div>
    )
}
