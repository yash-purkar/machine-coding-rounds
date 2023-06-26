import { NavLink, useParams } from "react-router-dom";
import { SinglePost } from "../Component/SinglePost";
import { UseData } from "../Context/DataContext";

export const PostDetail = () => {
  const { postId } = useParams();
  console.log(postId);
  const {
    dataState: {
      data: { posts }
    }
  } = UseData();
  const foundPost = posts?.find((el) => el?.postId === postId);
  console.log(foundPost);
  return (
    <>
      <SinglePost post={foundPost} details />
      <p className="go-home">
        <NavLink to="/">Go To Home</NavLink>
      </p>
    </>
  );
};
