$('.carousel').carousel()

var boxTecnologia = document.getElementById('box-tecnologia'),
boxMaquillaje = document.getElementById('box-maquillaje'),
boxModa = document.getElementById('box-moda'),
boxJoyas = document.getElementById('box-joyas'),
boxBebes = document.getElementById('box-bebes'),
boxVehiculo = document.getElementById('box-vehiculos'),
boxHogar = document.getElementById('box-hogar'),
boxDeporte = document.getElementById('box-deportes'),
boxSalud = document.getElementById('box-salud'),
inputSearch = document.getElementById('search');
let parameter;

getFetch();

function getFetch() {
  for (let i = 1; i < 60; i++) {

    inputSearch.addEventListener('keydown',function(){
      let search = inputSearch.value;
      var container = document.getElementById('section');
      container.innerHTML='';
      const url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${search}`;
      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {

          console.log(data.results[i]);
          const characters = 
          `<div class="row">
            <div class="col-4 col-md-3 col offset-md-2">
            <img id="imgg" class="img-characters" data-toggle="modal" data-target="#MyModal" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6>${data.results[i].title}</h6>
              <h5>S/.${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button type="button" class="btn btn-warning">Comprar</button>
            </div>
          </div><hr>`;

          container.innerHTML += characters;
        })
        .catch(function (error) {
          console.log(JSON.stringify(`Error ${error}`));
        });
  
    })
  
    boxTecnologia.addEventListener('click', function () {
      parameter = 'tecnologia';
      var container = document.getElementById('tecnologia');
      const url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${parameter}`;
      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          const characters = 
          `<div class="row">
            <div class="col-4 col-md-3 col offset-md-2">
            <img id="imgg" class="img-characters" data-toggle="modal" data-target="#MyModal" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6>${data.results[i].title}</h6>
              <h5>S/.${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button type="button" class="btn btn-warning">Comprar</button>
            </div>
          </div><hr>`;
        container.innerHTML += characters;
      })
      .catch(function (error) {
        console.log(JSON.stringify(`Error ${error}`));
      });
    })

    boxMaquillaje.addEventListener('click', function () {
      parameter = 'maquillaje';
      var container = document.getElementById('maquillaje');
      const url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${parameter}`;
      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
        const characters = 
          `<div class="row">
            <div class="col-4 col-md-3 col offset-md-2">
            <img id="imgg" class="img-characters" data-toggle="modal" data-target="#MyModal" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6>${data.results[i].title}</h6>
              <h5>S/.${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button type="button" class="btn btn-warning">Comprar</button>
            </div>
          </div><hr>`;
          container.innerHTML += characters;
        })
        .catch(function (error) {
          console.log(JSON.stringify(`Error ${error}`));
        });
    })

    boxModa.addEventListener('click', function () {
      parameter = 'moda';
      var container = document.getElementById('moda');
      const url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${parameter}`;
      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
        const characters = 
          `<div class="row">
            <div class="col-4 col-md-3 col offset-md-2">
            <img id="imgg" class="img-characters" data-toggle="modal" data-target="#MyModal" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6>${data.results[i].title}</h6>
              <h5>S/.${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button type="button" class="btn btn-warning">Comprar</button>
            </div>
          </div><hr>`;
          container.innerHTML += characters;
        })
        .catch(function (error) {
          console.log(JSON.stringify(`Error ${error}`));
        });
    })

    boxJoyas.addEventListener('click', function () {
      parameter = 'joyas';
      var container = document.getElementById('joyas');
      const url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${parameter}`;
      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          const characters = 
            `<div class="row">
              <div class="col-4 col-md-3 col offset-md-2">
              <img id="imgg" class="img-characters" data-toggle="modal" data-target="#MyModal" src="${data.results[i].thumbnail}" alt="${data.name}">
              </div>
              <div class="col-8 col-md-6">
                <h6>${data.results[i].title}</h6>
                <h5>S/.${data.results[i].price}</h5>
                <span><i class="fa fa-truck"></i> Envio a todo el País<span>
                <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
                <button type="button" class="btn btn-warning">Comprar</button>
              </div>
            </div><hr>`;
          container.innerHTML += characters;
        })
        .catch(function (error) {
          console.log(JSON.stringify(`Error ${error}`));
        });
    })

    boxBebes.addEventListener('click', function () {
      parameter = 'bebes';
      var container = document.getElementById('bebe');
      const url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${parameter}`;
      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          const characters = 
          `<div class="row">
            <div class="col-4 col-md-3 col offset-md-2">
            <img id="imgg" class="img-characters" data-toggle="modal" data-target="#MyModal" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6>${data.results[i].title}</h6>
              <h5>S/.${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button type="button" class="btn btn-warning">Comprar</button>
            </div>
          </div><hr>`;
          container.innerHTML += characters;
        })
        .catch(function (error) {
          console.log(JSON.stringify(`Error ${error}`));
        });
    })

    boxVehiculo.addEventListener('click', function () {
      parameter = 'vehiculo';
      var container = document.getElementById('vehiculo');
      const url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${parameter}`;
      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          const characters = 
          `<div class="row">
            <div class="col-4 col-md-3 col offset-md-2">
            <img id="imgg" class="img-characters" data-toggle="modal" data-target="#MyModal" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6>${data.results[i].title}</h6>
              <h5>S/.${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button type="button" class="btn btn-warning">Comprar</button>
            </div>
          </div><hr>`;
          container.innerHTML += characters;
        })
        .catch(function (error) {
          console.log(JSON.stringify(`Error ${error}`));
        });
    })

    boxHogar.addEventListener('click', function () {
      parameter = 'hogar';
      var container = document.getElementById('hogar');
      const url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${parameter}`;
      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          const characters = 
          `<div class="row">
            <div class="col-4 col-md-3 col offset-md-2">
            <img id="imgg" class="img-characters" data-toggle="modal" data-target="#MyModal" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6>${data.results[i].title}</h6>
              <h5>S/.${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button type="button" class="btn btn-warning">Comprar</button>
            </div>
          </div><hr>`;
          container.innerHTML += characters;
        })
        .catch(function (error) {
          console.log(JSON.stringify(`Error ${error}`));
        });
    })

    boxDeporte.addEventListener('click', function () {
      parameter = 'deporte';
      var container = document.getElementById('deportes');
      const url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${parameter}`;
      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          const characters = 
          `<div class="row">
            <div class="col-4 col-md-3 col offset-md-2">
            <img id="imgg" class="img-characters" data-toggle="modal" data-target="#MyModal" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6>${data.results[i].title}</h6>
              <h5>S/.${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button type="button" class="btn btn-warning">Comprar</button>
            </div>
          </div><hr>`;
          container.innerHTML += characters;
        })
        .catch(function (error) {
          console.log(JSON.stringify(`Error ${error}`));
        });
    })

    boxSalud.addEventListener('click', function () {
      parameter = 'salud';
      var container = document.getElementById('salud');
      const url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${parameter}`;
      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          const characters = 
          `<div class="row">
            <div class="col-4 col-md-3 col offset-md-2">
            <img id="imgg" class="img-characters" data-toggle="modal" data-target="#MyModal" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6>${data.results[i].title}</h6>
              <h5>S/.${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button type="button" class="btn btn-warning">Comprar</button>
            </div>
          </div><hr>`;
          container.innerHTML += characters;
        })
        .catch(function (error) {
          console.log(JSON.stringify(`Error ${error}`));
        });
    })

  }

}