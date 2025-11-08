import React, { useState } from 'react';
import { postRegistro } from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Registro() {
    const nav = useNavigate();
    const [form, setForm] = useState({ nombre: '', apellidos: '', email: '', twitter: '', ocupacion: '', avatar: '', acepto: false });
    const [loading, setLoading] = useState(false); 

    const isInvalid = !form.acepto || !form.nombre || !form.apellidos || !form.email;

    const onSubmit = async (e) => {
        e.preventDefault();
        if (isInvalid) return; 

        setLoading(true);
        try {
            await postRegistro(form);
            nav('/participantes');
        } catch (err) {
            alert('Error al guardar el registro. Inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm({
            ...form,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <h2 className="text-center mb-4 fw-bold text-primary">Regístrate al Congreso</h2>
                    <p className="text-center text-muted mb-4">Completa tus datos para obtener tu gafete digital y acceso al evento.</p>

                    <div className="card p-4 shadow-lg border-0">
                        <form onSubmit={onSubmit}>

                            {/* Grupo: Nombre y Apellidos */}
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <input name="nombre" className="form-control form-control-lg" placeholder="Nombre *" value={form.nombre} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6">
                                    <input name="apellidos" className="form-control form-control-lg" placeholder="Apellidos *" value={form.apellidos} onChange={handleChange} required />
                                </div>
                            </div>

                            {/* Grupo: Contacto (Email, Ocupación) */}
                            <div className="mb-3">
                                <input name="email" type="email" className="form-control form-control-lg" placeholder="Email *" value={form.email} onChange={handleChange} required />
                                <small className="text-muted">Tu email no será público.</small>
                            </div>

                            <div className="mb-3">
                                <input name="ocupacion" className="form-control" placeholder="Ocupación (Ej. Desarrollador Senior)" value={form.ocupacion} onChange={handleChange} />
                            </div>

                            {/* Grupo: Extras (Twitter, Avatar) */}
                            <div className="mb-3">
                                <div className="input-group">
                                    <span className="input-group-text"><i className="bi bi-twitter"></i></span>
                                    <input name="twitter" className="form-control" placeholder="Usuario de Twitter (opcional)" value={form.twitter} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="mb-4">
                                <div className="input-group">
                                    <span className="input-group-text"><i className="bi bi-person-circle"></i></span>
                                    <input name="avatar" className="form-control" placeholder="URL Avatar (opcional)" value={form.avatar} onChange={handleChange} />
                                </div>
                            </div>

                            {/* Aceptación y Botón */}
                            <div className="form-check mb-4">
                                <input
                                    name="acepto"
                                    className="form-check-input"
                                    type="checkbox"
                                    id="acepto"
                                    checked={form.acepto}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="acepto">Acepto los <a href="#" className="text-decoration-none">términos y condiciones</a></label>
                            </div>

                            <button
                                className="btn btn-primary btn-lg w-100"
                                type="submit"
                                disabled={isInvalid || loading} // Deshabilita si es inválido o está cargando
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Guardando...
                                    </>
                                ) : (
                                    'Completar Registro'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}