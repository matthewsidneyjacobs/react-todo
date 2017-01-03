var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id:uuid(),
          text:'walk dog'
        },
        {
          id:uuid(),
          text:'clean yard'
        },
        {
          id:uuid(),
          text: 'take out trash'
        },
        {
          id:uuid(),
          text: 'cabbage'
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    // alert('new todo:' + text);
    this.setState ({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text:text
        }
      ]
    })
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
