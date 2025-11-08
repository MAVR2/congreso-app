import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>404</h1>
            <p>page not found</p>
            <p>{error.statusText || error.message}</p>

            <Link to={"/"}>Volver a inicio </Link>
        </div>
    );
};

export default NotFound;