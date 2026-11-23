// axios
//   .get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE: ", res);
//   })
//   .catch((e) => {
//     console.log("ERROR! ", e);
//   });

// const getStarWarsPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//   } catch (e) {
//     console.log("ERROR", e);
//   }
// };

// getStarWarsPerson(5);
// getStarWarsPerson(10);

// axios
//   .get(`https://swapi.dev/api/people/1/`)
//   .then((r) => {
//     console.log(r.data.name);
//   })
//   .catch((e) => {
//     console.log("er: ", e);
//   });
// const getStarWarsPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//     console.log(res.data);
//   } catch (error) {
//     console.log(`Err: ${error}`);
//   }
// };
// getStarWarsPerson(0);
// `https://swapi.dev/api/people/1/`
// const req = new XMLHttpRequest();
// req.onload = function () {
//   console.log("ld");
//   const data = JSON.parse(this.responseText);
//   console.log(data.name, data.height);
// };
// req.onerror = function () {
//   console.log("er");
//   console.log(this);
// };
// req.open("GET", `https://swapi.dev/api/people/1/`);
// req.send();
// fetch("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("Resolved!", res);
//     return res.json();
//     // res.json().then((data) => console.log("JSON DONE", data.name));
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log("Error!", e);
//   });
// axios
//   .get(`https://swapi.dev/api/people/1/`)
//   .then((res) => console.log("response", res))
//   .catch((e) => console.log("err", e));
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    // console.log(res.data);
  } catch (error) {
    // console.log("er: ", error);
  }
};
getStarWarsPerson(1);
const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");
const addNewJoke = async () => {
  try {
    const jokeText = await getDadJoke();
    console.log(jokeText);
    const newLI = document.createElement("li");
    newLI.append(jokeText);
    jokes.append(newLI);
  } catch (error) {
    console.log("Err in addNewJoke:", error);
  }
};
button.addEventListener("click", addNewJoke);
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get(`https://icanhazdadjoke.com/`, config);
    return res.data.joke;
  } catch (error) {
    console.log("Err in getDadJoke:", error);
    return "No JOKES AVAILABLE! SORRY :(";
  }
};
