import { authModelState } from "@/atoms/authModelAtom";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginModel() {
  const router = useRouter();
  const setAuthModel = useSetRecoilState(authModelState);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleClick = (path: any) => {
    setAuthModel((prev) => ({ ...prev, type: path }));
  };

  const handleInput = (e: any) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCloseModel = () => {
    setAuthModel((prev) => ({ ...prev, isOpen: false, type: "login" }));
  };

  const handleSumbit = async (e: any) => {
    e.preventDefault();

    // email and password check
    if (!userData.email || !userData.password)
      return toast.error("Please Enter Email and Password", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      return toast.error("Please enter a valid email address", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    }

    try {
      const myuser = await signInWithEmailAndPassword(
        userData.email,
        userData.password
      );
      if (!myuser) {
        return;
      }
      toast.success("Hey, You're Logged In", {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      });
      handleCloseModel();
      router.push("/");
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    if (error) {
      toast.error("Invalid Email or Password", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    }
  }, [error]);

  return (
    <div className="flex flex-col gap-8">
      <h1>Sign in to LeetCode Lite</h1>
      <div className="flex flex-col gap-3">
        <label className="text-xs" htmlFor="email">
          Your Email
        </label>
        <input
          name="email"
          className="p-2 border-2 border-gray-100"
          type="text"
          placeholder="Email"
          onChange={(e) => handleInput(e)}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-xs" htmlFor="password">
          Your password
        </label>
        <input
          name="password"
          className="p-2 border-2 border-gray-100"
          type="password"
          placeholder="Password"
          onChange={(e) => handleInput(e)}
        />
      </div>
      <button
        className="text-sm block bg-brand-orange hover:underline w-full p-3"
        onClick={(e) => handleSumbit(e)}
      >
        {loading ? "Singing...." : "Sign In"}
      </button>
      <p
        className="text-right cursor-pointer"
        onClick={() => handleClick("forgotPassword")}
      >
        Reset Password
      </p>
      <p
        className="font-xs cursor-pointer"
        onClick={() => handleClick("register")}
      >
        Not Register ? <span className="text-brand-orange">Register here</span>
      </p>
    </div>
  );
}
