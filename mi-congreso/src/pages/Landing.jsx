import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const nav = useNavigate();

    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center p-4">
            <div className="mb-5">
                <i className="bi bi-robot text-primary mb-3" style={{ fontSize: '4rem' }}></i>

                <h1 className="mb-2 display-4 fw-bold">
                    Congreso Internacional de Tecnologías Digitales 2024
                </h1>
                <p className="lead text-secondary" style={{ maxWidth: 700 }}>
                    Explora el futuro de la tecnología con expertos globales. ¡Tu oportunidad para innovar!
                </p>
            </div>

            <div className="mb-5" style={{ maxWidth: '800px', width: '100%' }}>

                <img
                    src="https://www.channelpartner.es/wp-content/uploads/2022/11/65606_76.jpg" 
                    alt="Ilustración del Congreso de Tecnologías"
                    className="img-fluid rounded shadow-sm"
                />
            </div>

            <div className="d-flex flex-column flex-md-row gap-3">
                <button
                    className="btn btn-primary btn-lg px-5 py-3 shadow-lg"
                    onClick={() => nav('/registro')}
                >
                    ¡Regístrate Ahora!
                </button>
                <button
                    className="btn btn-outline-secondary btn-lg px-5 py-3"
                    onClick={() => nav('/participantes')}
                >
                    Ver la Lista de Ponentes
                </button>
            </div>

            <div className="position-absolute bottom-0 end-0 p-3 d-none d-md-block">
                <i className="bi bi-arrow-right-circle-fill text-muted" style={{ fontSize: '2rem' }}></i>
            </div>
        </div>
    );
}