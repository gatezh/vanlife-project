import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequired() {
  const location = useLocation();
  const authenticated = localStorage.getItem("loggedin");

  if (!authenticated) {
    return (
      <Navigate
        to="login"
        state={{
          message: "You must log in first",
          fromPath: location.pathname
        }}
        replace />
    )
  }

  return <Outlet />;
}
