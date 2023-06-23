import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Peoples } from "../models/peoples";

interface Props {
  people: Peoples["people"];
  setPeople: React.Dispatch<React.SetStateAction<Peoples["people"]>>;
}

export default function AddToList({ people, setPeople }: Props) {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = () => {
    if (!input.name || !input.age || !input.url) return;

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);

    setInput({ name: "", age: "", url: "", note: "" });
  };

  return (
    <Container>
      <Input
        type='text'
        placeholder='Name'
        value={input.name}
        name='name'
        onChange={handleChange}
      />
      <Input
        type='number'
        placeholder='Age'
        value={input.age}
        name='age'
        onChange={handleChange}
      />
      <Input
        type='text'
        placeholder='Image Url'
        value={input.url}
        name='url'
        onChange={handleChange}
      />
      <Textarea
        placeholder='Notes'
        value={input.note}
        name='note'
        onChange={handleChange}
      />

      <Button onClick={handleClick}>Add to List</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
`;

const Button = styled.button`
  all: unset;
  background-color: #999999;
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;
