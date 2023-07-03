import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import LogOutBtn from "../button/LogoutBtn";

export default function Topbar() {
  const router = useRouter();
  const [user] = useAuthState(auth);

  return (
    <div className="bg-gray-800 py-3 px-20 flex justify-between items-center">
      <div>
        <Link href={"/"} className="flex items-center gap-2">
          <img
            width={30}
            height={30}
            src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
            alt="logo"
          />
          <span className="text-sm text-white">LeetCode Lite</span>
          <span className="text-sm text-brand-orange font-semibold ml-4">
            Problems
          </span>
        </Link>
      </div>
      <div className="flex justify-between gap-8 cursor-pointer">
        <h1 className="hover:text-black bg-white hove:p-2 hover:rounded-lg p-2 transition duration-300 ease-in-out rounded-lg text-sm">
          Preminum
        </h1>

        <h1 className="hover:text-black bg-white hove:p-2 hover:rounded-lg p-2 transition duration-300 ease-in-out rounded-lg text-sm">
          <a href="https://piyushsagar.netlify.app/" target="_blank">
            About Developer
          </a>
        </h1>
        {!user && (
          <h1
            className="bg-brand-orange text-black hover:text-black hover:bg-white hove:p-2 hover:rounded-lg p-2 px-4 transition duration-300 ease-in-out rounded-lg text-sm"
            onClick={() => router.push("/auth")}
          >
            Sign In
          </h1>
        )}
        {user && (
          <div className="cursor-pointer group relative ">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
              alt="Avatar"
              className="rounded-full h-8 w-8"
            />
            <div
              className="absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out"
            >
              <p className="text-sm">user email</p>
            </div>
          </div>
        )}
        {user && <LogOutBtn />}
      </div>
    </div>
  );
}
