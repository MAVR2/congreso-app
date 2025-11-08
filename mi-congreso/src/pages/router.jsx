// router.js
import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "./NotFound";

import Landing from "./Landing";
import Participantes from "./Participantes";
import Registro from "./Registro";
import Gafete, { loaderGafete } from "./Gafete";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutPublic />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <Landing />, index: true },
            { path: "/participantes", element: <Participantes /> },
            { path: "/registro", element: <Registro /> },
            { path: "/gafete/:id", element: <Gafete />, loader: loaderGafete },
        ],
    },
]);