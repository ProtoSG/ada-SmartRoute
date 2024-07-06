import { PasswordForm } from "./PasswordForm";
import { UserNameForm } from "./UserNameForm";

export const FormsLogin = ({ setUsername, setPassword }) => {
  return (
    <div className="">
      <UserNameForm setUsername={setUsername} />
      <PasswordForm setPassword={setPassword} />
    </div>
  );
};
