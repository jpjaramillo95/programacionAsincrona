async function buscarPokemon() {
    let nombrePokemon = document.getElementById("pokemonInput").value.toLowerCase();
    let url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;
    
    try {
        let respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error("Pokémon no encontrado");
        }
        let datos = await respuesta.json();
        
        document.getElementById("pokemonImage").src = datos.sprites.front_default;
        document.getElementById("pokemonName").textContent = datos.name.toUpperCase();
        document.getElementById("pokemonAbilities").textContent = "Habilidades: " + datos.abilities.map(a => a.ability.name).join(", ");
        document.getElementById("pokemonCard").classList.remove("d-none");
    } catch (error) {
        alert(error.message);
    }
}