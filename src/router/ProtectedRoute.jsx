import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserStore } from "../store/useUserStore";

const ProtectedRoute = ({ children }) => {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
