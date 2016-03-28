var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function(){
    return (
      <div> Hello Reactjs Program, {this.props.name} </div>
    )
  }
});

var HelloUser = React.createClass({
  render: function(){
    // var name = "Tyler Smith"
    var name = this.props.name
    var friends = ["Ean Platter", "Murthy Scott", "Merrys Cristian"]
    return (
      <div>
        <h3>Name: {name} </h3>
        <ShowList names = {friends} />
      </div>
    )
  }
});

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return <li> {friend} </li>;
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

ReactDOM.render(
  <HelloWorld name="Aleksa"/>,
  document.getElementById('app')
);

ReactDOM.render(
  <HelloUser name="Roxy"/>, document.getElementById("user")
)
