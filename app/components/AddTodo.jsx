var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var todoText = this.refs.newTodo.value;

    if (todoText.length >0) {
      this.refs.newTodo.value = '';
      this.props.onAddTodo(todoText)
    }else {
      this.refs.newTodo.focus();
    }

  },
  render: function () {
    return (
      <div>
      <form ref="form" onSubmit={this.onSubmit} className="AddTodo-form">
        <input type="text" ref="newTodo" placeholder="Type out next Todo Item"/>
        <button className="button expanded">Enter Next To Do Item</button>
      </form>
    </div>
    )
  }
})

module.exports = AddTodo;