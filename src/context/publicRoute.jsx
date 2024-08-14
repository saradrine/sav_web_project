import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext.jsx";

const PublicRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (currentUser && currentUser.role === "Client") {
    return <Navigate to="/" />;
  } else if (
    currentUser &&
    ["Admin", "SuperAdmin"].includes(currentUser.role)
  ) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default PublicRoute;
