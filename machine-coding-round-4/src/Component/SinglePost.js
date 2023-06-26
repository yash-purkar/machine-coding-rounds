import { NavLink, useNavigate } from "react-router-dom";
import { UseData } from "../Context/DataContext";
import "../CSS/SinglePost.css";
import { BiUpArrow, BiDownArrow, BiCommentDots } from "react-icons/bi";
import { AiOutlineShareAlt, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

export const SinglePost = ({ post, details }) => {
  const {
    dataState: { bookmarks },
    dataDispatch
  } = UseData();
  const navigate = useNavigate();

  const upvote = (postId) => {
    dataDispatch({ type: "UPVOTE", payload: postId });
  };

  const downvote = (postId) => {
    dataDispatch({ type: "DOWNVOTE", payload: postId });
  };

  const bookmarkClick = (postId) => {
    dataDispatch({ type: "BOOKMARK_OPERATION", payload: postId });
  };

  const commentClick = (postId) => {
    navigate(`/post/${postId}`);
  };
  return (
    <div className="flex card">
      <div className="upvote-downvote">
        <p
          onClick={() => upvote(post?.postId)}
          className={`cursor-pointer upvote ${
            post?.upvotes > post?.downvotes && "active-vote"
          }`}
        >
          {/* <BiSolidUpvote /> */}
          <BiUpArrow />
        </p>
        <p>
          {post?.upvotes > post?.downvotes
            ? post?.upvotes
            : `-${post?.downvotes}`}
        </p>
        <p
          onClick={() => downvote(post?.postId)}
          role="img"
          className={`cursor-pointer downvote ${
            post?.upvotes < post?.downvotes && "active-vote"
          }`}
        >
          <BiDownArrow />
        </p>
      </div>
      <div>
        <div className="flex user-info">
          <img />
          <small>Posted By</small>
          <p>@{post?.username}</p>
          <small>1m</small>
        </div>

        <h4 className="title">Join Invact for MBA</h4>

        <div className="tag-box">
          {post?.tags.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
        <p className="post-text">{post?.postDescription}</p>

        <hr />

        <div className="flex justify-between">
          <span
            onClick={() => commentClick(post?.postId)}
            className="cursor-pointer"
          >
            <BiCommentDots />
          </span>
          <span>
            <AiOutlineShareAlt />
          </span>
          <span
            onClick={() => bookmarkClick(post?.postId)}
            className="cursor-pointer"
          >
            {bookmarks?.some((item) => item === post?.postId) ? (
              <BsFillBookmarkFill />
            ) : (
              <BsBookmark />
            )}
          </span>
        </div>

        {details && (
          <div className="comment-box">
            {post?.comments?.map(
              ({ commentId, username, picUrl, likes, comment }) => {
                return (
                  <div>
                    <div></div>
                    <div>
                      <div className="flex">
                        <p>@{username}</p>
                        <p>1m</p>
                      </div>
                      <p>Replying to @{post.username}</p>
                      <p>{comment}</p>
                      <div className="flex justify-between">
                        <span>
                          <AiOutlineHeart />
                        </span>
                        <span>
                          <BiCommentDots />
                        </span>
                        <span>
                          <AiOutlineShareAlt />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        )}
      </div>
    </div>
  );
};
