$(document).ready(function(){

$('.board').on('click', '.tile', function(){
  currentTile = $(this);
  $(this).toggleClass('highlighted');
  $('#end-turn').toggle();
  return false;
})



})
