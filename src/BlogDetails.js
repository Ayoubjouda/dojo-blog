import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router";

const BlogDetails = () => {
  const clickhandler = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "Delete",
    }).then(() => {
      history.push("/");
    });
  };

  const { id } = useParams();
  const {
    error,
    isPending,
    data: blog,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();
  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p> Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={clickhandler}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
