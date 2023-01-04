const defaultState = {
  todos: [],
};

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "add_todo":
      return { ...state, todos: [...state.todos, action.payload] };
    case "remove_todo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "activate":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: false } : todo
        ),
      };
    case "done":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: true } : todo
        ),
      };
    default:
      return state;
  }
};

export const addTodoAction = (payload) => ({ type: "add_todo", payload });
export const removeTodoAction = (payload) => ({ type: "remove_todo", payload });
export const doneTodoAction = (payload) => ({ type: "done", payload });
export const activateTodoAction = (payload) => ({ type: "activate", payload });
