import { HfInference } from "@huggingface/inference";
import { HuggingFaceStream, StreamingTextResponse } from "ai";

// Create a new HuggingFace Inference instance
const Hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Prepare the input prompt, for instance, formatting the message to be compatible with your model
  const inputPrompt = messages
    .map((msg: { content: string }) => msg.content)
    .join("\n");

  // Perform inference on your LLaMA 3.1 fine-tuned model
  const response = Hf.textGenerationStream({
    model: "annalhq/llama-3.1-finetuned",
    inputs: inputPrompt,
    parameters: {
      max_new_tokens: 64,
      temperature: 0.7, // Optional: controls randomness
      repetition_penalty: 1.1, // Optional: discourages repetition
      return_full_text: false,
    },
  });

  // Convert the response into a friendly text-stream
  const stream = HuggingFaceStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
