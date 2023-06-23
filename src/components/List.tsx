import styled from "styled-components";
import { Peoples } from "../models/peoples";

export default function List({ people }: Peoples) {
  const renderList = (): JSX.Element[] =>
    people.map(({ name, url, age, note }) => (
      <Li key={url}>
        <Container>
          <AvatarImage src={url} alt={`${name} avatar`} />
          <H2>{name}</H2>
          <P>{age} years old</P>
          <P>{note}</P>
        </Container>
      </Li>
    ));

  return <Ul>{renderList()}</Ul>;
}

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Li = styled.li`
  list-style: none;
  border: 1px solid #999999;
  padding: 1rem;
  border-radius: 5px;
`;

const AvatarImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H2 = styled.h2`
  width: 30%;
  text-align: center;
`;

const P = styled.p`
  width: 20%;
  text-align: center;
`;
