// UNCOMMENT LINES BELOW TO MAKE POKEMON RUN
//
// $(document).ready(function(){
//   animatePokemon();
// });
//
// function NewPosition(){
//   var h = $(window).height();
//   var w = $(window).width();
//   console.log(Math.random())
//   var nh = Math.random() * h;
//   var nw = Math.random() * w;
//   return [nh,nw];
// }
//
// function animatePokemon(){
//   $('.pokemon-container').each(function( index ) {
//     var newPos = NewPosition();
//     var duration = Math.floor(Math.random() * 10000);
//     $(this).animate({
//       top: newPos[0],
//       left: newPos[1]
//       }, duration, function(){
//         animatePokemon();
//     });
//   });
// };
