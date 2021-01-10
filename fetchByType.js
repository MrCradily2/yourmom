function fetchByName(typeName) {
  fetch('https://pokeapi.co/api/v2/type/' + typeName + '/')

    .then(response => {
      if (!response.ok) {

        throw Error("ERROR");
      }
      return response.json();
    })

    .then(data => {
      console.log(data)
      const html = [data].map(type => {

          var noDamageTo = ""
          for (i = 0; i < type.damage_relations.no_damage_to.length; i++) {
            if (i > 0) {
              noDamageTo += ", "
            }
            noDamageTo += type.damage_relations.no_damage_to[i].name.replace(/^./, str => str.toUpperCase())
          }

          var halfDamageTo = ""
          for (i = 0; i < type.damage_relations.half_damage_to.length; i++) {
            if (i > 0) {
              halfDamageTo += ", "
            }
            halfDamageTo += type.damage_relations.half_damage_to[i].name.replace(/^./, str => str.toUpperCase())
          }

          var doubleDamageTo = ""
          for (i = 0; i < type.damage_relations.double_damage_to.length; i++) {
            if (i > 0) {
              doubleDamageTo += ", "
            }
            doubleDamageTo += type.damage_relations.double_damage_to[i].name.replace(/^./, str => str.toUpperCase())
          }

          var noDamageFrom = ""
          for (i = 0; i < type.damage_relations.no_damage_from.length; i++) {
            if (i > 0) {
              noDamageFrom += ", "
            }
            noDamageFrom += type.damage_relations.no_damage_from[i].name.replace(/^./, str => str.toUpperCase())
          }

          var halfDamageFrom = ""
          for (i = 0; i < type.damage_relations.half_damage_from.length; i++) {
            if (i > 0) {
              halfDamageFrom += ", "
            }
            halfDamageFrom += type.damage_relations.half_damage_from[i].name.replace(/^./, str => str.toUpperCase())
          }

          var doubleDamageFrom = ""
          for (i = 0; i < type.damage_relations.double_damage_from.length; i++) {
            if (i > 0) {
              doubleDamageFrom += ", "
            }
            doubleDamageFrom += type.damage_relations.double_damage_from[i].name.replace(/^./, str => str.toUpperCase())
          }
          return `

            <div class="card my-3" style="max-width: 960px;">
            <div class="row no-gutters">
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${type.name.replace(/^./, str => str.toUpperCase())}</h5>
                  <p class="card-text">No Damage To: ${noDamageTo}</p>
                  <p class="card-text">Half Damage To: ${halfDamageTo}</p>
                  <p class="card-text">Double  Damage To: ${doubleDamageTo}</p>
                  <p class="card-text">No Damage From: ${noDamageFrom}</p>
                  <p class="card-text">Half Damage From: ${halfDamageFrom}</p>
                  <p class="card-text">Double Damage From: ${doubleDamageFrom}</p>

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