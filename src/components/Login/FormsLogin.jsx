import React from "react";
import { PasswordForm } from "./PasswordForm";
import { UserNameForm } from "./UserNameForm";

export const FormsLogin = () => {
  return (
    <div className="">
      <UserNameForm></UserNameForm>
      <PasswordForm></PasswordForm>
    </div>
  );
};
