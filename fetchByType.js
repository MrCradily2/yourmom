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

                <div class="row">
                            <div class="user">
                                <p>${pokemon.name}</p>
                            </div>
                        </div>`;
        })
        .join("");
        console.log(html);

        document.querySelector('#app').insertAdjacentHTML('afterbegin', html); 

    })

}

function cardmaker(pokemon) {
    
    
}

fetchByName(ditto)