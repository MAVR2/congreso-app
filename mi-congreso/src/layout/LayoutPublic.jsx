import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function LayoutPublic() {
    const navigation = useNavigation();
    return (
        <>
            <main className="container">
                {navigation.state === "loading" && (
                    <div className="alert alert-info text-center my-5">Loading... </div>
                )}
                <Outlet />
            </main>
        </>
    );
}