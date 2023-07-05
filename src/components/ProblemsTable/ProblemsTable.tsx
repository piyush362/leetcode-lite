"use client";
import { problems } from "@/mockProblems/problems";
import Link from "next/link";

//icons
import { BsCheckCircle } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import YouTubePlayerModel from "../Model/YoutubePlayer/YouTubePlayerModel";
import { useState } from "react";

export default function ProblemsTable() {
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: "",
  });

  const openYoutubePlayer = (videoId: any) => {
    setYoutubePlayer({
      isOpen: true,
      videoId: videoId,
    });
  };
  const closeYoutubePlayer = () => {
    setYoutubePlayer({
      isOpen: false,
      videoId: "",
    });
  };

  return (
    <>
      <tbody className="text-white">
        {problems.map((doc, index) => {
          const difficulyColor =
            doc.difficulty === "Easy"
              ? "text-dark-green-s"
              : doc.difficulty === "Medium"
              ? "text-dark-yellow"
              : "text-dark-pink";
          return (
            <tr
              className={`${index % 2 == 1 ? "bg-dark-layer-1" : ""}`}
              key={doc.id}
            >
              <th className="px-2 py-4 font-medium whitespace-nowrap text-dark-green-s">
                <BsCheckCircle fontSize={"18"} width="18" />
              </th>
              <td className="px-6 py-4">
                <Link
                  className="hover:text-blue-600 cursor-pointer"
                  // target="_blank"
                  href={`/problems/${doc.id}`}
                >
                  {`${index + 1}. ${doc.title}`}
                </Link>
              </td>
              <td className={`px-6 py-4 ${difficulyColor}`}>
                {doc.difficulty}
              </td>
              <td className="px-6 py-4">{doc.category}</td>
              <td className={"px-6 py-4"}>
                {doc.videoId ? (
                  <AiFillYoutube
                    fontSize={"28"}
                    className="cursor-pointer hover:text-red-600"
                    onClick={() => openYoutubePlayer(doc.videoId)}
                  />
                ) : (
                  <p className="text-gray-400">Coming soon</p>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
      {youtubePlayer.isOpen && (
        <YouTubePlayerModel
          videoId={youtubePlayer.videoId}
          onClose={closeYoutubePlayer}
        />
      )}
    </>
  );
}
