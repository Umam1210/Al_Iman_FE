import React from "react";
// import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ userRole, children }) => {
    // const isLogin = useSelector((state) => state.auth?.isLogin);
    const userData = JSON.parse(localStorage.getItem('userData'));

    if (!userData?.[3]?.isLogin) {
        return <Navigate to="/" replace={true} />;
    }

    if (userData?.[0]?.role !== userRole) {
        return <Navigate to="/pembeli/katalog" replace={true} />;
    }

    return children;
};