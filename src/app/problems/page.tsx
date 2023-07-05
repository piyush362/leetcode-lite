"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProblemPage() {
  const Router = useRouter();
  useEffect(() => {
    Router.push("/");
  }, [Router]);
  return null;
}
