import * as React from 'react';
import axios from 'axios';

interface CommentCreateProps {
  postId: string;
}

export const CommentCreate: React.FC<CommentCreateProps> = ({ postId }) => {
  const [content, setContent] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post(`http://posts.com/posts/${postId}/comments`, { content });
    setContent('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
