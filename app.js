const API_URL = "https://rickandmortyapi.com/api/character/?page=2";
const container = document.querySelector(".characters");

const getData = async () => {
  const resp = await fetch(API_URL);
  const my_data = await resp.json();
  console.log(my_data.results);
  console.log(my_data.results.name);

  my_data.results.map((myCharacter) => {
    const { name, status, location, origin, image } = myCharacter;

    container.innerHTML += `
    <article class="card">
    <img src="${image}" alt="">
    <h2>${name}</h2>
    <h4>${status}</h4>
    <p>${location.name}</p>
    <p>${origin.name}</p>
  </article>`;
  });
};
getData();
