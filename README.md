#Lena Mastracci EC GPT-4

#HTML Code
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Joke Generator</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Joke Generator</h1>
    <p id="joke"></p>
    <button id="generate-joke">Generate Joke</button>

    <script src="script.js"></script>
  </body>
</html>

#JS code
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call an alligator in a vest? An investigator!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why don't oysters give to charity? They're shellfish!",
    "Why did the bicycle fall over? It was two-tired!",
    "Why was the math book sad? Because it had too many problems.",
    "Why was the broom late? It swept in!",
    "What do you call a fake noodle? An impasta!",
    "Why was the computer cold? It left its Windows open!",
    "Why did the chicken cross the playground? To get to the other slide!"
  ];
  
  const generateJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const jokeElement = document.getElementById("joke");
    jokeElement.innerHTML = jokes[randomIndex];
  };
  
  const generateJokeButton = document.getElementById("generate-joke");
  generateJokeButton.addEventListener("click", generateJoke);

#CSS code
body {
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  h1 {
    margin-top: 50px;
  }
  
  button {
    margin-top: 30px;
    padding: 10px;
    font-size: 16px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #3e8e41;
  }