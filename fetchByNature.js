function fetchByNature(pokemonNature) {
  fetch('https://pokeapi.co/api/v2/nature/' + pokemonNature + '/')

    .then(response => {
      if (!response.ok) {

        throw Error("ERROR");
      }
      return response.json();
    })

    .then(data => {



      console.log(data)
      const html = [data].map(nature => {
          return `

            <div class="card my-3" style="max-width: 960px;">
            <div class="row no-gutters">
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${nature.name.replace(/^./, str => str.toUpperCase())}</h5>
                  <p class="card-text">Stat Incresed: ${nature.increased_stat.name.replace(/^./, str => str.toUpperCase())}</p>
                  <p class="card-text">Stat Decreased: ${nature.decreased_stat.name.replace(/^./, str => str.toUpperCase())}</p>
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