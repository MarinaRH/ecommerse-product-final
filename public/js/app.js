$('.carousel').carousel();

// configuración inicial del carrito 
paypal.minicart.render({
  target: '_blank',
  strings:{
    button:'Pagar'
   ,buttonAlt: "Total"
   ,subtotal: 'Total:'
   ,empty: 'No hay productos en el carrito'
  }
});


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

    inputSearch.addEventListener('keyup', function () {
      let search = inputSearch.value;
      var container = document.getElementById('section');
      container.innerHTML = '';
      const url = `https://api.mercadolibre.com/sites/MPE/search?condition=new&q=${search}`;
      fetch(url)
      .then((resp) => resp.json())
      .then(function (data) {
        const characters =
          `<div class="row">
            <div class="col-4 col-md-3 col offset-md-2">
            <img id="imgg" class="img-characters" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6 id="title">${data.results[i].title}</h6>
              <h5 id="price">S/${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p><i class="fa fa-credit-card"></i> 12x S/${data.results[i].installments.amount} </p>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>

              <button id="buy" type="button" class="btn btn-warning" data-title="${data.results[i].title}" data-price="${data.results[i].price}">Agregar a carrito</button>
            </div>
          </div><hr>`;
          container.innerHTML += characters;

          $('.row').on('click', '#buy', function () {

            paypal.minicart.cart.add({
              business: 'laurajimenezh16@hotmail.com',
              item_name: $(this).data('title'),
              amount: $(this).data('price'),
              currency_code: 'PEN',
            }) 
  
          })
        })
      .catch(function (error) {
        console.log(JSON.stringify(`Error ${error}`));
      });
    })

    document.getElementById('hom').addEventListener('click', function () {
      window.location.reload(true);
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
            <img id="imgg" class="img-characters" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6 id="title">${data.results[i].title}</h6>
              <h5 id="price">S/${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p><i class="fa fa-credit-card"></i> 12x S/${data.results[i].installments.amount} </p>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button id="buy" type="button" class="btn btn-warning" data-img="${data.results[i].thumbnail}"  data-title="${data.results[i].title}" data-price="${data.results[i].price}">Agregar a carrito</button>
            </div>
          </div><hr>`;
        container.innerHTML += characters;
        $('.row').on('click', '#buy', function(event) {
          paypal.minicart.cart.add({
            business: 'laurajimenezh16@hotmail.com',
            item_name: $(this).data('title'),
            amount: $(this).data('price'),
            currency_code: 'PEN',

          })  
          
        })
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
            <img id="imgg" class="img-characters" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6 id="title">${data.results[i].title}</h6>
              <h5 id="price">S/${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p><i class="fa fa-credit-card"></i> 12x S/${data.results[i].installments.amount} </p>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button id="buy" type="button" class="btn btn-warning" data-img="${data.results[i].thumbnail}"  data-title="${data.results[i].title}" data-price="${data.results[i].price}">Agregar a carrito</button>
            </div>
          </div><hr>`;
        container.innerHTML += characters;

        $('.row').on('click', '#buy', function () {
          paypal.minicart.cart.add({
            business: 'laurajimenezh16@hotmail.com',
            item_name: $(this).data('title'),
            amount: $(this).data('price'),
            currency_code: 'PEN',

          }) 

        })
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
            <img id="imgg" class="img-characters" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6 id="title">${data.results[i].title}</h6>
              <h5 id="price">S/${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p><i class="fa fa-credit-card"></i> 12x S/${data.results[i].installments.amount} </p>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button id="buy" type="button" class="btn btn-warning" data-img="${data.results[i].thumbnail}"  data-title="${data.results[i].title}" data-price="${data.results[i].price}">Agregar a carrito</button>
            </div>
          </div><hr>`;
        container.innerHTML += characters;

        $('.row').on('click', '#buy', function () {


          paypal.minicart.cart.add({
            business: 'laurajimenezh16@hotmail.com', 
            item_name: $(this).data('title'),
            amount: $(this).data('price'),
            currency_code: 'PEN',
          }) 
        })
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
            <img id="imgg" class="img-characters" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6 id="title">${data.results[i].title}</h6>
              <h5 id="price">S/${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p><i class="fa fa-credit-card"></i> 12x S/${data.results[i].installments.amount} </p>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button id="buy" type="button" class="btn btn-warning" data-img="${data.results[i].thumbnail}"  data-title="${data.results[i].title}" data-price="${data.results[i].price}">Agregar a carrito</button>
            </div>
          </div><hr>`;
        container.innerHTML += characters;

        $('.row').on('click', '#buy', function () {


          paypal.minicart.cart.add({
            business: 'laurajimenezh16@hotmail.com', 
            item_name: $(this).data('title'),
            amount: $(this).data('price'),
            currency_code: 'PEN',

          }) 
        })
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
            <img id="imgg" class="img-characters" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6 id="title">${data.results[i].title}</h6>
              <h5 id="price">S/${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p><i class="fa fa-credit-card"></i> 12x S/${data.results[i].installments.amount} </p>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button id="buy" type="button" class="btn btn-warning" data-img="${data.results[i].thumbnail}"  data-title="${data.results[i].title}" data-price="${data.results[i].price}">Agregar a carrito</button>
            </div>
          </div><hr>`;
        container.innerHTML += characters;

        $('.row').on('click', '#buy', function () {


          paypal.minicart.cart.add({
            business: 'laurajimenezh16@hotmail.com',
            item_name: $(this).data('title'),
            amount: $(this).data('price'),
            currency_code: 'PEN',

          }) 
        })
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
        console.log(data.results[i])
        const characters =
          `<div class="row">
            <div class="col-4 col-md-3 col offset-md-2">
            <img id="imgg" class="img-characters" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6 id="title">${data.results[i].title}</h6>
              <h5 id="price">S/${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button id="buy" type="button" class="btn btn-warning" data-img="${data.results[i].thumbnail}"  data-title="${data.results[i].title}" data-price="${data.results[i].price}">Agregar a carrito</button>
            </div>
          </div><hr>`;
        container.innerHTML += characters;

        $('.row').on('click', '#buy', function () {


          paypal.minicart.cart.add({
            business: 'laurajimenezh16@hotmail.com', 
            item_name: $(this).data('title'),
            amount: $(this).data('price'),
            currency_code: 'PEN',

          }) 
        })
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
            <img id="imgg" class="img-characters" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6 id="title">${data.results[i].title}</h6>
              <h5 id="price">S/${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p><i class="fa fa-credit-card"></i> 12x S/${data.results[i].installments.amount} </p>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button id="buy" type="button" class="btn btn-warning" data-img="${data.results[i].thumbnail}"  data-title="${data.results[i].title}" data-price="${data.results[i].price}">Agregar a carrito</button>
            </div>
          </div><hr>`;
        container.innerHTML += characters;

        $('.row').on('click', '#buy', function () {


          paypal.minicart.cart.add({
            business: 'laurajimenezh16@hotmail.com',
            item_name: $(this).data('title'),
            amount: $(this).data('price'),
            currency_code: 'PEN',

          }) 
        })
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
            <img id="imgg" class="img-characters" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6 id="title">${data.results[i].title}</h6>
              <h5 id="price">S/${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p><i class="fa fa-credit-card"></i> 12x S/${data.results[i].installments.amount} </p>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button id="buy" type="button" class="btn btn-warning" data-img="${data.results[i].thumbnail}"  data-title="${data.results[i].title}" data-price="${data.results[i].price}">Agregar a carrito</button>
            </div>
          </div><hr>`;
        container.innerHTML += characters;

        $('.row').on('click', '#buy', function () {


          paypal.minicart.cart.add({
            business: 'laurajimenezh16@hotmail.com', // Cuenta paypal para recibir el dinero
            item_name: $(this).data('title'),
            amount: $(this).data('price'),
            currency_code: 'PEN',

          }) 
        })
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
            <img id="imgg" class="img-characters" src="${data.results[i].thumbnail}" alt="${data.name}">
            </div>
            <div class="col-8 col-md-6">
              <h6 id="title">${data.results[i].title}</h6>
              <h5 id="price">S/${data.results[i].price}</h5>
              <span><i class="fa fa-truck"></i> Envio a todo el País<span>
              <p><i class="fa fa-credit-card"></i> 12x S/${data.results[i].installments.amount} </p>
              <p> ${data.results[i].sold_quantity}  vendidos-Lima</p>
              <button id="buy" type="button" class="btn btn-warning" data-img="${data.results[i].thumbnail}"  data-title="${data.results[i].title}" data-price="${data.results[i].price}">Agregar a carrito</button>
            </div>
          </div><hr>`;
        container.innerHTML += characters;

        $('.row').on('click', '#buy', function () {


          paypal.minicart.cart.add({
            business: 'laurajimenezh16@hotmail.com',
            item_name: $(this).data('title'),
            amount: $(this).data('price'),
            currency_code: 'PEN',

          }) 
        })
      })
      .catch(function (error) {
        console.log(JSON.stringify(`Error ${error}`));
      });
    })

    
  }
}