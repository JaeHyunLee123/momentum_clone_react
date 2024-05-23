import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return [];
  }
};

/**
 * 
 * @param {Object} state
 * @param {Array} state.todos
 */

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.todos);
    localStorage.setItem('todos', serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const initialState = loadState();

export const todoSlice = createSlice({
  name : 'todofunction',
  initialState,
  reducers: {
    add : (state, action) => {
      state.push({
        id : Date.now(),
        text : action.payload,
        complete : false,
      })
      saveState(state);
    },
    modify : (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find(e => e.id === id);
      if (todo) {
        todo.text = newText;
      }
      saveState(state);
    },
    remove : (state, action) => {
      const todo = state.filter(e => e.id !== action.payload)
      saveState(todo);
      return state.filter(e => e.id !== action.payload)
    },
    complete : (state, action) => {
      const todo = state.map(e => e.id === action.payload ? {...e, complete : !e.complete} : e)
      saveState(todo);
      return state.map(e => e.id === action.payload ? {...e, complete : !e.complete} : e)
    },
  },
});

export const {add, modify, remove, complete} = todoSlice.actions;
export default todoSlice.reducer;
