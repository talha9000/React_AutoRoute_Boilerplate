// BlogPost.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function BlogPost() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const postId = queryParams.get('id');

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (postId) {
      // Fetch blog post data using postId
      // Assuming you have a function to fetch post data
      const post = fetchPostData(postId);
      setPost(post);
    }
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

// Function to fetch post data, you can replace it with your own implementation
function fetchPostData(postId) {
  // Dummy implementation, replace with actual API call
  const posts = {
    1: { id: 1, title: 'First Post', content: 'Content of the first post' },
    2: { id: 2, title: 'Second Post', content: 'Content of the second post' },
    // More posts...
  };

  return posts[postId];
}

export default BlogPost;
