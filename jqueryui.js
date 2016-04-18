

$(document).ready(function() {
  $(function() {
    $( "#draggable" ).draggable({revert: true});
  });

  $(function() {
    $( "#accordion" ).accordion();
  });
  $(function() {
    $( "#accordion2" ).accordion();
  });
  $(function() {
    $( "#menu" ).menu();
  });

  $(function() {
    $( "#tabs" ).tabs();
  });

  $(function() {
    $( "#selectable" ).selectable();
  });

  $( ".selector" ).accordion({
  active: 2
});

});
