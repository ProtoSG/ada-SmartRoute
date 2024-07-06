import React from "react";

export const UserNameForm = ({ setUsername }) => {
  return (
    <div>
      <input
        type="text"
        className="h-9 w-64 rounded-xl bg-bg-100 border-bg-200 border-2 text-white px-4"
        placeholder="Username..."
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};
