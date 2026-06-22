// Select Elements
const button = document.getElementById("fetchButton");
const output = document.getElementById("output");

const buttonMultiple = document.getElementById("fetchMultiple");
const outputMultiple = document.getElementById("outputMultiple");

const buttonBreeds = document.getElementById("fetchBreeds");
const outputBreeds = document.getElementById("outputBreeds");

// Function to fetch a single Todo
async function fetchData() {
  try {
    output.textContent = "Fetching data...";
    outputMultiple.textContent = "";
    outputBreeds.textContent = "";

    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // waits for response

    if (!response.ok) throw new Error("Failed to fetch");

    let data = await response.json(); // waits for the body to read and parse
    output.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    output.textContent = "Error: " + error.message;
  }
}

// Function to fetch user and posts
async function fetchUserAndPosts() {
  try {
    output.textContent = "";
    outputMultiple.textContent = "Fetching user and posts...";
    outputBreeds.textContent = "";

    let userResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    let user = await userResponse.json();

    let postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userID=${user.id}`,
    );
    let posts = await postResponse.json();

    outputMultiple.textContent = `User:\n${JSON.stringify(user, null, 2)}\n\nPosts:\n${JSON.stringify(posts.slice(0, 3), null, 2)}`;
  } catch (error) {
    outputMultiple = "Error: " + error.message;
  }
}

// Function to fetch dog breeds
async function fetchDogBreeds() {
  try {
    output.textContent = "";
    outputMultiple.textContent = "";
    outputBreeds.textContent = "Fetching dog breeds...";

    let response = await fetch("https://dog.ceo/api/breeds/list/all");

    if (!response.ok) throw new Error("Failed to fetch dog breeds");

    let data = await response.json();

    let breedsList = Object.keys(data.message);
    outputBreeds.innerHTML = "";
    breedsList.forEach((breed) => {
      let breedItem = document.createElement("div");
      breedItem.textContent = breed;
      outputBreeds.appendChild(breedItem);
    });
  } catch (error) {
    outputBreeds.textContent = `<p>Error: ${error.message}<p>`;
  }
}

// Attach event listeners to buttons
button.addEventListener("click", fetchData);
buttonMultiple.addEventListener("click", fetchUserAndPosts);
buttonBreeds.addEventListener("click", fetchDogBreeds);

// <!-- ------------------------------------------------------- fetch ------------------------------------------------------- -->
// Q: write a js function that fetches the data from the website: https://jsonplaceholder.typicode.com/users
const outputElement = document.getElementById("output");
async function fetchdata() {
  try {
    outputElement.textContent = "fetching data...";

    //the response type is an object…. The fetch type is function
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); //w8s for the response
    console.log(response);

    if (!response.ok) throw new Error("Failed to fetch");
    let data = await response.json(); // w8s for the body to be read & parsed
    outputElement.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    outputElement.textContent = "Error: " + error.message;
  }
}
