// src/pages/Gafete.jsx
import React from "react";
import { useLoaderData } from "react-router-dom";
import { getParticipante } from "../services/api";

export async function loaderGafete({ params }) {
    return await getParticipante(params.id).catch(() => null);
}

export default function Gafete() {
    const p = useLoaderData();

    if (!p) return <div className="container py-4">Cargando...</div>;

    return (
        <div className="container py-4 d-flex justify-content-center">
            <div className="card p-4" style={{ width: 360 }}>
                <div className="text-center mb-3">
                    <img
                        src={p.avatar}
                        alt={p.nombre}
                        className="rounded-circle"
                        width="120"
                        height="120"
                    />
                </div>
                <h4 className="text-center">{p.nombre} {p.apellidos}</h4>
                <p className="text-center">{p.ocupacion}</p>
                <div className="text-center">
                    <a href={`https://twitter.com/${p.twitter}`} target="_blank" rel="noreferrer">
                        @{p.twitter}
                    </a>
                </div>
            </div>
        </div>
    );
}
