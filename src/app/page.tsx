"use client";

import { useChat } from "ai/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col items-center">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Sapien</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.map((m) => (
              <div key={m.id} className="p-2 rounded-md bg-gray-100">
                <strong>{m.role === "user" ? "User: " : "AI: "}</strong>
                {m.content}
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex items-center space-x-2"
          >
            <Input
              className="flex-1"
              placeholder="Say something..."
              value={input}
              onChange={handleInputChange}
            />
            <Button type="submit">Send</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// bug https://github.com/vercel/ai/issues/1338