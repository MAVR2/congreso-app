import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ParticipantCard({ p }) {
    const nav = useNavigate();

    const handleCardClick = () => {
        nav(`/gafete/${p.id}`);
    };

    // 💡 Lógica de validación de avatar
    const hasAvatar = p.avatar && p.avatar.length > 5; // Verifica que la URL no esté vacía o sea muy corta

    // Define un icono de reemplazo (placeholder) si no hay avatar
    const DefaultAvatar = (
        <div
            className="rounded-circle border border-3 border-primary bg-light d-flex justify-content-center align-items-center"
            style={{ width: '72px', height: '72px' }}
        >
            {/* Icono de persona de Bootstrap Icons */}
            <i className="bi bi-person-fill text-secondary" style={{ fontSize: '2.5rem' }}></i>
        </div>
    );

    return (
        <div
            className="card mb-4 border-0 shadow participant-card-animated"
            onClick={handleCardClick}
            style={{ cursor: 'pointer' }}
        >
            <div className="row g-0 align-items-center">

                <div className="col-auto p-3">
                    {/* Condición: Si hay avatar, usa la imagen. Si no, usa el placeholder. */}
                    {hasAvatar ? (
                        <img
                            src={p.avatar}
                            alt={p.nombre}
                            className="rounded-circle border border-3 border-primary"
                            width="72"
                            height="72"
                            // Opcional: Manejar errores de carga de la imagen (por si la URL es incorrecta)
                            onError={(e) => {
                                e.target.style.display = 'none'; // Oculta la imagen rota
                                e.target.parentNode.innerHTML = ReactDOMServer.renderToString(DefaultAvatar); // Reemplaza con el placeholder
                            }}
                        />
                    ) : (
                        DefaultAvatar
                    )}
                </div>

                <div className="col">
                    <div className="card-body py-3">
                        <h5 className="card-title fw-bold mb-1 text-dark text-truncate">{p.nombre} {p.apellidos}</h5>
                        <p className="card-text mb-1 text-muted small text-truncate">{p.ocupacion}</p>

                        {p.twitter && (
                            <a
                                href={`https://twitter.com/${p.twitter}`}
                                target="_blank"
                                rel="noreferrer"
                                className="text-info text-decoration-none fw-semibold participant-link"
                                onClick={(e) => e.stopPropagation()}
                            >
                                @{p.twitter}
                            </a>
                        )}
                    </div>
                </div>

                <div className="col-auto p-3 d-none d-md-block">
                    <i className="bi bi-arrow-right-short fs-3 text-primary"></i>
                </div>
            </div>
        </div>
    );
}