fetch("https://rickandmortyapi.com/api/character/")
  .then((response) => response.json())
  .then((characters) => showCharacters(characters.results));

showCharacters = (characters) => {
  const charactersDiv = document.querySelector("#rick-and-morty");
  characters.forEach((character) => {
    const div = document.createElement("div");
    const name = document.createElement("p");
    const image = document.createElement("img");
    div.className = "character";
    image.src = character.image;
    name.innerText = `Character Name: ${character.name}`;
    div.append(name);
    div.append(image);
    charactersDiv.appendChild(div);
  });
};
