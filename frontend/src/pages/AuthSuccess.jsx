import { useEffect } from "react";

const AuthSuccess = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const user = JSON.parse(decodeURIComponent(params.get("user")));
    localStorage.setItem("googleUser", JSON.stringify(user));
    window.location.href = "/"; // redirect หลัง login
  }, []);

  return <div>Logging in...</div>;
};

export default AuthSuccess;