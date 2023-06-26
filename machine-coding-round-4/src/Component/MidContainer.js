import { useNavigate } from "react-router-dom";
import { UseData } from "../Context/DataContext";
import "../CSS/MidContainer.css";
import { SinglePost } from "./SinglePost";
export const MidContainer = () => {
  const {
    dataState: { data, bookmarks, sortBy },
    dataDispatch
  } = UseData();

  const fitleredData = sortBy
    ? [...data?.posts]?.sort((a, b) =>
        sortBy === "upvotedPosts"
          ? b.upvotes - a.upvotes
          : new Date(b.createdAt) - new Date(a.createdAt)
      )
    : data?.posts;

  return (
    <div>
      <div className="mid-container">
        {fitleredData?.map((post) => {
          return <SinglePost post={post} key={post?.postId} />;
        })}
      </div>
    </div>
  );
};
