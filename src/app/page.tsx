// bug in v1.0.0 (huggingface inferenec pipeline) https://github.com/vercel/ai/issues/1338

//v2.0.0
"use client";

import React, { useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { cn } from "@/lib/utils";
import { Bot, User, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Message = ({ content, isUserMessage }) => {
  return (
    <div
      className={cn({
        "bg-zinc-800": isUserMessage,
        "bg-zinc-900/25": !isUserMessage,
      })}
    >
      <div className="p-6">
        <div className="max-w-3xl mx-auto flex items-start gap-2.5">
          <div
            className={cn(
              "size-10 shrink-0 aspect-square rounded-full border border-zinc-700 bg-zinc-900 flex justify-center items-center",
              {
                "bg-blue-950 border-blue-700 text-zinc-200": isUserMessage,
              }
            )}
          >
            {isUserMessage ? (
              <User className="size-5" />
            ) : (
              <Bot className="size-5 text-white" />
            )}
          </div>
          <div className="flex flex-col ml-6 w-full">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-semibold text-white">
                {isUserMessage ? "You" : "Sapien"}
              </span>
            </div>
            <p className="text-sm font-normal py-2.5 text-white">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-zinc-900 text-white">
      {/* Header */}
      <header className="p-4 bg-zinc-800">
        <h1 className="text-xl font-bold">Sapien</h1>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto pb-32">
        {messages.map((message) => (
          <Message
            key={message.id}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Floating Input Area */}
      <div className="fixed bottom-4 left-0 right-0 mx-auto max-w-2xl px-4">
        <form onSubmit={handleSubmit} className="relative">
          <Textarea
            rows={1}
            autoFocus
            onChange={handleInputChange}
            value={input}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Enter your question..."
            className="resize-none bg-zinc-800 hover:bg-zinc-700 rounded-2xl pr-12 py-3 text-base shadow-lg border border-zinc-700"
          />
          <Button
            size="sm"
            type="submit"
            className="absolute z-10 right-2 bottom-1.5 bg-transparent hover:bg-zinc-700"
          >
            <Send className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;