import { Navigate } from "react-router-dom";
/*
const ProtectedRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return children;
};*/

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (true) { // Change this to `true` to bypass login
      return children;
  }
  return <Navigate to="/login" />;
};


export default ProtectedRoute;
