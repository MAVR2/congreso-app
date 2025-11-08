import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer mt-auto py-3 bg-dark text-white-50">
            <div className="container text-center">

                <span className="text-white-50">
                    &copy; {new Date().getFullYear()} Tu Aplicación. Todos los derechos reservados.
                </span>

                <div className="mt-2 small">
                    <a href="/politica-privacidad" className="text-white-50 text-decoration-none mx-2">
                        Política de Privacidad
                    </a>
                    |
                    <a href="/contacto" className="text-white-50 text-decoration-none mx-2">
                        Contacto
                    </a>
                </div>
            </div>
        </footer>
    );
}