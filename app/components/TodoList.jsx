var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
  render: function () {
    var {todos, showCompleted, searchText} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing To Do</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);


// var React = require('react');
// var {connect} = require('react-redux');
// import Todo from 'Todo';
// // var Todo = require('Todo');
// var TodoAPI = require('TodoAPI');
//
// export var TodoList = React.createClass({
//   render: function() {
//     var {todos, showCompleted, searchText} = this.props;
//
//     var renderTodos = () => {
//       if(todos.length === 0) {
//         return (
//           <p className="container__message">Nothing to do</p>
//         )
//       }
//       return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
//         return (
//
//           <Todo key={todo.id} {...todo}/>
//           // <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
//           //we need todo.id because react needs to be able to keep track of every item.
//           //this ... is called the spread operator. it takes every attribute from todo and passes it down as a prop.
//         );
//       });
//     };
//     return (
//       <div>
//         {renderTodos()}
//       </div>
//     )
//   }
// });
//
// // module.exports = TodoList;
//
// export default connect(
//   (state) => {
//     return state;
//   }
// )(TodoList);
//
// // module.exports = connect(
// //   (state) => {
// //     return {
// //       todos: state.todos
// //     };
// //   }
// // )(TodoList);
