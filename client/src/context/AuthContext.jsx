import { createContext, useContext, useState } from "react";
import axiosClient from "../services/axiosClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        localStorage.getItem("token") ? {} : null
    );

    const login = async (email, password) => {
        const response = await axiosClient.post("/login", {
            email,
            password
        });

        localStorage.setItem("token", response.data.token);
        setUser({ email });

        return response.data;
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);