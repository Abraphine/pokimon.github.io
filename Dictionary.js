const pokemonDictionary = {
  Squirtle: {
    image: "squirtle.png",
    evolvedImage: "squirtle_evolved.png",
    exp:100
    // Other attributes specific to Squirtle
  },
  Bulbasaur: {
    image: "bulbasaur.png",
    evolvedImage: "Ivysaur_evolved.png",
    exp:200
    // Other attributes specific to Bulbasaur
  },
  Charmander: {
    image: "charmander.png",
    evolvedImage: "Charizard_evolved.png",
    exp: 200
    // Other attributes specific to Charmander
  },
  Metapod: {
    image: "metapod.png",
    evolvedImage: "butterfree_evolved.png",
    exp: 100
  
  },
  Psyduck: {
    image: "Psyduck.png",
    exp: 10
  },
  Growlithe: {
    image: "Growlithe.png",
    evolvedImage: "Arcanine_evolved.png",
    exp:300
  },
  Ekans: { 
    image: "Ekans.png",
    evolvedImage: "Arbok_evolved.png",
    exp:200

  },
  Pikachu: {
    image: "Pikachu.png",
    evolvedImage: "raichu_evolved.png",
    exp:300
  },

  // Add more Pokémon entries as needed
};
function handleImageClick(pokemon) {
  const selectedPokemon = pokemonDictionary[pokemon];

  // Store the selected image and experience in local storage
  localStorage.setItem('selectedImage', selectedPokemon.image);
  localStorage.setItem('selectedPokemonExp', selectedPokemon.exp);

  // Redirect to the next page
  window.location.href = "pokidex.html";
}

