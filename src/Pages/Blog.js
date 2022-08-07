import React from "react";
import styled from "styled-components";
import Header from "../Main";
const Title = "Synology Docker 컨테이너 복원 시 오류 해결방법";
const Date = "June 24, 2022";
const Tag = "#Docker";

const Blog = () => {
  return (
    <RightBase>
      <TopPostContainer></TopPostContainer>
      <RightDivideLine />
      <BottomPostContainer></BottomPostContainer>
    </RightBase>
  );
};

const RightDivideLine = styled.hr`
  width: 1000px;
  border: 1;
  background-color: black;
  height: 1px;
`; // 오른쪽 가운데 선
// 다음시간에 border와 height의 차이(수평선) 메모해오기

const RightBase = styled.div`
  width: 1000px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`; // 오른쪽 기초 레이아웃 잡아주기
// flex-wrap: 자식 컴포넌트가 기본 축을 따라다가
// 컴포넌트의 크기를 초과한 경우 대처법을 설정해줌.
// wrap은 초과할 경우 줄바꿈을 해버리겠다는 의미.
// justify-content는 아이템들의 정렬을 결정
// space-between은 그 '사이'에 균일한 간격을 생성

const TopPostContainer = () => {
  const Toparr = [];
  for (var i = 0; i < 4; i++) {
    Toparr.push(<TopPost></TopPost>);
  }
  return Toparr;
}; // 오른쪽 수평선 위 게시물 영역, for문을 통해 화면에 드러냄.

const TopPost = () => {
  const postTitle = Title;
  const postDate = Date;
  const postTag = Tag;
  return (
    <TopPostObjectContainer>
      <TopImageContainer>
        <PostImage src="Synology_Docker.png"></PostImage>
      </TopImageContainer>

      <TopPostTextContainer>
        <PostTextTitle>{postTitle}</PostTextTitle>
        <PostTextDate>{postDate}</PostTextDate>
        <PostTextTag>{postTag}</PostTextTag>
      </TopPostTextContainer>
    </TopPostObjectContainer>
  );
}; // 게시물 하나 객체

const BottomPostContainer = () => {
  const BottomArr = [];
  for (var i = 0; i < 4; i++) {
    BottomArr.push(<BottomPost></BottomPost>);
  }
  return BottomArr;
}; // 오른쪽 수평선 위 게시물 영역, for문을 통해 화면에 드러냄.

const BottomPost = () => {
  const postTitle = Title;
  const postDate = Date;
  const postTag = Tag;
  return (
    <BottomPostObjectContainer>
      <BottomImageContainer>
        <PostImage src="Synology_Docker.png"></PostImage>
      </BottomImageContainer>

      <BottomPostTextContainer>
        <PostTextTitle>{postTitle}</PostTextTitle>
        <PostTextDate>{postDate}</PostTextDate>
        <PostTextTag>{postTag}</PostTextTag>
      </BottomPostTextContainer>
    </BottomPostObjectContainer>
  );
}; // 오른쪽 아래 게시물 하나에 해당하는 객체

const PostImage = styled.img`
  height: 100%;
  width: 100%;
`; // 이미지 태그의 기본적 설정, 주어진 영역을 모두 채움

const TopPostTextContainer = styled.div`
  height: 150px;
  width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: left;

  p {
    margin-left: 10px;
    margin-right: 10px;

    text-align: left;
  }
  padding-left: 10px;
  padding-right: 10px;
`; // text들이 담길 공간에 대한 기본적인 설정

const BottomPostTextContainer = styled.div`
  height: 150px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  p {
    margin-left: 10px;
    margin-right: 10px;
    text-align: left;
  }
`;

const PostTextTitle = styled.p`
  height: 40px;

  color: #108fb8;
  font-size: 20px;
  font-weight: 500;
`; // 제목 text의 위치, 색, 두께

const PostTextTag = styled.p`
  margin-bottom: 10px;
  margin-top: 10px;
  color: black;
`; // Tag text의 위치, 색

const PostTextDate = styled.p`
  margin-bottom: 0px;
  margin-top: 15px;
  color: black;
`; // Date text의 위치, 색

const TopImageContainer = styled.div`
  height: 150px;
  width: 150px;
`; // 위 게시물들의 이미지의 크기 지정

const BottomImageContainer = styled.div`
  height: 300px;
  width: 300px;
`; // 아래 게시물들의 이미지의 크기 지정

const TopPostObjectContainer = styled.div`
  height: 150px;
  width: 500px;
  display: flex;
  flex-direction: row;
`; // 위 게시물들이 들어갈 공간의 위치
// 그리고 내부 컴포넌트들의 정렬 방식을 flew/row로
// 처리하면서 사진 오른쪽에 text들이 서있도록 함.

const BottomPostObjectContainer = styled.div`
  height: 450px;
  width: 300px;
  display: flex;
  flex-direction: column;
`; // 아래 게시물들이 들어갈 공간(Conatiner)의 위치를 지정

// 공부해야할 보완사항
// margin과 padding의 차이, display 관련 설정
// props로 인자를 받는 동적 상태로 바뀌면 어쩌지?

export default Blog;
