import React, { useState, useEffect } from 'react'
import ParticipantCard from '../components/ParticipantCard'
import { getListado } from '../services/api'
import { useSearchParams, useNavigate } from 'react-router-dom'


export default function Participantes() {
    const [lista, setLista] = useState([])
    const [q, setQ] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    function fetchList(query) {
        getListado(query || '').then(setLista).catch(() => setLista([]))
    }

    useEffect(() => {
        const currentQuery = searchParams.get('search') || ''
        setQ(currentQuery)
        fetchList(currentQuery)
    }, [searchParams])

    function onSearch(e) {
        e.preventDefault()
        setSearchParams(q ? { search: q } : {})
    }

    return (
        <div className="container py-5 animated-fade-in">
            <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom header-section"> 
                <h3 className="title-text">Participantes del Evento</h3> 
                <button
                    className="btn btn-primary btn-lg register-button shadow-sm" 
                    onClick={() => navigate('/registro')}
                >
                    <i className="bi bi-person-plus-fill me-2"></i> Registrar Nuevo
                </button>
            </div>

            <form onSubmit={onSearch} className="mb-4 search-form"> 
                <div className="input-group search-input-group shadow-sm"> 
                    <input
                        className="form-control form-control-lg search-input" 
                        value={q}
                        onChange={e => setQ(e.target.value)}
                        placeholder="Buscar por nombre o ID..."
                    />
                    <button className="btn btn-info search-button" type="submit"> 
                        <i className="bi bi-search me-2"></i> Buscar
                    </button>
                </div>
            </form>

            <div className="participants-grid"> 
                {lista.length === 0 && (
                    <div className="alert alert-warning text-center mt-4 shadow-sm" role="alert">
                        No se encontraron participantes con este criterio de búsqueda.
                    </div>
                )}
                {lista.map(p => (
                    <ParticipantCard key={p.id} p={p} />

                ))}
            </div>
        </div>
    )
}