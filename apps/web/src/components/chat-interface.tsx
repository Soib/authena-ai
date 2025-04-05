"use client";

import { useEffect, useRef } from "react";
import { ScrollArea } from "~/components/ui/scroll-area";
import { ChatLoader } from "./chat-loader";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatInterfaceProps {
  messages: Message[];
  isLoading?: boolean;
  loadingText?: string;
}

export function ChatInterface({
  messages,
  isLoading,
  loadingText,
}: ChatInterfaceProps) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <ScrollArea className="h-[300px] pr-4" ref={scrollAreaRef}>
      <div className="space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} ${message.role === "system" ? "justify-center" : ""}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-blue-500 text-white"
                  : message.role === "assistant"
                    ? "bg-gray-200 text-gray-800"
                    : "bg-gray-100 text-gray-500 text-sm italic"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <ChatLoader text={loadingText} />
          </div>
        )}

        {/* Invisible element to scroll to */}
        <div ref={messagesEndRef} />
      </div>
    </ScrollArea>
  );
}
