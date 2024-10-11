function fusePokemon() {
    const pokemon1 = document.getElementById('pokemon1').value;
    const pokemon2 = document.getElementById('pokemon2').value;

    if (pokemon1 && pokemon2) {
        const fusionName = createFusionName(pokemon1, pokemon2);
        document.getElementById('result').innerText = "Fused Pokémon Name: ${fusionName}";
    } else {
        document.getElementById('result').innerText = 'Please enter both Pokémon names.';
    }
}

function createFusionName(pokemon1, pokemon2) {
    const split1 = Math.floor(pokemon1.length / 2);
    const split2 = Math.floor(pokemon2.length / 2);
    return pokemon1.slice(0, split1) + pokemon2.slice(split2);
}