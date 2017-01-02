var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
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
  }, //need to make an AddTodo component (did it)
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        {/* //AddTodo component with handleAddTodo method add spy tests */}
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
