// Focused
// Independent
// Reusable
// Small
// Testable

//npm run start(to run webpack-dev-server)

var USER_DATA = {
  name: "Aleksa Matiyev",
  username: "aleksa000777",
  image: "http://aleksamatiyev.com/assets/img/bottom/logo.png"
}

var React = require('react');
var ReactDOM = require('react-dom');



var ProfilePic = React.createClass({
  render: function(){
    return <img src = {this.props.imageUrl} style={{height:100, width:100}} />
  }
})

var ProfileLink = React.createClass({
  render: function(){
    return (
      <div>
        <a href={"https://www.github.com/" + this.props.username} target="_blank">
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function(){
    return (
      <h2>{this.props.name} </h2>
    )
  }
});

var Avatar = React.createClass({
  render: function(){
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})

ReactDOM.render(
  <Avatar user={USER_DATA}/>,
  document.getElementById('app')
);







///====================================//
//===========example==================//


var HelloUser = React.createClass({
  render: function(){
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

// ReactDOM.render(
//   <HelloUser name="Roxy"/>, document.getElementById("user")
// )
