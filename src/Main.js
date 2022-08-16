import React from "react";
import styled from "styled-components";
import Leftcomp from "./Leftcomp";
import Home from "./Pages/Home";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Base>
      <Header />
      <RightBase>
        <Outlet />
      </RightBase>
    </Base>
  );
};

const Header = () => {
  return (
    <LeftBase>
      <Leftcomp />
    </LeftBase>
  );
};

const Base = styled.div`
  height: 100%;
  width: 100%;

  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: row;
`;
// 정렬할 기준 축의 방향을 행으로 지정

const LeftBase = styled.div`
  height: 100%;
  width: 350px;

  left: 0;
  position: fixed;

  background-color: #2cbfe1;

  @media screen and (max-width: 768px) {
    background-color: #ff7f00;
  }

  animation-name: Left;
  // 애니메이션의 이름
  animation-duration: 2s;
  // 애니메이션 효과의 작동 시간
  animation-timing-fuction: ease-in-out;
  // 애니메이션 효과에 가속도 부여

  @keyframes Left {
    0% {
      width: 100%;
      display: none;
    }
    50% {
      width: 100%;
      display: block;
    }
    100% {
      display: block;
    }
  }
`;
// position 태그는 태그를 어떻게 위치시킬지 정의한다.
// fixed는 스크롤과 상관없이 문서 최 좌측상단 기준으로 좌표를 고정

const RightBase = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
  margin-left: 400px;
`;
// justify~ 기준 축의 수평 방향으로 정렬

export default Main;
