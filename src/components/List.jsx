var React=require('react');
var ListItem=require('./ListItem.jsx');

var HTTP=require('../services/httpservice');


var List=React.createClass({

  getInitialState:function(){
    console.log("getInitialState");
    return {ingredients:[]};
  },

  componentWillMount:function(){
    console.log("componentWillMount");
    HTTP.get('/ingredients')
    .then(function(data){
      this.setState({ingredients:data});
    }.bind(this));
  },

    render:function(){
        var listitems=this.state.ingredients.map(function(item){
            return <ListItem key={item.id} ingredient={item.text}/>;
        });

      return (<ul>{listitems}</ul>);
    }

});

module.exports=List;
