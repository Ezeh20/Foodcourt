import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const App = () => {
  const { user } = useContext(UserContext);
  return (
    <Routes>
      <Route index element={<Login />} />
      {user.authenticated ? (
        <Route path="profile" element={<Profile />} />
      ) : undefined}
      <Route path="*" element={<h1>Unauthorized</h1>} />
    </Routes>
  );
};
