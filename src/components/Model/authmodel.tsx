import { authModelState } from "@/atoms/authModelAtom";
import LoginModel from "./login";
import ResetPassModel from "./resetpass";
import SignUpModel from "./signup";
import { useSetRecoilState, useRecoilValue } from "recoil";

export default function AuthModel() {
  const setAuthModel = useSetRecoilState(authModelState);
  const authModel = useRecoilValue(authModelState);

  const handleClick = () => {
    setAuthModel((prev) => ({ ...prev, isOpen: false, type: "login" }));
  };
  return (
    <div className="absolute top-0 left-0 h-screen w-full flex items-center justify-center bg-black bg-opacity-60 text-white">
      <div
        className="z-10 w-full h-screen absolute "
        onClick={() => handleClick()}
      ></div>
      <div className="z-20 bg-white text-black px-10 py-5 w-1/3 it">
        <p
          className="text-right py-2 cursor-pointer font-extrabold font-xl"
          onClick={() => handleClick()}
        >
          Close X
        </p>
        {authModel.type === "login" ? (
          <LoginModel />
        ) : authModel.type === "register" ? (
          <SignUpModel />
        ) : (
          <ResetPassModel />
        )}
      </div>
    </div>
  );
}
