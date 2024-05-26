import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { modify, remove, complete } from "./todoSlice";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Item = styled.li`
  margin-bottom: 15px;
  width: 380px;

  & span {
    font-size: 25px;
    margin-right: 10px;
  }

  & button {
    font-size: 25px;
    border: none;
    background: none;
  }
`;

const Input = styled.input`
  width: 200px;
  font-size: 25px;
  text-align: center;
  border: none;
  border-bottom: 2px solid white;
  background: none;
  color: white;

  &::placeholder {
    color: white;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

export default function TodoList() {
  const todolist = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      dispatch({ type: "todo/initialize", payload: storedTodos });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist));
  }, [todolist]);

  const handleModify = (id) => {
    dispatch(modify({ id, newText: editingText }));
    setEditingId(null);
    setEditingText("");
  };

  const pen = "✏️";
  const trash = "❌";

  const todolistView = todolist.map((todo, idx) => (
    <Item key={todolist[idx].id}>
      {editingId === todolist[idx].id ? (
        <Input
          value={editingText}
          onChange={(e) => setEditingText(e.target.value)}
          onBlur={() => handleModify(todolist[idx].id)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleModify(todolist[idx].id);
          }}
        />
      ) : (
        <>
          <input
            type="checkbox"
            onChange={() => dispatch(complete(todolist[idx].id))}
          />
          <span></span>
          <span
            style={{
              textDecoration: todolist[idx].complete ? "line-through" : "none",
            }}
          >
            {todolist[idx].text}
          </span>
          <button
            onClick={() => {
              setEditingId(todolist[idx].id);
              setEditingText(todolist[idx].text);
            }}
          >
            {pen}
          </button>
          <button onClick={() => dispatch(remove(todolist[idx].id))}>
            {trash}
          </button>
        </>
      )}
    </Item>
  ));

  return (
    <>
      <List>{todolistView}</List>
    </>
  );
}
