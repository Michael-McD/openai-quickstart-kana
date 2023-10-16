import OpenAI  from "openai";

const openAI =  new OpenAI();

export default async function (req, res) {
  const phrase = req.body.text || '';
  if (phrase.trim().lengt === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid word or phrase",
      }
    });
    return;
  }

  try {
    const completion = await openAI.chat.completions.create({
      messages: generateMessage(phrase),
      model: "gpt-4",
      temperature: 0
    });
    res.status(200).json({ result: completion.choices[0].message.content });
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generateMessage(phrase) {
  const capitalizedPhrase =
    phrase[0].toUpperCase() + phrase.slice(1).toLowerCase();
  return [{"role": "user", "content": `Translate the following using hiragana / katakana: ${capitalizedPhrase}`}];
}

