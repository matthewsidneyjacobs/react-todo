var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');


export var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.newTodo.value;

    if (todoText.length >0) {
      this.refs.newTodo.value = '';
      // this.props.onAddTodo(todoText)
      dispatch(actions.addTodo(todoText));
    }else {
      this.refs.newTodo.focus();
    }

  },
  render: function () {
    return (
      <div className="container__footer">
      <form ref="form" onSubmit={this.onSubmit} className="AddTodo-form">
        <input type="text" ref="newTodo" placeholder="Type out next Todo Item"/>
        <button className="button expanded">Enter Next To Do Item</button>
      </form>
    </div>
    )
  }
})


export default connect()(AddTodo);
// module.exports = AddTodo;
