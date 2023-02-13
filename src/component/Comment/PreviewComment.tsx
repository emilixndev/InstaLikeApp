import { Instalike } from '@jmetterrothan/instalike';
import { comment } from 'postcss';
import { BiTrash } from 'react-icons/all';
import { useDispatch } from 'react-redux';

import useAppDispatch from '../../hooks/useAppDispatch';
import { deleteCommentFeedAsync } from '../../redux/feed/thunks';

type PreviewCommentProps = {
  comments: Instalike.Comment[];
};

const PreviewComment = ({ comments }: PreviewCommentProps) => {
  const refactorCommentText = (commentText: string) => {
    if (commentText.length >= 50) {
      return commentText.slice(0, 50) + '...';
    }
    return commentText;
  };

  const displayComment = (comment: Instalike.Comment) => {
    return (
      <div className="border-t rounded p-3 flex items-center">
        <img
          className="h-8  rounded-full"
          src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
        />
        <div className="ml-3 text-gray-400">{comment.owner.userName} </div>
        <div className="ml-2 text-gray-700">{refactorCommentText(comment.text)}</div>
        {comment.owner.isViewer && (
          <button
            className="ml-auto "
            onClick={() => {
              dispatch(deleteCommentFeedAsync(comment.postId, comment.id));
            }}
          >
            <BiTrash style={{ color: 'red' }} />
          </button>
        )}
      </div>
    );
  };

  const dispatch = useAppDispatch();
  return (
    <>
      {comments.map((comment) => {
        {
          if (comment.text !== '') {
            return displayComment(comment);
          }
        }
      })}
    </>
  );
};
export default PreviewComment;
