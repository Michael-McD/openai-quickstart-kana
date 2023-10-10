# OpenAI API Quickstart - Node.js modified to translate English into Japanese

### Translates into kana i.e. hiragana and katakana wihtout using Kanji characters.  Usefullif one is just learning to pronounce japanese words and phrases.


This is an example foreign language translator name generator app used in the OpenAI API [quickstart tutorial](https://platform.openai.com/docs/quickstart). It uses the [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/).

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd openai-quickstart-kana
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```

5. Make a copy of the example environment variables file

   On Linux  or Mac systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```
6. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file. Or better still add it as an environment variable and use that in the .env file (avoid any possibility of deploying it to a public environment).

7. Run the app

   ```bash
   $ npm run dev
   ```

You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! The important OpenAI Chat Completion code is in the api/generate.js file.
