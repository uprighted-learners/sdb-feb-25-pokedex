import pokemon from "./pokemon.js";
console.log(pokemon.name);
console.log(pokemon.stats[0].stat.name, pokemon.stats[0].base_stat);
console.log(pokemon);

let pokeName = document.getElementById("name");
pokeName.textContent = `Name: ${pokemon.name}`;

let hp = document.getElementById("hp");
hp.textContent = `${pokemon.stats[0].stat.name.toUpperCase()}: ${
	pokemon.stats[0].base_stat
}`;

let attack = document.getElementById("attack");
attack.textContent = `${pokemon.stats[1].stat.name.toUpperCase()}: ${
	pokemon.stats[1].base_stat
}`;

let defense = document.getElementById("defense");
defense.textContent = `${pokemon.stats[2].stat.name.toUpperCase()}: ${
	pokemon.stats[2].base_stat
}`;

/* 
    ? challenge
    * access the img element
    * change its src attribute
    * assigned the src attribute to a link that holds pokemon pic in the pokemon object
    * be done by 43
*/

let img = document.getElementById("poke-img");
img.setAttribute("src", pokemon.sprites.front_shiny);
// img.src = "another way to do the same thing"

let submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", () => {
	console.log("Button has been clicked");
});

let input = document.getElementById("search");
let textInput = document.createElement("h1");

input.addEventListener("keyup", event => {
	textInput.textContent = event.target.value;
	document.body.appendChild(textInput);
});
