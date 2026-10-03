import useFetch from "../hooks/useFetch";

function Posts() {
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="demo-card">
      <h3>useEffect + Custom useFetch Hook</h3>

      <p>
        Posts are fetched from an API using the custom useFetch hook.
      </p>

      {loading && (
        <p className="status">Loading posts...</p>
      )}

      {error && (
        <p className="error">Error: {error}</p>
      )}

      {posts && (
        <div className="posts-container">
          {posts.slice(0, 5).map((post) => (
            <div className="post-item" key={post.id}>
              <strong>
                {post.id}. {post.title}
              </strong>

              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
