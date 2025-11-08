import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
    const nav = useNavigate()

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
            <h1 className="mb-3">Congreso de Tecnologías de la Información</h1>
            <p className="mb-4 px-3" style={{ maxWidth: 600 }}>
                Bienvenido al sistema del congreso. Aquí podrás registrarte como participante,
                consultar la lista de asistentes y generar tu gafete digital.
            </p>
            <div className="d-flex gap-3">
                <button className="btn btn-primary" onClick={() => nav('/registro')}>Registrarme</button>
                <button className="btn btn-outline-secondary" onClick={() => nav('/participantes')}>Ver participantes</button>
            </div>
        </div>
    )
}
