function fetchByName(pokemonName) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName + '/')

        .then(response => {
            if (!response.ok) {

                throw Error("ERROR");
            }
            return response.json();
        })

        .then(data => {
            console.log(data)
            const html = [data].map(pokemon => {


                    var pokemonTypes = ""
                    for (i = 0; i < pokemon.types.length; i++) {
                        if (i > 0) {
                            pokemonTypes += ", "
                        }
                        pokemonTypes += pokemon.types[i].type.name.replace(/^./, str => str.toUpperCase())
                    }

                    var pokemonAbilities = ""
                    for (i = 0; i < pokemon.abilities.length; i++) {
                        if (i > 0) {
                            pokemonAbilities += ", "
                        }
                        pokemonAbilities += pokemon.abilities[i].ability.name.replace(/^./, str => str.toUpperCase())
                    }




                    return `

            <div class="card my-3" style="max-width: 960px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img style ='image-rendering: pixelated;' src="pokemon/${pokemon.id}.png" class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${pokemon.name.replace(/^./, str => str.toUpperCase())}</h5>
                  <p class="card-text">Type: ${pokemonTypes}</p>
                  <p class="card-text">Height: ${pokemon.height/10} m</p>
                  <p class="card-text">Weight: ${pokemon.weight/10} kg</p>
                  <p class="card-text">Abilities: ${pokemonAbilities}</p>
                </div>
              </div>
            </div>
          </div>`;
                })
                .join("");
            console.log(html);

            document.getElementById("cardDiv").innerHTML = html;

        })

}