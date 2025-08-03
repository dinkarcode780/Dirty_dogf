import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useSelector((state) => state.auth); // adjust based on your auth state

  if (loading) {
    return <div className="text-center py-10">Checking authentication...</div>;
  }
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
