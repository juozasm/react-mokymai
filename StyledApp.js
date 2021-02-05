import * as S from "./styled";

export default function App() {
  return (
    <S.Container>
      <S.Header>
        <S.Nav>
          <S.NavList>
            <S.NavListItem color="purple">asd</S.NavListItem>
            <S.NavListItem>qwe</S.NavListItem>
            <S.NavListItem>zxc</S.NavListItem>
          </S.NavList>
          <S.Button primaryColor="red" variant={"primary"}>
            primary
          </S.Button>
          <S.Button variant={"secondary"}>secondary</S.Button>
        </S.Nav>
      </S.Header>
    </S.Container>
  );
}
