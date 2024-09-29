// "use client";

// import { useChat } from "ai/react";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/card";

// export default function Chat() {
//   const { messages, input, handleInputChange, handleSubmit } = useChat();

//   return (
//     <div className="mx-auto w-full max-w-md py-24 flex flex-col items-center">
//       <Card className="w-full">
//         <CardHeader>
//           <CardTitle>Sapien</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             {messages.map((m) => (
//               <div key={m.id} className="p-2 rounded-md bg-gray-100">
//                 <strong>{m.role === "user" ? "User: " : "AI: "}</strong>
//                 {m.content}
//               </div>
//             ))}
//           </div>
//           <form
//             onSubmit={handleSubmit}
//             className="mt-4 flex items-center space-x-2"
//           >
//             <Input
//               className="flex-1"
//               placeholder="Say something..."
//               value={input}
//               onChange={handleInputChange}
//             />
//             <Button type="submit">Send</Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }

// bug https://github.com/vercel/ai/issues/1338

//v2.0.0
"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((message) => (
        <div
          key={message.id}
          className="whitespace-pre-wrap"
          style={{ color: message.role === "user" ? "black" : "green" }}
        >
          <strong>{`${message.role}: `}</strong>
          {message.content}
          <br />
          <br />
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}