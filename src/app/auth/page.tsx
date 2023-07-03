"use client";
import { authModelState } from "@/atoms/authModelAtom";
import { useRecoilValue } from "recoil";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";

import AuthModel from "@/components/Model/authmodel";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AuthPage() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const [pageLoading, setPageLoading] = useState(true);
  const authModel = useRecoilValue(authModelState);

  useEffect(() => {
    if (user) {
      router.push("/");
    }
    if (!loading && !user) setPageLoading(false);
  }, [user, router, loading]);

  if (pageLoading) return null;

  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex justify-around items-center px-10 h-4/5 mt-10">
          <div>
            <img
              width={480}
              height={480}
              src="https://static.vecteezy.com/system/resources/previews/012/793/855/original/3d-illustration-of-computer-programmer-coding-png.png"
              alt="img"
            />
          </div>
          <div className="text-white text-center w-1/2 mb-10">
            <h1 className="text-3xl font-semibold my-5">A New Way to Learn</h1>
            <p className="text-gray-300 my-5">
              LeetCode Lite is the best platform to help you enhance your
              skills, expand your knowledge and prepare for technical
              interviews.
            </p>
            <Link href={"/"}>
              <button className="bg-brand-orange text-black hover:text-black hover:bg-white hove:p-2 hover:rounded-lg p-2 px-4 transition duration-300 ease-in-out rounded-lg">
                Lets Start
              </button>
            </Link>
          </div>
        </div>
        {authModel.isOpen && <AuthModel />}
      </div>
    </div>
  );
}
