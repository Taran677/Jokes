const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

const fetchData = async () => {
  try {
    let response = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: myHeaders
    });
    let data = await response.json();
    return data;
  } catch (err) {
    console.log("error: ", err);
  }
};

const displayJoke = (data) => {
  const jokeContainer = document.querySelector(".joke-cont"); 
  jokeContainer.textContent = data.joke;
};

fetchData().then(displayJoke);
