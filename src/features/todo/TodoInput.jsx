import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./todoSlice";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 400px;
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

export default function TodoInput() {
  const dispatch = useDispatch();

  const [todolist, setTodolist] = useState({
    id: 0,
    text: "",
  });

  function handleText(e) {
    setTodolist({ text: e.target.value });
  }

  function onReset() {
    setTodolist({ text: "" });
  }

  return (
    <div>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (todolist.text !== "") {
            dispatch(add(todolist.text));
          }
          onReset();
        }}
      >
        <div>
          <Input
            type="text"
            value={todolist.text}
            onChange={handleText}
            placeholder="Write a To Do and Press Enter"
            required
          />
        </div>
      </Form>
    </div>
  );
}
