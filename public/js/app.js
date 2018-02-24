// MELI.init({client_id: 5649946708065972});
// // Así de fácil. Luego, la siguiente línea de código mostrará el primer nombre que registraste en MercadoLibre:
// MELI.login(function() {
//   MELI.get(
// 	"/users/me",{},
//   	function(data) { alert("Hello "+data[2].first_name) }
//   );
// });

// curl -X POST -H "Content-Type: application/json" -d
// '{
// "site_id":"5649946708065972"
// }'

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