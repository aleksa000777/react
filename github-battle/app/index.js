var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div> Hello Reactjs Program, {this.props.name} </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld name="Aleksa"/>,
  document.getElementById('app')
);
