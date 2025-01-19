import { createContext, useReducer } from "react";

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const postlistReducer = (currPostList, action) => {
  if (action.type === "DELETE POST") {
    const updatedPostList = currPostList.filter(
      (post) => post.id !== action.payload.postid
    );
    return updatedPostList;
  } else if (action.type === "ADD POST") {
    return [action.payload, ...currPostList];
  }
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(
    postlistReducer,
    DEFAULT_POST_LIST
  );
  const addPost = ({ userId, title, body, reactions, tags }) => {
    // console.log(userId, title, body, reactions, tags);
    dispatchPostList({
      type: "ADD POST",
      payload: {
        userId,
        title,
        body,
        reactions,
        tags,
      },
    });
  };
  const deletePost = (postid) => {
    dispatchPostList({ type: "DELETE POST", payload: { postid } });
  };
  return (
    <PostList.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to Mumbai",
    body: "Hi friends i am going to mumbai for my vacations do you want to join me",
    reaction: 2,
    userId: "USER-9",
    tags: ["vacation", "mumbai", "Mumbai", "enjoy"],
  },
  {
    id: 2,
    title: "went to pune",
    body: "passsss friends i am going to pune for my vacations do you want to join me",
    reaction: 12,
    userId: "USER-12",
    tags: ["vacation", "pune", "Pune", "enjoy"],
  },
];

export default PostListProvider;
