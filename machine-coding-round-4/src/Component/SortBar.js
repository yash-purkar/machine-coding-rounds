import { UseData } from "../Context/DataContext";

export const SortBar = () => {
  const { dataDispatch } = UseData();
  return (
    <div>
      <select
        onChange={(e) =>
          dataDispatch({ type: "SORT_BY", payload: e.target.value })
        }
      >
        <option value="latestPosts">Latest Posts</option>
        <option value="upvotedPosts">Most Upvoted</option>
      </select>
    </div>
  );
};
