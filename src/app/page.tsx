"use client";

import React, { useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { cn } from "@/lib/utils";
import { Bot, User, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface MessageProps {
  content: string;
  isUserMessage: boolean;
}

const Message: React.FC<MessageProps> = ({ content, isUserMessage }) => (
  <div
    className={cn("py-4 px-6", {
      "bg-gray-50": isUserMessage,
      "bg-white": !isUserMessage,
    })}
  >
    <div className="max-w-3xl mx-auto flex items-start gap-4">
      <div
        className={cn(
          "w-8 h-8 rounded-full flex justify-center items-center",
          isUserMessage ? "bg-blue-500" : "bg-gray-200"
        )}
      >
        {isUserMessage ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <Bot className="w-5 h-5 text-gray-600" />
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-800">{content}</p>
      </div>
    </div>
  </div>
);

const Chat: React.FC = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="py-4 px-6 bg-white border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">Sapien Chat</h1>
      </header>

      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <Message
            key={message.id}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-200 p-4">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          <div className="relative">
            <Textarea
              rows={1}
              autoFocus
              onChange={handleInputChange}
              value={input}
              onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(
                    e as unknown as React.FormEvent<HTMLFormElement>
                  );
                }
              }}
              placeholder="Type your message here..."
              className="resize-none pr-12 py-3 text-base shadow-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
            />
            <Button
              size="sm"
              type="submit"
              className="absolute right-2 bottom-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
