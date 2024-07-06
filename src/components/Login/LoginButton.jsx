import React from "react";

export const LoginButton = ({ handleLogin }) => {
  return (
    <div>
      <button
        type="submit"
        className="bg-orange-600 h-9 w-64 rounded-xl text-white"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};
