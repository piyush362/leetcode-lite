"use client";
import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="bg-dark-layer-2 min-h-screen ">
        <Topbar />
        <div className="flex justify-center mt-2">
          <img
            width={"70%"}
            className=""
            src="https://res.cloudinary.com/dkr75ykb4/image/upload/v1688377662/leetcodelitehero.png"
            alt="hero"
          />
        </div>
        <h1
          className="text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
					uppercase mt-10 mb-5"
        >
          &ldquo; ALL PROBLEMS HERE &rdquo; 👇
        </h1>
        <div className="relative overflow-x-auto mx-auto px-6 pb-10">
          <div className="max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse"></div>
          <table className="text-sm text-left text-gray-500 dark:text-gray-400 sm:w-4/5 w-full max-w-[1200px] mx-auto">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b ">
              <tr>
                <th scope="col" className="px-1 py-3 w-0 font-medium">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Difficulty
                </th>

                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 w-0 font-medium">
                  Solution
                </th>
              </tr>
            </thead>
            <ProblemsTable />
          </table>
        </div>
      </main>
    </div>
  );
}
