import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({
        _id: '',
        email: '',
        token: ''
    });

    const login = (userData) => {
        setIsLoggedIn(true);
        setUserData({
            _id: userData._id,
            email: userData.email,
            token: userData.token,
        });
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserData({
            _id: '',
            email: '',
            token: ''
        });
        localStorage.clear();
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, userData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
