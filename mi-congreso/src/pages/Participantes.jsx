import React, { useState, useEffect } from 'react'
import ParticipantCard from '../components/ParticipantCard'
import { getListado } from '../services/api'
import { useSearchParams, useNavigate } from 'react-router-dom'
// Asegúrate de que tu CSS global o un archivo CSS específico esté importado
// import './Participantes.css' // <-- Por ejemplo, si creas este archivo

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
        <div className="container py-5 animated-fade-in"> {/* Añadido py-5 y animación */}
            {/* Cabecera con título y botón de registro */}
            <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom header-section"> {/* Más padding y un borde inferior */}
                <h3 className="title-text">Participantes del Evento</h3> {/* Clase para estilo de título */}
                <button
                    className="btn btn-primary btn-lg register-button shadow-sm" // btn-lg, shadow-sm, custom class
                    onClick={() => navigate('/registro')}
                >
                    <i className="bi bi-person-plus-fill me-2"></i> Registrar Nuevo
                </button>
            </div>

            {/* Formulario de búsqueda */}
            <form onSubmit={onSearch} className="mb-4 search-form"> {/* Clase custom para formulario */}
                <div className="input-group search-input-group shadow-sm"> {/* Clase custom y sombra */}
                    <input
                        className="form-control form-control-lg search-input" // form-control-lg para input más grande
                        value={q}
                        onChange={e => setQ(e.target.value)}
                        placeholder="Buscar por nombre o ID..."
                    />
                    <button className="btn btn-info search-button" type="submit"> {/* btn-info para un color diferente */}
                        <i className="bi bi-search me-2"></i> Buscar
                    </button>
                </div>
            </form>

            {/* Listado de participantes */}
            <div className="participants-grid"> {/* Contenedor para aplicar un posible grid o gap */}
                {lista.length === 0 && (
                    <div className="alert alert-warning text-center mt-4 shadow-sm" role="alert">
                        No se encontraron participantes con este criterio de búsqueda.
                    </div>
                )}
                {lista.map(p => (
                    <ParticipantCard key={p.id} p={p} />
                    // Asume que ParticipantCard también tiene estilos llamativos
                    // como sombras o un fondo diferenciado.
                ))}
            </div>

            {/* Puedes añadir un footer o más elementos aquí si es necesario */}
            <div className="text-center text-muted mt-5">
                <small>&copy; {new Date().getFullYear()} Tu Aplicación. Todos los derechos reservados.</small>
            </div>
        </div>
    )
}