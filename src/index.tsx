import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import "./index.css"
import ProtectedRoute from "./Routes/ProtectedRoute";
import { AuthProvider } from "./Auth/AuthProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,    
    },
    {
        path: "/",
        element: <ProtectedRoute />,
        children: [
            {
                path: "/home",
                element: <Home />,    
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);