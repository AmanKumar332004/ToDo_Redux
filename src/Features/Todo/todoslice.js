// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [
//     {
//       id: 1,
//       text: "Aman is Frontend Developer",
//     },
//   ],
// };

// export const todoSlice = createSlice({
//   name:'todo',
//   initialState,
//   reducers:{
//     addTodo: (state,action)=>{
//       const todo = {
//         id : nanoid(),
//         text: action.payload
//       }
//       state.todos.push(todo)
//     },
//     removeTodo: (state,action)=>{
//       state.todos = state.todos.find((todo) => todo.id !== action.payload)
//     },
//   }
// })


// export const {addTodo,removeTodo} from todoSlice.actions

// export default todoSlice.reducer


import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Aman is Frontend Developer",
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Correctly exporting the actions
export const { addTodo, removeTodo } = todoSlice.actions;

// Correctly exporting the reducer
export default todoSlice.reducer;
