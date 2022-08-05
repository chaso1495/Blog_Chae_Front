import { useParams } from "react-router-dom";

const PostView = () => {
  const params = useParams();

  return (
    <div>
      <p> PostView 페이지 입니다. </p>
      <p> {params.postID} 포스팅을 읽고 있습니다. </p>
    </div>
  );
};

export default PostView;
