import { Navigate, useLocation, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const location = useLocation();
    let isLoggedIn = () => {
        // return localStorage.getItem("loggedIn") === "true" ? 1 : 0
        return true
    };
    console.log(isLoggedIn());
    return isLoggedIn() ? (
        <Outlet />
    ) : (
        <Navigate to="/admin/login" state={{ from: location }} replace />
    );
};

export default ProtectedRoutes;