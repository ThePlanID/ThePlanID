var $message = document.querySelector('.message');
var messages = [
"Optimización a través de ejecución efectiva.",
"Productividad a través de integración de procesos.",
"Ejecución oportuna de procesos.",
"Productividad a través de ejecución oportuna de procesos."
];

var random = Math.floor(Math.random() * 3) + 0;

var messagetoshow = messages[random];

$message.innerHTML = messagetoshow;
