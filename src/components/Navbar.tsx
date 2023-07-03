import { authModelState } from "@/atoms/authModelAtom";
import Link from "next/link";
import { useSetRecoilState } from "recoil";

export default function Navbar() {
  const setAuthModelState = useSetRecoilState(authModelState);

  const handleClick = () => {
    setAuthModelState((prev) => ({ ...prev, isOpen: true }));
  };
  return (
    <div className="flex justify-between items-center px-10 py-3 pt-5 text-white">
      <div className="flex items-center">
        <Link href={"/"} className="flex items-center gap-1">
          <img
            width={50}
            height={50}
            src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
            alt="logo"
          />
          <span className="text-2xl font-medium">LeetCode Lite</span>
        </Link>
        {/* <Link href={"/"} className="ml-10">
          Problems
        </Link> */}
      </div>
      <div className="flex justify-between gap-8 cursor-pointer">
        <h1 className="hover:text-black hover:bg-white hove:p-2 hover:rounded-lg p-2 transition duration-300 ease-in-out rounded-lg">
          Preminum
        </h1>
        <h1 className="hover:text-black hover:bg-white hove:p-2 hover:rounded-lg p-2 transition duration-300 ease-in-out rounded-lg">
          Explore
        </h1>
        <h1 className="hover:text-black hover:bg-white hove:p-2 hover:rounded-lg p-2 transition duration-300 ease-in-out rounded-lg">
          Product
        </h1>
        <h1 className="hover:text-black hover:bg-white hove:p-2 hover:rounded-lg p-2 transition duration-300 ease-in-out rounded-lg">
          <a href="https://piyushsagar.netlify.app/" target="_blank">
            Developer
          </a>
        </h1>
        <h1
          className="bg-brand-orange text-black hover:text-black hover:bg-white hove:p-2 hover:rounded-lg p-2 px-4 transition duration-300 ease-in-out rounded-lg"
          onClick={() => handleClick()}
        >
          Sign In
        </h1>
      </div>
    </div>
  );
}
