function fetchByName(pokemonName) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName +'/')

    .then(response =>{
        if(!response.ok){

            throw Error("ERROR");
        }
        return response.json();
    })

    .then(data=>{
        console.log(data)
        const html = data.map(pokemon=>{
            return`

            <div class="card my-3" style="max-width: 960px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="..." class="card-img" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Pokemon Search</h5>
                  <p class="card-text">Name: ${pokemon.name}</p>
                  <p class="card-text">Type: ${pokemon.types}</p>
                  <p class="card-text">Height: ${pokemon.height}</p>
                  <p class="card-text">Weight: ${pokemon.weight}</p>
                  <p class="card-text">Abilities: ${pokemon.ability}</p>
                </div>
              </div>
            </div>
          </div>`
        
        })
        .join("");
        console.log(html);

        document.querySelector('#app').insertAdjacentHTML('afterbegin', html); 

    })

}

function cardmaker(pokemon) {
    
    
}

fetchByName(ditto)