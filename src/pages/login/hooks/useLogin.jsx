import { useState } from "react";
import { loginAdmin, loginDriver } from "../../../services/login.service"; // Actualiza la ruta si es necesario
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const login = async (username, password, role) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      let response;
      if (role === "admin") {
        response = await loginAdmin(username, password);
      } else if (role === "driver") {
        response = await loginDriver(username, password);
      } else {
        throw new Error("Invalid role");
      }
      setData(response);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, data };
};

export default useLogin;
