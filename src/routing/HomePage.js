import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostsList from '../components/PostsList'

function HomePage() {
  useEffect(() => {
    // @TODO - fetching post blogs from the server...
    //
    // @HINT - once we got the data, it's maybe time to provoke a rerender...
  });
  // pay attention on how to use carefully useEffect, don't hesitate to log !

  return (
    <>
      <h1>Blog posts</h1>
      <p>...</p>
      <PostsList/>
    </>
  );
}

export default HomePage;
