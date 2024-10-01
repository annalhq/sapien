<h3 align="center"> Sapien, a LLaMA 3.1 70B 🦙 Fine-Tuned LoRA model using Alpaca Dataset </h3>

<div align="center">
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" />
  <img src="https://img.shields.io/badge/🤗 HuggingFace-000000?style=for-the-badge&logo=husky&logoColor=white" alt="husky" />
  <img src="https://img.shields.io/badge/Ollama-FFFFFF?style=for-the-badge&logo=Ollama&logoColor=black" />
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white"/>
</div>

<br/>
<div align="center">
  <a target="_blank" href="https://colab.research.google.com/github/annalhq/sapien/blob/main/model/trainers/llama_3_1.ipynbtoring.ipynb">
    <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
  </a>
</div>


---

## 📋 <a name="table">Table of Contents</a>

1.  ⚡ [Introduction](#introduction)
2.  ✨ [Key Features](#key-features)
3.  📊 [Fine tuned models](#models)
4.  💬 [Inferencing](#inferencing)
5.  📋 [Requirements](#requirements)
6.  🚀 [Getting Started](#getting-started)
7.  🐥 [Frontend](#frontend)
8.  🗄️ [Backend](#backend)
9.  🛠️ [Code Formatting](#code-formatting)

---

## ⚡ <a name="introduction">Introduction</a>

Sapien is the **LLaMA 3.1 70B** model fined tuned using **Low-Rank Adaptation
(LoRA)** on the **Alpaca** dataset. The training is optimized for 4-bit and
16-bit precision.

[Watch more detailed project walkthrough](https://www.youtube.com/watch?v=ZoLTJMRrg20)

---

## ✨ <a name="features">Key Features</a>

- **LoRA (Low-Rank Adaptation)** for optimizing large language models.
- **4-bit & 16-bit precision** fine-tuning using advanced quantization
  techniques.
- **Alpaca Dataset**: Instruction-based fine-tuning dataset.
- **Model Hosting**: Push the trained model to Hugging Face for deployment.

---

## 🎶 <a name="models">Fine tuned models</a>

- **[My fine tuned Llama model](https://huggingface.co/annalhq/llama-3.1-8B-lora-alpaca/)**
- **[Official Meta Llama 3.2 for Ollama](https://ollama.com/library/llama3.2:3b)**
  (released on 25th Sept 2024)

---

## 💬<a name="inferencing">Inferencing</a>

(This will work only when you have all model files locally saved after running
trainer)

```python
from unsloth import FastLanguageModel

FastLanguageModel.for_inference(model)

inputs = tokenizer(
    [
        alpaca_prompt.format(
            "Give me the first 10 digits of Pi",
            "3.14159",
            "",
        )
    ],
    return_tensors="pt",
).to("cuda")

outputs = model.generate(**inputs, max_new_tokens=64)
print(tokenizer.batch_decode(outputs))
```

---

## 📋 <a name="requirements">Requirements</a>

To run Sapien, you need the following requirements:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)
- **Python** (version 3.7 or higher)
- **Ollama** (version 1.7 or higher for method 2)
- **llama.cpp** (for method 3)

Make sure you have these installed before proceeding.

---

## 🚀 <a name="getting-started">Getting Started</a>

To get started with Sapien, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/annalhq/sapien.git
   cd sapien
   ```
2. Install dependencies

   ```sh
   npm install
   ```

3. Run the dev server

   ```sh
   npm run dev
   ```

4. For the backend part refer to Backend section accordingly

---

## <a name="frontend"> Frontend </a>

Deployed using NextJS and Shadcn UI library alongside Vercel's AI SDK UI.

### 🛠️ <a name="code-formatting"> Code Formatting </a>

<div align="left">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="eslint" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" alt="prettier" />
  <img src="https://img.shields.io/badge/🐶 Husky-000000?style=for-the-badge&logo=husky&logoColor=white" alt="husky" />
</div>


These integrations will make sure while deploying that there is no server side
issues (also maintains code consistency)

If you are making changes in the code, make sure to run `npm run format`
otherwise Husky will prevent you to committing the code to repository.

Use `--no-verify` flag alongside with your git command to skip the invocation of
Husky.

<h3> ESLint </h3>
ESLint is used to identify and fix problems in JavaScript and TypeScript code. To run ESLint, use:

```bash
npm run check-lint
```

<h3> Prettier </h3>
For consitent code formatting, use:

```bash
npm run check-format
```

<h3> Husky </h3>
Husky is used to manage Git hooks. The pre-commit hook checks for formatting, linting, and type errors, and also builds the project.

---

## <a name="backend"> Backend </a>

### <a name="hf"> 1. 🤗 HuggingFace inference </a>

This Serverless Inference API allows you to easily do inference on my fine tuned
models or you can use any other models with TextToText generation models.

**Getting tokens from HuggingFace**

Login to HuggingFace and get tokens from
[here](https://huggingface.co/settings/tokens/new?globalPermissions=inference.serverless.write&tokenType=fineGrained).
As reccommended, it is preferable to create `fine-grained` tokens with the scope
to `Make calls to the serverless Inference API`

[Official Tokens guide by HuggingFace](https://huggingface.co/docs/hub/en/security-tokens)

In
[v1.0.0](https://github.com/annalhq/sapien/commit/e24b3a4bc80c281869391538d45cebe10543b182)
of this project,
[HFInference](https://huggingface.co/docs/huggingface.js/inference/classes/HfInference)
client is used for handling inference from model.

```js
import { HfInference } from "@huggingface/inference";

const inference = new HfInference("HUGGINGFACE_API_KEY");

const result = await inference.textClassification({
  model: "https://huggingface.co/annalhq/llama-3.1-8B-lora-alpaca",
  inputs: "Hi! How are you?",
});

console.log(result);
```

Store HF token variables `.env.local` as

```
HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Now this will use this serverless API from my model for streaming text.

---

### <a name="ollama"> 2. 🦙 Ollama server </a>

(Recommended for locally running)

Here you can use Ollama to serve my model locally. As it does not has stream
handling capabilities as for chat frontend I've used Vercel AI SDK with
ModelFusion.

Vercel AI SDK will handle stream forwarding and rendering, and ModelFusion to
integrate Ollama with the Vercel AI SDK.

1. Install Ollama from official [site](https://ollama.com/)
2. Pulling model on Ollama

If you want to use my model in Ollama follow these instructions:

1. Download [HFDownloader](https://github.com/bodaay/HuggingFaceModelDownloader)
2. Download my model in SafeTensor format from HF

```
hf -m annalhq/llama-3.1-8B-lora-alpaca
```

3. **Importing a fine tuned adapter from Safetensors weights**

First, create a `Modelfile` with a `FROM` command pointing at the base model you
used for fine tuning, and an `ADAPTER` command which points to the directory
with your Safetensors adapter:

```dockerfile
FROM <base annalhq/llama-3.1-8B-lora-alpaca>
ADAPTER /path/to/safetensors/adapter/directory
```

```bash
ollama create annalhq/llama-3.1-8B-lora-alpaca
```

Lastly, test the model:

```bash
ollama run annalhq/llama-3.1-8B-lora-alpaca
```

### <a name="llama"> 3. llama.cpp server</a>

1. Cloning llama.cpp from [here](https://github.com/ggerganov/llama.cpp)

```bash
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp
```

2. Compiling llama.cpp

- Using `make`:

  - On Linux or MacOS:

    ```bash
    make
    ```

- On Windows (x86/x64 only, arm64 requires cmake):

  1. Download the latest fortran version of
     [w64devkit](https://github.com/skeeto/w64devkit/releases).
  2. Extract `w64devkit` on your pc.
  3. Run `w64devkit.exe`.
  4. Use the `cd` command to reach the `llama.cpp` folder.
  5. From here you can run:
     ```bash
     make
     ```

3.  Convert SafeTensore modelfile of my model to GGUF using these
    [instructions](https://github.com/ggerganov/llama.cpp?tab=readme-ov-file#prepare-and-quantize)

4.  Start the llama.cpp server

```bash
./server -m models/llama-3.1-8B-lora-alpaca.gguf
```
