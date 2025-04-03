import pokemon from "./pokemon.js"
console.log(pokemon.name)
console.log(pokemon.stats[0].stat.name, pokemon.stats[0].base_stat)
console.log(pokemon)

let pokeName = document.getElementById("name")
pokeName.textContent = `Name: ${pokemon.name}`
let hp = document.getElementById("hp")
hp.textContent = `${pokemon.stats[0].stat.name.toUpperCase()}: ${pokemon.stats[0].base_stat}`
let attack = document.getElementById("attack")
let defense = document.getElementById("defense")

