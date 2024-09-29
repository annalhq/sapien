**I'M STILL ADDING MORE..WAIT UP UNTILL 12.00AM**
<h3 align="center"> Sapien, custom fine-tuned LLAMA-3.1-70B model </h3>

<div align="center">
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" />
  <img src="https://img.shields.io/badge/🤗 HuggingFace-000000?style=for-the-badge&logo=husky&logoColor=white" alt="husky" />
  <img src="https://img.shields.io/badge/Ollama-FFFFFF?style=for-the-badge&logo=Ollama&logoColor=black" />
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcn/ui&logoColor=white"/>
</div>

## 📋 <a name="table">Table of Contents</a>

1. ⚡ [Introduction](#introduction)
2. 🚀 [Getting Started](#getting-started)
3. 📊 [Tech Stack](#tech-stack)
4. 🛠️ [Code Formatting](#code-formatting)

## ⚡ <a name="introduction">Introduction</a>

Sapien, custom intent based chatbot. The base model is fine-tuned LORA LLAMA-3.1-70B. It is trained on the Alpaca-7B dataset

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

🛠️ <a name="code-formatting">Code Formatting</a>


<div align="center">
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
