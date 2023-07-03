import { authModelState } from "@/atoms/authModelAtom";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { auth } from "@/firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function SignUpModel() {
  const router = useRouter();
  const setAuthModel = useSetRecoilState(authModelState);

  const handleClick = () => {
    setAuthModel((prev) => ({ ...prev, type: "login" }));
  };

  const [userData, setUserData] = useState({
    email: "",
    displayname: "",
    password: "",
  });

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleInput = (e: any) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSumbit = async (e: any) => {
    e.preventDefault();
    if (!userData.email || !userData.displayname || !userData.password)
      return toast.error("Please Enter all fields", {
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

    // Password length check
    if (userData.password.length < 6) {
      return toast.error("Password must be at least 6 characters long", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        userData.email,
        userData.password
      );
      if (!newUser) return;
      toast.success("Hey, You're Signed In", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      handleCloseModel();
      router.push("/");
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong, please check all fields", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  }, [error]);

  const handleCloseModel = () => {
    setAuthModel((prev) => ({ ...prev, isOpen: false, type: "login" }));
  };

  return (
    <div className="flex flex-col gap-8">
      <h1>Sign Up to LeetCode Lite</h1>
      <div className="flex flex-col gap-3">
        <label className="text-xs" htmlFor="email">
          Email
        </label>
        <input
          onChange={(e) => handleInput(e)}
          name="email"
          className="p-2 border-2 border-gray-100"
          type="text"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-xs" htmlFor="displayname">
          Display Name
        </label>
        <input
          onChange={(e) => handleInput(e)}
          name="displayname"
          className="p-2 border-2 border-gray-100"
          type="text"
          placeholder="Display Name"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-xs" htmlFor="password">
          Your password
        </label>
        <input
          onChange={(e) => handleInput(e)}
          name="password"
          className="p-2 border-2 border-gray-100"
          type="password"
          placeholder="Password"
        />
      </div>
      <button
        className="text-sm block bg-brand-orange hover:underline w-full p-3"
        onClick={(e) => handleSumbit(e)}
      >
        {loading ? "Registering..." : "Register"}
      </button>
      <p className="font-xs cursor-pointer" onClick={() => handleClick()}>
        Already an account ?{" "}
        <span className="text-brand-orange">Login here</span>
      </p>
    </div>
  );
}
