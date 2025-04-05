"use client";

import { useEffect, useState } from "react";

interface ChatLoaderProps {
  text?: string;
}

export function ChatLoader({ text = "Processing" }: ChatLoaderProps) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2 p-3 bg-gray-200 rounded-lg max-w-[80%]">
      <div className="flex space-x-1">
        <div
          className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
          style={{ animationDelay: "0ms" }}
        ></div>
        <div
          className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
          style={{ animationDelay: "150ms" }}
        ></div>
        <div
          className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"
          style={{ animationDelay: "300ms" }}
        ></div>
      </div>
      <span className="text-gray-700 min-w-[100px]">
        {text}
        {dots}
      </span>
    </div>
  );
}
