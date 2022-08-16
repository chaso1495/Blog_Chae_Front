import React from "react";
import styled from "styled-components";
import Base from "../Main";
import Header from "../Main";
import RightBase from "./Blog";

const About = () => {
  return (
    <AboutBase>
      <text>Chae's Ground</text>
      <p1>MADE BY CHAE</p1>
      <DivideLine />
      <p2>약력</p2>
      <p1>함양고등학교 졸업</p1>
      <p1>대한민국 공군 병장 809기 만기전역</p1>
      <p1>중앙대학교 소프트웨어학부 재학 중</p1>
      <DivideLine />
      <p2>활동 이력</p2>
      <p1>ZeroPage Node.js 스터디 '너두노드' 운영 (2022.03 ~ 2022.07) </p1>
      <p1>ZeroPage 알고리즘 스터디 '알고삽시다' 운영 (2022.06 ~ 2022.08) </p1>
      <p1>CECOM React.js 멘토링 참여 (2022.07 ~ 2022.08)</p1>
      <p1>2022 OSSCA 챌린져스 과정 수료 (2022.07) </p1>
      <DivideLine />
    </AboutBase>
  );
};

const AboutBase = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text {
    display: flex;
    flex-direction: row;
    font-size: 60px;
  }
  p1 {
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
  }
  p2 {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

const DivideLine = styled.hr`
  width: 650px;
  background-color: black;
  height: 0.1px;
  border: 0;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default About;
