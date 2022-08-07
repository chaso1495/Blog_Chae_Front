import React from "react";
import styled from "styled-components";
import "./App.css";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Leftcomp = () => {
  return (
    <LeftStyle>
      <LeftTitle>
        <Titlecontents />
      </LeftTitle>
      <Lefthr />
      <SnsIconsStyle>
        <SnsIcons />
      </SnsIconsStyle>
    </LeftStyle>
  );
};
// 파랑영역에 담길 것: 블로그 이름, 4개의 아이콘

const LeftStyle = styled.div`
  width: 100%;

  margin-bottom: 10px;
  bottom: 0;
  position: absolute;
`;
// 파랑색 영역에 담길 컴포넌트에 대한 기본적인 css 환경
// position 요소 복습

const LeftTitle = styled.div`
  width: 100%;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 15px;
  p {
    margin: 0px;

    color: white;
    font-size: 70px;
  }
`;
// margin 0px는 각각의 p의 상/하/좌/우에 공간이 들어감
// 블로그 이름이 나타날 공간에 대한 설정

const Titlecontents = () => {
  return (
    <>
      <p>Chae's</p>
      <p>Ground</p>
    </>
  );
};
// 블로그 이름

const Lefthr = styled.hr`
  width: 270px;
  height: 0.1px;
  margin-left: 40px;
`;
// 수평선 삽입인데 길이와 얇기 조절 스타일링

const SnsIconsStyle = styled.div`
  width: 300px;

  margin-left: 25px;
  margin-top: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
// SNS 아이콘이 담길 때 위치 및 정렬 방식 조정
// space-around는 각각의 아이콘들이 "같은 간격"을 가지도록
const SnsIcons = () => {
  return (
    <>
      <FontAwesomeIcon icon={faFacebook} color="white" />
      <FontAwesomeIcon icon={faGithub} color="white" />
      {/* <FontAwesomeIcon icon={faGooglePlay} color="white" /> */}
      <FontAwesomeIcon icon={faInstagram} color="white" />
    </>
  );
};
// SNS 아이콘 삽입, 아마 누르면 관련 sns 창이 열리는 기능도 생길수도?

export default Leftcomp;
