import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ParticipantCard({ p }) {
    const nav = useNavigate()
    return (
        <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0 align-items-center">
                <div className="col-auto p-3" style={{ cursor: 'pointer' }} onClick={() => nav(`/gafete/${p.id}`)}>
                    <img src={p.avatar} alt={p.nombre} className="rounded-circle" width="64" height="64" />
                </div>
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">{p.nombre} {p.apellidos}</h5>
                        <p className="card-text">{p.ocupacion}</p>
                        <a href={`https://twitter.com/${p.twitter}`} target="_blank" rel="noreferrer">@{p.twitter}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
