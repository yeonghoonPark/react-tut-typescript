import { useState } from "react";
import styled from "styled-components";
import AddToList from "./components/AddToList";
import List from "./components/List";
import { Peoples } from "./models/peoples";

export default function App() {
  const [people, setPeople] = useState<Peoples["people"]>([
    {
      name: "Lebron James",
      age: 36,
      url: "https://img.gqkorea.co.kr/gq/2022/03/style_62219dd95a2d0.jpg",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Alien",
      age: 389,
      url: "https://comicthumb-phinf.pstatic.net/20180928_216/pocket_153810024062740zTf_JPEG/001.jpg?type=m600x314",
      note: "This is the spot!!",
    },
  ]);

  return (
    <Container>
      <H1>People Invited to my Party</H1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const H1 = styled.h1`
  text-align: center;
  margin: 1rem 0 2rem;
`;
