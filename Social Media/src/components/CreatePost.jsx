import { useContext, useRef } from "react";
import { PostList } from "../store/posts-list-store";

const CreatePost = () => {
  const UserIdEl = useRef();
  const titleEl = useRef();
  const BodyEl = useRef();
  const reactionsEl = useRef();
  const tagsEl = useRef();
  const { addPost } = useContext(PostList);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = UserIdEl.current.value;
    const title = titleEl.current.value;
    const body = BodyEl.current.value;
    const reactions = reactionsEl.current.value;
    const tags = tagsEl.current.value.split(" ");
    addPost({ userId, title, body, reactions, tags });
    UserIdEl.current.value = "";
    titleEl.current.value = "";
    BodyEl.current.value = "";
    reactionsEl.current.value = "";
    tagsEl.current.value = "";
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="Userid" className="form-label">
          User Id
        </label>
        <input
          ref={UserIdEl}
          type="text"
          className="form-control"
          id="Userid"
          placeholder="Your user id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post title
        </label>
        <input
          ref={titleEl}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Body" className="form-label">
          Post content
        </label>
        <textarea
          rows={10}
          ref={BodyEl}
          className="form-control"
          id="Body"
          placeholder="Enter your post content here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          ref={reactionsEl}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          ref={tagsEl}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter tags separated by Space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
