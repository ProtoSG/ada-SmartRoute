import React, { useState, useEffect } from "react";
import { FormsLogin } from "../../components/Login/FormsLogin";
import { LoginButton } from "../../components/Login/LoginButton";
import { TitleLogin } from "../../components/Login/TitleLogin";
import useLogin from "./hooks/useLogin";
import { jwtDecode } from "jwt-decode";
import { useUser } from "../../hooks/useUser";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const { login, loading, error, data } = useLogin();

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1224) {
      setRole("admin");
    } else {
      setRole("driver");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { login: loginUser } = useUser();

  const handleLogin = async () => {
    try {
      const loginData = await login(username, password, role);
      if (loginData) {
        const token = loginData.token;
        console.log("Login successful:", loginData);
        localStorage.setItem("token", token);

        const decodedToken = jwtDecode(token);
        const user = {
          username: decodedToken.sub.username,
          id: decodedToken.sub.id_admin || decodedToken.sub.id_driver,
          role: decodedToken.sub.role,
        };

        loginUser(user);

        if (role === "admin") {
          window.location.href = "/";
        } else {
          window.location.href = "/conductor";
        }
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex flex-col gap-14 justify-center text-center align-middle grow h-auto w-auto">
      <TitleLogin />
      <FormsLogin setUsername={setUsername} setPassword={setPassword} />
      <LoginButton handleLogin={handleLogin} />
      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {data && <p className="text-green-500">Login exitoso!</p>}
    </div>
  );
};
