var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var configureStore = require('configureStore');
var TodoApp = require('TodoApp');
import TodoList from 'TodoList';

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0]
    var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});

  // it('should add todo to the todos state on handleAddTodo', () => {
  //   var todoText = 'destroy enemies';
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //
  //   todoApp.setState({todos: []});
  //   todoApp.handleAddTodo(todoText);
  //
  //   expect(todoApp.state.todos[0].text).toBe(todoText);
  //   //expect createdAt to be a number
  //   expect(todoApp.state.todos[0].createdAt).toBeA('number');
  // });

  // it('should toggle completed value when handleToggle called', () => {
  //   var todoData = {
  //     id:11,
  //     text:"test features",
  //     completed: false,
  //     createdAt: 0,
  //     completedAt: undefined
  //   };
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //   todoApp.setState({todos: [todoData]});
  //
  //   //check that todos first item has completed value of false
  //   //call handleToggle with 11
  //   //verify that value changed.
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   todoApp.handleToggle(11);
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   //expect completedAt to be a number
  //   expect(todoApp.state.todos[0].completedAt).toBeA('number');
  // });


  // it('should toggle todo from completed to incomplete', () => {
  //   var todoData = {
  //     id:11,
  //     text:"test features",
  //     completed: true,
  //     createdAt: 0,
  //     completedAt: 12
  //   };
  //   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
  //   todoApp.setState({todos: [todoData]});
  //
  //   //check that todos first item has completed value of false
  //   //call handleToggle with 11
  //   //verify that value changed.
  //   expect(todoApp.state.todos[0].completed).toBe(true);
  //   todoApp.handleToggle(11);
  //   expect(todoApp.state.todos[0].completed).toBe(false);
  //   //expect completedAt to be a number
  //   expect(todoApp.state.todos[0].completedAt).toNotExist();
  // });
// })
