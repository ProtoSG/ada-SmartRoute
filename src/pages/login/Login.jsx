import { FormsLogin } from "../../components/Login/FormsLogin";
import { LoginButton } from "../../components/Login/LoginButton";
import { TitleLogin } from "../../components/Login/TitleLogin";

export const Login = () => {
  return (
    <div className="flex flex-col gap-14 justify-center text-center align-middle  grow h-auto w-auto">
      <TitleLogin></TitleLogin>
      <FormsLogin></FormsLogin>
      <LoginButton></LoginButton>
    </div>
  );
};
