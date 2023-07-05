import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/navigation";
import LogOutBtn from "../button/LogoutBtn";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Timer from "../Timer/Timer";

// @ts-ignore
interface TopbarProps {
  problemsPage?: boolean;
}

export default function Topbar({ problemsPage }: TopbarProps) {
  const router = useRouter();
  const [user] = useAuthState(auth);

  return (
    <>
      <div
        className={`bg-gray-800
        ${
          problemsPage ? "px-5 py-2" : "px-20 py-3"
        } flex justify-between items-center`}
      >
        <div className="w-1/3">
          <Link href={"/"} className="flex items-center gap-2">
            <img
              width={30}
              height={30}
              src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
              alt="logo"
            />
            <span className="text-sm text-white">LeetCode Lite</span>
            <span className="text-sm text-brand-orange font-semibold ml-4">
              {problemsPage ? "All Problems" : "Home"}
            </span>
          </Link>
        </div>

        {problemsPage && (
          <div className="flex items-center gap-4 flex-1 justify-center w-1/3">
            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              // onClick={() => handleProblemChange(false)}
            >
              <FaChevronLeft />
            </div>
            <Link
              href="/"
              className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer"
            >
              <div>{/* <BsList /> */}</div>
              <p>Problem List</p>
            </Link>
            <div
              className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
              // onClick={() => handleProblemChange(true)}
            >
              <FaChevronRight />
            </div>
          </div>
        )}

        <div
          className={`flex justify-end gap-8 cursor-pointer ${
            problemsPage && "w-1/3"
          }`}
        >
          {!problemsPage && (
            <h1 className="hover:text-black bg-white hove:p-2 hover:rounded-lg p-2 transition duration-300 ease-in-out rounded-lg text-sm">
              Preminum
            </h1>
          )}

          <h1 className="hover:text-black bg-white hove:p-2 hover:rounded-lg p-2 transition duration-300 ease-in-out rounded-lg text-sm">
            <a href="https://piyushsagar.netlify.app/" target="_blank">
              About Developer
            </a>
          </h1>
          {user && problemsPage && <Timer />}

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
    </>
  );
}
