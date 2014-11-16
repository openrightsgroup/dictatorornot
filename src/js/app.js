var React = require('react');
window.React = React;

var Dictator = require('./components/Dictator.react');

React.render(<Dictator />, document.getElementById('quote-widget'));