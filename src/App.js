import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { useLocation, useNavigate, Route, Routes } from "react-router-dom";
import { useLocalStorageState } from "ahooks";
import store from "./store/reducer";
import { Layout } from "./components/layout";
import { Sponsors } from "./pages/sponsors";
import { Students } from "./pages/students";
import { Sponsor } from "./pages/editSponsors";
import { Login } from "./pages/loginPage";
import { Dashboard } from "./pages/dashboard/index";

function App() {
    const [userActivated, setUserActivated] = useLocalStorageState("userActivated", {
        defaultValue: false,
    });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!userActivated && location.pathname !== "/login") {
            navigate("/login");
        } else if (userActivated && location.pathname === "/login") {
            navigate("/admin/dashboard");
        }
    }, [userActivated, location, navigate]);

    return (
        <Provider store={store}>
            <ConfigProvider theme={{ token: {} }}>
                <Routes>
                    <Route path="/login" element={<Login setUserActivated={setUserActivated} />} />
                    {userActivated ? (
                        <Route path="admin" element={<Layout />}>
                            <Route path="/admin" element={<Dashboard />} />
                            <Route path="sponsors" element={<Sponsors />} />
                            <Route path="students" element={<Students />} />
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="sponsors/:id" element={<Sponsor />} />
                        </Route>
                    ) : null}
                </Routes>
            </ConfigProvider>
        </Provider>
    );
}

export default App;
