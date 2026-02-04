import type { TodoProps } from "./App";

export function reducer(state: TodoProps[], action) {
  switch (action.type) {
    case "TOGGLE_CHECKED":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: action.payload.status }
          : todo,
      );
    default:
      return state;
  }
}
