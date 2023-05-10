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