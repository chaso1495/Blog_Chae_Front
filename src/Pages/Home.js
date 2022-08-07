import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <HomeBase>
      <GreetContainer>
        <Greeting />
      </GreetContainer>
      <MenuContainer>
        <Menus />
      </MenuContainer>
    </HomeBase>
  );
};

const HomeBase = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: Column;
`; // 오른쪽 기초 레이아웃 잡아주기
// flex-wrap: 자식 컴포넌트가 기본 축을 따라다가
// 컴포넌트의 크기를 초과한 경우 대처법을 설정해줌.
// wrap은 초과할 경우 줄바꿈을 해버리겠다는 의미.
// justify-content는 아이템들의 정렬을 결정
// space-between은 그 '사이'에 균일한 간격을 생성

const GreetContainer = styled.div`
  height: 250px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: left;

  margin-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;

  p {
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 60px;
    text-align: left;
  }
`; // 인사 메시지의 속성을 결정해주는 컨테이너

const Greeting = () => {
  return (
    <>
      <p>안녕하세요</p>
      <p Style="color: #108fb8; font-weight:bold;">대학생 1인 개발자</p>
      <p>채승운입니다</p>
    </>
  );
}; // 인사 메시지 컴포넌트

const MenuContainer = styled.div`
  height: 150px;
  width: 400px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;

  Link {
    font-size: 100px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  margin-bottom: 15px;
  color: black;
`;

const Menus = () => {
  return (
    <>
      <StyledLink to="/blog">Blog</StyledLink>
      <StyledLink to="/project">Project</StyledLink>
      <StyledLink to="/problemsolving">ProblemSolving</StyledLink>
      <StyledLink to="/about">About</StyledLink>
    </>
  );
};

export default Home;
