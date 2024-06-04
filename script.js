const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

fetch("https://icanhazdadjoke.com/", {
  method: "GET",
  headers: myHeaders,
})
  .then((res) => {
    console.log("Resolved.");
    return res.json();
  })
  .then((data) => {
    const jokeCont = document.getElementsByClassName("joke-cont")[0];
    jokeCont.innerHTML = data.joke;
  })
  .catch((err) => {
    console.log("Error!", err);
  });
