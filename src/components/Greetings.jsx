import { useState, useEffect } from "react";
import styled from "styled-components";

const LoginForm = styled.form`
  display: flex;
  justify-content: center;
`;

const LoginInput = styled.input`
  width: 500px;
  font-size: 50px;
  text-align: center;
  border: none;
  border-bottom: thick double white;
  background: none;
  color: white;

  &::placeholder {
    text-align: center;
    font-size: 50px;
    color: white;
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

const Greeting = styled.h1`
  text-align: center;
  font-size: 50px;
`;

const Greetings = () => {
  const [name, setName] = useState('');
  const [storedName, setStoredName] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('username');
    if (savedName) {
      setStoredName(savedName);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('username', name);
    setStoredName(name);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  if (storedName) {
    return (
      <>
        <Greeting>Hello {storedName}</Greeting>
      </>
    );
  }

  return (
    <>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput
          type="text"
          value={name}
          onChange={handleChange}
          maxLength={15}
          placeholder="What is your name?"
          required
        />
      </LoginForm>
    </>
  );
};

export default Greetings;