import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ParticipantCard({ p }) {
    const nav = useNavigate();

    // Función para navegar al hacer clic en cualquier parte de la tarjeta
    const handleCardClick = () => {
        nav(`/gafete/${p.id}`);
    };

    return (
        <div
            className="card mb-4 border-0 shadow-sm participant-card-hover"
            onClick={handleCardClick}
        >
            <div className="row g-0 align-items-center">
                {/* Columna de Avatar */}
                <div
                    className="col-auto p-3"
                // No necesitas cursor: 'pointer' ni onClick aquí si lo pones en el padre
                >
                    <img
                        src={p.avatar}
                        alt={p.nombre}
                        className="rounded-circle border border-3 border-primary"
                        width="72"
                        height="72"
                    />
                </div>

                {/* Columna de Contenido */}
                <div className="col">
                    <div className="card-body py-3"> {/* py-3 reduce el padding vertical un poco */}
                        <h5 className="card-title fw-bold mb-1 text-dark">{p.nombre} {p.apellidos}</h5>
                        <p className="card-text mb-1 text-muted small">{p.ocupacion}</p>

                        {/* Enlace de Twitter */}
                        {p.twitter && (
                            <a
                                href={`https://twitter.com/${p.twitter}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-info text-decoration-none fw-semibold"
                                // Previene que la navegación de la tarjeta se active al hacer clic en el enlace
                                onClick={(e) => e.stopPropagation()}
                            >
                                @{p.twitter}
                            </a>
                        )}
                    </div>
                </div>

                {/* Indicador de Acción (Opcional, solo para hacerlo más llamativo) */}
                <div className="col-auto p-3 d-none d-md-block">
                    <i className="bi bi-arrow-right-short fs-3 text-primary"></i>
                </div>
            </div>
        </div>
    );
}