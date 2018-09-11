'use strict';

var contentNode = document.getElementById('contents');

var continents = ['Africa', 'America', 'Kree Empire', 'Savage Land', 'Wakanda', 'Shaolin'];
var message = continents.map(function (c) {
  return 'Hello ' + c + '!';
}).join(' ');

var component = React.createElement(
  'p',
  null,
  message
);
ReactDOM.render(component, contentNode);