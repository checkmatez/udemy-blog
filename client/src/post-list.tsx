import * as React from 'react';
import axios from 'axios';
import { CommentCreate } from './comment-create';
import { CommentList } from './comment-list';

export const PostList = () => {
  const [posts, setPosts] = React.useState({});

  const fetchPosts = async () => {
    const response = await axios('http://posts.com/posts');
    setPosts(response.data);
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((p: any) => (
    <div className="card" key={p.id} style={{ width: '30%', marginBottom: '20px' }}>
      <div className="card-body">
        <h3>{p.title}</h3>
        <CommentList comments={p.comments} />
        <CommentCreate postId={p.id} />
      </div>
    </div>
  ));

  return <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>;
};
