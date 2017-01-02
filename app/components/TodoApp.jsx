var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id:1,
          text:'walk dog'
        },
        {
          id:2,
          text:'clean yard'
        },
        {
          id:3,
          text: 'take out trash'
        },
        {
          id:4,
          text: 'cabbage'
        }
      ]
    };
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
