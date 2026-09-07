import { Component } from "react";
import { Table } from "react-bootstrap";
import TodoService from "../../service/todo/TodoService";
import Delete from "../Delete";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: TodoService.getAll(),
      showModal: false,
      selectedTodo: null,
    };
  }
  handleShowModal = (todo) => {
    this.setState({
      showModal: true,
      selectedTodo: todo,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleToggle = (id)=>{
    const updatedList = TodoService.toggleTodo(id);
    this.setState({
        todoList: updatedList
    })
  }

  confirmDelete = (id) => {
    const todoList = TodoService.deleteById(id);
    this.setState({
      todos: [...todoList],
      showModal: false,
      selectedTodo: null,
    });
  };

  render() {
    return (
      <>
        <h2>Todo List</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>STT</th>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todoList.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  No todo yet!
                </td>
              </tr>
            ) : (
              this.state.todoList.map((todo, i) => (
                <tr key={todo.id}>
                  <td>{i + 1}</td>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>
                    <button onClick={() => this.handleToggle(todo.id)}>
                      {todo.completed ? "Done" : "Unfinished"}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => this.handleShowModal(todo)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
        <Delete
          showModal={this.state.showModal}
          closeModal={this.handleCloseModal}
          item={this.state.selectedTodo}
          confirmDelete={this.confirmDelete}
        ></Delete>
      </>
    );
  }
}
export default TodoList;
