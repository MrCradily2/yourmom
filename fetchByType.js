function fetchByName(typeName) {
    fetch('https://pokeapi.co/api/v2/type/' + typeName +'/')

    .then(response =>{
        if(!response.ok){

            throw Error("ERROR");
        }
        return response.json();
    })

    .then(data=>{
        console.log(data)
        const html = [data].map(type=>{
            return`

            <div class="card my-3" style="max-width: 960px;">
            <div class="row no-gutters">
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Pokemon Search</h5>
                  <p class="card-text">Name: ${type.name}</p>
                  <p class="card-text">Stat Incresed: ${nature.increased_stat}</p>
                  <p class="card-text">Stat Decreased: ${nature.decreased_stat}</p>
                </div>
              </div>
            </div>
          </div>`;
        })
        .join("");
        console.log(html);

        document.getElementById("cardDiv").innerHTML =  html; 

    })

}