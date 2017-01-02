var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

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
  handleAddTodo: function(text) {
    alert('new todo:' + text);
  }, //need to make an AddTodo component
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos}/>
        {/* //AddTodo component with handleAddTodo method add spy tests */}
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
