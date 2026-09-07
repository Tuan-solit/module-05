class TodoService {
  constructor() {
    this.todos = [
      {
        id: 1,
        title: "Làm bài tập james",
        completed: false,
      },
      {
        id: 2,
        title: "Học Class Component",
        completed: true,
      },
      {
        id: 3,
        title: "Học Function Component",
        completed: false,
      },
    ];
  }

  getAll() {
    return [...this.todos];
  }

  addTodo(title) {
    const lastId = this.todos.length>0 ? this.todos[this.todos.length-1].id : 0;
    const newTodo = {
        id: lastId+1,
        title: title,
        completed: false
    };
    this.todos.push(newTodo);
    return [...this.todos];
  }

  toggleTodo(id){
    this.todos = this.todos.map((todo) => todo.id === id? {...todo, completed: !todo.completed} : todo);
    return [...this.todos];
  }

  deleteById(id) {
    return (this.todos = this.todos.filter((todo) => todo.id != id));
  }
}
export default new TodoService();
