import React from "react";

export const PasswordForm = ({ setPassword }) => {
  return (
    <div className=" mt-5">
      <input
        type="password"
        className="h-9 w-64 rounded-xl bg-bg-100 border-bg-200 border-2 text-white px-4"
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};
