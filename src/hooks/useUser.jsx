import { jwtDecode } from "jwt-decode"
import { useEffect, useState } from "react"

export const useUser = () => {
  const [user, setUser] = useState({ username: "", id: 0, role: "" });
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUser({
          username: decodedToken.sub.username,
          id: decodedToken.sub.id_admin || decodedToken.sub.id_driver,
          role: decodedToken.sub.role,
        });
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
        setUser({ username: "", id: 0, role: "" });
      }
    }
  }, [token]);

  return { user };
};
