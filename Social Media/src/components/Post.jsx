import { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { PostList } from "../store/posts-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card postcard">
      <div className="card-body">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <MdDeleteSweep onClick={() => deletePost(post.id)} />
          <span className="visually-hidden">unread messages</span>
        </span>

        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>

        {post.tags.map((tag, index) => (
          <span key={index} className="badge rounded-pill bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-info reactions" role="alert">
          This post has been reacte by {post.reaction} people
        </div>

        {/* <a href="#" className="btn btn-primary">{post.reaction}</a> */}
      </div>
    </div>
  );
};
export default Post;
