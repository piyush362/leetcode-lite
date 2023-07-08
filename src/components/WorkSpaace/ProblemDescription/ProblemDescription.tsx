import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";

export default function ProblemDescription() {
  return (
    <div className="p-2 pt-0 bg-dark-layer-2">
      {/* TAB */}
      <div className="flex gap-5 h-11 w-full items-center py-2 bg-dark-layer-2 text-white overflow-x-hidden overflow-y-hidden">
        <div
          className={
            "relative bg-gray-800 rounded-[5px] px-5 pt-[10px] pb-[9px] text-xs cursor-pointer"
          }
        >
          Description
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-[2px] bg-white"></div>
        </div>
        <div
          className={
            "bg-gray-800 rounded-[5px] px-5 py-1.5 text-xs cursor-pointer"
          }
        >
          Editorial
        </div>
        <div
          className={
            "bg-gray-800 rounded-[5px] px-5 py-1.5 text-xs cursor-pointer"
          }
        >
          Solutions
        </div>
        <div
          className={
            "bg-gray-800 rounded-[5px] px-5 py-1.5 text-xs cursor-pointer"
          }
        >
          Submission
        </div>
      </div>

      <div className=" bg-gray-800 flex px-0 py-4 h-[calc(100vh-105px)] overflow-y-auto">
        <div className="px-5">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg text-white font-medium">
                1. Two Sum
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div
                className={`text-olive bg-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
              >
                Easy
              </div>
              <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s">
                <BsCheck2Circle />
              </div>
              <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
                <AiFillLike />
                <span className="text-xs">120</span>
              </div>
              <div className="flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6">
                <AiFillDislike />
                <span className="text-xs">2</span>
              </div>
              <div className="cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 ">
                <TiStarOutline />
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="text-white text-sm">
              <p className="mt-3">
                Given an array of integers <code>nums</code> and an integer{" "}
                <code>target</code>, return
                <em>
                  indices of the two numbers such that they add up to
                </em>{" "}
                <code>target</code>.
              </p>
              <p className="mt-3">
                You may assume that each input would have{" "}
                <strong>exactly one solution</strong>, and you may not use
                thesame element twice.
              </p>
              <p className="mt-3">You can return the answer in any order.</p>
            </div>

            {/* Examples */}
            <div className="mt-4">
              {/* Example 1 */}
              <div>
                <p className="font-medium text-white ">Example 1: </p>
                <div className="example-card">
                  <pre>
                    <strong className="text-white">Input: </strong> nums =
                    [2,7,11,15], target = 9 <br />
                    <strong>Output:</strong> [0,1] <br />
                    <strong>Explanation:</strong>Because nums[0] + nums[1] == 9,
                    we return [0, 1].
                  </pre>
                </div>
              </div>

              {/* Example 2 */}
              <div>
                <p className="font-medium text-white ">Example 2: </p>
                <div className="example-card">
                  <pre>
                    <strong className="text-white">Input: </strong> nums =
                    [3,2,4], target = 6 <br />
                    <strong>Output:</strong> [1,2] <br />
                    <strong>Explanation:</strong>Because nums[1] + nums[2] == 6,
                    we return [1, 2].
                  </pre>
                </div>
              </div>
              {/* Example 3 */}
              <div>
                <p className="font-medium text-white ">Example 3: </p>
                <div className="example-card">
                  <pre>
                    <strong className="text-white">Input: </strong> nums =
                    [3,3], target = 6
                    <br />
                    <strong>Output:</strong> [0,1] <br />
                  </pre>
                </div>
              </div>
            </div>

            {/* Constraints */}
            <div className="my-5">
              <div className="text-white text-sm font-medium">Constraints:</div>
              <ul className="text-white ml-5 list-disc">
                <li className="mt-2">
                  <code>2 ≤ nums.length ≤ 10</code>
                </li>

                <li className="mt-2">
                  <code>-10 ≤ nums[i] ≤ 10</code>
                </li>
                <li className="mt-2">
                  <code>-10 ≤ target ≤ 10</code>
                </li>
                <li className="mt-2 text-sm">
                  <strong>Only one valid answer exists.</strong>
                </li>
              </ul>
            </div>
            <div className="text-xs text-gray-400 px-3 py-5">
              <p>Copyright ©️ 2023 LeetCode Lite, Made by Piyush Sagar 💖 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
