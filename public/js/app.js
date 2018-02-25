
// "site_id":"5649946708065972"

// https://api.mercadolibre.com/users/test_user?access_token=...

// The access token for your user
// $AccessToken = "APP_USR-5649946708065972-022316-54fdf46a72394290f03e49c114f50fe1__J_G __- 303918081"
// $Item = DataProviderGetItem()
// $ErrorCode = ValidateTheItemJsonBody($AccessToken, $Item, $ValidationProperties, $Message)
// If($ErrorCode = 0) 
//     msg(!"Es una publicacion valida", status)
//     $ErrorCode = ListAnItem($AccessToken, $Item, $Properties, $Message)
//     If ($ErrorCode = 0)
//         msg(!"Anuncio ID #" + $Properties.Get(!"id"), status)
//     Else
//         msg($Message.ToJson())
//     Endif
// Else
//     msg($Message.ToJson())
// Endif

$('.carousel').carousel()
var boxTecnologia = document.getElementById('box-tecnologia');
var boxMaquillaje = document.getElementById('box-maquillaje');
var boxModa = document.getElementById('box-moda');
var boxJoyas = document.getElementById('box-joyas');
let parameter;

// boxTecnologia.addEventListener('click',function(){
//     let parameter = 'tecnologia';
//     var container = document.getElementById('tecnologia');
// })

// boxMaquillaje.addEventListener('click',function(){
//     let parameter = 'maquillaje';
//     var container = document.getElementById('maquillaje');
// })

getFetch();

function getFetch() {
    for (let i = 1;i < 100; i++) {

        boxTecnologia.addEventListener('click',function(){
            parameter = 'tecnologia';
            var container = document.getElementById('tecnologia');

            const url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${parameter}`;
  
  
            fetch(url)
              .then((resp) => resp.json())
              .then(function(data) {
                
                console.log(data.results[i]);
                const characters = `<div class="card" >
                <img id="imgg" class="card-img-top img-characters" data-toggle="modal" data-target="#MyModal" src="${data.results[i].thumbnail}" alt="${data.name}">
                <div class="card-body">
                  <h5 class="card-title weight text-center">${data.results[i].title}</h5>
                  <p>S/.${data.results[i].price}</p>
                </div>
              </div>`;
               
                container.innerHTML += characters;
              })
              .catch(function(error) {
                console.log(JSON.stringify(`Error ${error}`));
              });
            
        })
        
        boxMaquillaje.addEventListener('click',function(){
            parameter = 'maquillaje';
            var container = document.getElementById('maquillaje');
            const url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${parameter}`;
  
  
            fetch(url)
              .then((resp) => resp.json())
              .then(function(data) {
                
                console.log(data.results[i]);
                const characters = `<div class="card" >
                <img id="imgg" class="card-img-top img-characters" data-toggle="modal" data-target="#MyModal" src="${data.results[i].thumbnail}" alt="${data.name}">
                <div class="card-body">
                  <h5 class="card-title weight text-center">${data.results[i].title}</h5>
                  <p>S/.${data.results[i].price}</p>
                </div>
              </div>`;
               
                container.innerHTML += characters;
              })
              .catch(function(error) {
                console.log(JSON.stringify(`Error ${error}`));
              });
        })

        boxModa.addEventListener('click',function(){
            parameter = 'moda';
            var container = document.getElementById('moda');
            const url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${parameter}`;
  
  
            fetch(url)
              .then((resp) => resp.json())
              .then(function(data) {
                
                console.log(data.results[i]);
                const characters = `<div class="card" >
                <img id="imgg" class="card-img-top img-characters" data-toggle="modal" data-target="#MyModal" src="${data.results[i].thumbnail}" alt="${data.name}">
                <div class="card-body">
                  <h5 class="card-title weight text-center">${data.results[i].title}</h5>
                  <p>S/.${data.results[i].price}</p>
                </div>
              </div>`;
               
                container.innerHTML += characters;
              })
              .catch(function(error) {
                console.log(JSON.stringify(`Error ${error}`));
              });
        })
        boxJoyas.addEventListener('click',function(){
            parameter = 'joyas';
            var container = document.getElementById('joyas');
            const url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${parameter}`;
  
  
            fetch(url)
              .then((resp) => resp.json())
              .then(function(data) {
                
                console.log(data.results[i]);
                const characters = `<div class="card" >
                <img id="imgg" class="card-img-top img-characters" data-toggle="modal" data-target="#MyModal" src="${data.results[i].thumbnail}" alt="${data.name}">
                <div class="card-body">
                  <h5 class="card-title weight text-center">${data.results[i].title}</h5>
                  <p>S/.${data.results[i].price}</p>
                </div>
              </div>`;
               
                container.innerHTML += characters;
              })
              .catch(function(error) {
                console.log(JSON.stringify(`Error ${error}`));
              });
        })
        
    }
    
  }