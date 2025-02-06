import { BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthContext";
import Navbar from "./components/partials/Navbar";
import { authRoutes, publicRoutes } from "./routes"; // Import routes

export default function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout />
            </AuthProvider>
        </Router>
    );
}

// ✅ Layout component (fixes Navbar visibility logic)
function Layout() {
    const location = useLocation();

    // Hide Navbar on specific pages
    const hideNavbar = ["/", "/register", "/public/product"].includes(
        location.pathname
    );

    return (
        <>
            {!hideNavbar && <Navbar />}
            <Routes>
                {publicRoutes}
                {authRoutes}
            </Routes>
        </>
    );
}
