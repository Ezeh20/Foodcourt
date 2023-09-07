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
      <Route path="profile" element={<Profile />} />
      {/* {user.authenticated ? (
        <Route path="details" element={<Details />} />
      ) : undefined} */}
      <Route path="*" element={<h1>Unauthorized</h1>} />
    </Routes>
  );
};
