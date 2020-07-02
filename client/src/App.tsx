import React from 'react';
import { PostCreate } from './post-create';
import { PostList } from './post-list';

export const App = () => {
  return (
    <div className="container">
      <h1>Create post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};
