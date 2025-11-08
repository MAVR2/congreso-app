import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; 

export default function LayoutPublic() {
    const navigation = useNavigation();

    const isLoading = navigation.state === "loading";

    return (
        <div className="d-flex flex-column min-vh-100"> 

            <Navbar />

            {isLoading && (
                <div
                    className="loading-overlay fixed-top w-100 h-100 d-flex justify-content-center align-items-center"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', zIndex: 9999 }} 
                >
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            )}

            <main className="container flex-grow-1 py-4">

                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

