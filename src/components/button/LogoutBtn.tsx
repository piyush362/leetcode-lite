import { auth } from "@/firebase/firebase";
import { useSetRecoilState } from "recoil";
import { authModelState } from "@/atoms/authModelAtom";
import React from "react";
import { useSignOut } from "react-firebase-hooks/auth";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LogOutBtn() {
  const setAuthModel = useSetRecoilState(authModelState);
  const router = useRouter();

  const [signOut] = useSignOut(auth);
  const handleLogout = () => {
    signOut();
    toast.success("Logout Successfully", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
    setAuthModel((prev) => ({ ...prev, isOpen: true, type: "login" }));
    router.push("/auth");
  };

  return (
    <button
      className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange"
      onClick={handleLogout}
      title="Logout"
    >
      <FiLogOut />
    </button>
  );
}
