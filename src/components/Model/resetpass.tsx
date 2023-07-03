import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModelState } from "@/atoms/authModelAtom";
import { toast } from "react-toastify";

export default function ResetPassModel() {
  const setAuthModelState = useSetRecoilState(authModelState);
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleResetSumbit = async (e: any) => {
    e.preventDefault();
    if (!email)
      return toast.error("Please Enter Email", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    const success = await sendPasswordResetEmail(email);
    if (success) {
      toast.success("succesfully email sent", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
      handleCloseModel();
    }
  };

  const handleCloseModel = () => {
    setAuthModelState((prev) => ({ ...prev, isOpen: true, type: "login" }));
  };

  useEffect(() => {
    if (error) {
      toast.error("Invalid Email", {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
    }
  }, [error]);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-base">Reset Password</h1>
      <p className="font-xs text-gray-600">
        Forgotten your password? Enter your e-mail address below, and we will
        send you an e-mail allowing you to reset it.
      </p>
      <div className="flex flex-col gap-3">
        <label className="text-xs" htmlFor="email">
          Your Email
        </label>
        <input
          className="p-2 border-2 border-gray-100"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button
        className="text-sm block bg-brand-orange hover:underline w-full p-3"
        onClick={(e) => handleResetSumbit(e)}
      >
        {sending ? "Email sending..." : "Reset Password"}
      </button>
    </div>
  );
}
