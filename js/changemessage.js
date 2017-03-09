(function($){
  var messagetoshow;
  //Obtiene el numero del url http://theplanid.com?mms=#
  var numbermms = location.search.split('mms=')[1]

  //Obtiene la clase del source html
  var $message = document.querySelector('.message');

  //Se enlistan los mensajes
  var messages = [
  "Optimización a través de ejecución efectiva.",
  "Productividad a través de integración de procesos.",
  "Ejecución oportuna de procesos.",
  "Productividad a través de ejecución oportuna de procesos."
  ];
  //Se obtiene el mensaje por medio del numero
  if(numbermms == null)
  {
    messagetoshow = messages[0];
  }
  else {
    messagetoshow = messages[numbermms];
  }

  //Se agrega el mensaje al source html
  $message.innerHTML = messagetoshow;
})(jQuery);
