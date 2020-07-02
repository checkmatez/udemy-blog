import * as React from 'react';
import axios from 'axios';

export const PostCreate = () => {
  const [title, setTitle] = React.useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('http://posts.com/posts/create', { title });

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
