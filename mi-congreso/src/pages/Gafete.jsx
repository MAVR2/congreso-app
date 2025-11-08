// src/pages/Gafete.jsx
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getParticipante } from "../services/api";

export async function loaderGafete({ params }) {
    return await getParticipante(params.id).catch(() => null);
}

export default function Gafete() {
    const p = useLoaderData();
    const [isFlipped, setIsFlipped] = useState(false);

    if (!p)
        return (
            <div className="container py-5 text-center">
                Cargando datos del gafete...
            </div>
        );

    const avatarSrc =
        p.avatar && p.avatar.length > 5
            ? p.avatar
            : "https://via.placeholder.com/120?text=Avatar";
    const hasTwitter = p.twitter && p.twitter.length > 1;

    return (
        <div className="container py-5 d-flex justify-content-center">
            <div
                className="position-relative"
                style={{ width: "22rem", height: "34rem" }}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                {/* Frontal */}
                <div
                    className={`card h-100 w-100 text-center p-4 border-3 border-primary shadow ${isFlipped ? "d-none" : ""
                        }`}
                >
                    <div className="mb-3">
                        <h6 className="text-muted">CONGRESO DE TECNOLOGÍAS</h6>
                        <i className="bi bi-cpu-fill text-primary fs-2"></i>
                    </div>

                    <img
                        src={avatarSrc}
                        alt={p.nombre}
                        className="rounded-circle border border-4 border-light mx-auto mb-3"
                        width="150"
                        height="150"
                    />

                    <h4 className="fw-bold mb-0">{p.nombre} {p.apellidos}</h4>
                    <p className="text-primary mb-4">{p.ocupacion}</p>

                    <div className="mt-auto">
                        <span className="badge bg-primary fs-6">PARTICIPANTE ACTIVO</span>
                    </div>
                </div>

                {/* Reverso */}
                <div
                    className={`card h-100 w-100 text-center p-4 border-3 border-secondary bg-light shadow position-absolute top-0 start-0 ${isFlipped ? "" : "d-none"
                        }`}
                >
                    <h4 className="text-secondary mb-4">Verificación y Contacto</h4>

                    <div className="bg-white border d-inline-block p-3 mb-4">
                        <i className="bi bi-qr-code fs-1 text-secondary"></i>
                    </div>

                    <h6 className="text-dark mb-1">ID: {p.id}</h6>
                    <p className="small text-muted">Escanea para verificar la acreditación.</p>

                    {hasTwitter && (
                        <a
                            href={`https://twitter.com/${p.twitter}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-info text-decoration-none fw-semibold fs-5"
                        >
                            <i className="bi bi-twitter me-2"></i>@{p.twitter}
                        </a>
                    )}

                    <div className="mt-auto pt-3">
                        <p className="small text-muted mb-0">
                            ¡Gracias por asistir al Congreso IT!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
