"use client";
import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Topbar from "@/components/Topbar/Topbar";
import Image from "next/image";

const titleData = [
  {
    id: 1,
    name: "All Topics",
    logo: "https://static.vecteezy.com/system/resources/previews/010/063/519/original/todo-list-icon-notepad-with-completed-todo-list-3d-render-png.png",
    active: true,
  },
  {
    id: 2,
    name: "Algorithm",
    logo: "https://png.pngtree.com/png-vector/20220927/ourmid/pngtree-algorithm-vector-png-image_6219401.png",
    active: false,
  },
  {
    id: 2,
    name: "Database",
    logo: "https://cdn-icons-png.flaticon.com/512/1104/1104982.png",
    active: false,
  },
  {
    id: 4,
    name: "JavaScript",
    logo: "https://logosdownload.com/logo/javascript-logo-big.png",
    active: false,
  },
  {
    id: 5,
    name: "Shell",
    logo: "https://www.pngkey.com/png/full/140-1409984_python-logo-bash-shell-logo-shell-script-logo.png",
    active: false,
  },
  {
    id: 6,
    name: "Cuccurrency",
    logo: "https://cdn.iconscout.com/icon/premium/png-256-thumb/concurrency-5363813-4477608.png?f=webp",
    active: false,
  },
];

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
        <div
          className=" text-center text-gray-700 dark:text-gray-400
					uppercase mt-10 mb-5 "
        >
          {/* <h1> &ldquo; ALL PROBLEMS HERE &rdquo; 👇</h1> */}
          <div className="flex mx-auto px-36 justify-between">
            {titleData.map((item) => (
              <div
                key={item.id}
                className={`text-xs  px-5 py-3 ${
                  item.active
                    ? "bg-white text-black"
                    : "bg-dark-layer-1 text-white hover:bg-dark-fill-3"
                }  rounded-3xl flex items-center gap-2 cursor-pointer `}
              >
                <img src={item.logo} alt="Logo" width={20} height={20} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div></div>
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
