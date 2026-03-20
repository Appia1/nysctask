import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const { user, role: userRole } = useSelector((state) => state.auth);

  if (!user) return <Navigate to="/" />;

  if (role && role !== userRole) return <Navigate to="/dashboard" />;

  return children;
};

export default ProtectedRoute;