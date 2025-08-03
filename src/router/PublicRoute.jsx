import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth); // adjust based on your auth state

  return !user ? children : <Navigate to="/" replace />;
};

export default PublicRoute;
