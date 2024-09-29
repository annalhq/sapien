<h3 align="center"> Sapien, a LLaMA 3.1 70B 🦙 Fine-Tuned LoRA model using Alpaca Dataset </h3>

<div align="center">
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" />
  <img src="https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=Kaggle&logoColor=white" />
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white"/>
</div>


## 📋 <a name="table">Table of Contents</a>

1. ⚡ [Introduction](#introduction)
2. 🚀 [Getting Started](#getting-started)
3. 📊 [Tech Stack](#tech-stack)
4. 🛠️ [Code Formatting](#code-formatting)

## ⚡ <a name="introduction">Introduction</a>

Sapien is the **LLaMA 3.1 70B** model fined tuned using **Low-Rank Adaptation (LoRA)** on the **Alpaca** dataset. The training is optimized for 4-bit and 16-bit precision. 

[Watch more detailed project walkthrough](https://www.youtube.com/watch?v=ZoLTJMRrg20)

## ✨ Key Features

- **LoRA (Low-Rank Adaptation)** for optimizing large language models.
- **4-bit & 16-bit precision** fine-tuning using advanced quantization techniques.
- **Alpaca Dataset**: Instruction-based fine-tuning dataset.
- **Model Hosting**: Push the trained model to Hugging Face for deployment.

## 🎶 Fine tuned models
- **[My fine tuned Llama model](https://huggingface.co/annalhq/llama-3.1-8B-lora-alpaca/)**
- **[Llama 3.2](https://huggingface.co/meta-llama/Llama-3.2-3B-Instruct)**

## 💬Native inferencing
(This will work only when you have all model files locally saved after running trainer)

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

## 📋 <a name="requirements">Requirements</a>
To run Sapien, you need the following requirements:

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)
- **Python** (version 3.7 or higher)
- **Ollama** (version 1.7 or higher for method 2)
- **llama.cpp** (for method 3)

Make sure you have these installed before proceeding.

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

## <a name="frontend"> Frontend </a>
Deployed using NextJS and Shadcn UI library alongside Vercel's AI SDK UI.

### 🛠️ <a name="code-formatting"> Code Formatting </a>


<div align="left">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="eslint" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white" alt="prettier" />
  <img src="https://img.shields.io/badge/🐶 Husky-000000?style=for-the-badge&logo=husky&logoColor=white" alt="husky" />
</div>

<h3> ESLint </h3>
ESLint is used to identify and fix problems in JavaScript and TypeScript code. To run ESLint, use:

```sh
npm run check-lint
```

<h3> Prettier </h3>
For consitent code formatting, use:

```sh
npm run check-format
```

<h3> Husky </h3>
Husky is used to manage Git hooks. The pre-commit hook checks for formatting, linting, and type errors, and also builds the project.

## <a name="backend"> Backend </a>

### <a name="hf"> 1. HuggingFace inference </a>
### <a name="ollama"> 2. Ollama server </a>
### <a name="llama"> 3. llama.cpp server</a>