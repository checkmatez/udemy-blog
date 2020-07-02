import * as React from 'react';
import axios from 'axios';

interface CommentListProps {
  comments: any[];
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  const renderedComments = comments.map((c: any) => {
    let content = c.content;
    if (c.status === 'pending') {
      content = 'awaiting moderation';
    } else if (c.status === 'rejected') {
      content = 'comment rejected';
    }

    return <li key={c.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
