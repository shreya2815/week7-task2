import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div>
            <h1>Welcome to Your Dashboard!</h1>

            <p>You are successfully logged in.</p>

            <p>Email: {user?.email || "Authenticated User"}</p>

            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;