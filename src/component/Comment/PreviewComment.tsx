import { Instalike } from '@jmetterrothan/instalike';
import { BiTrash } from 'react-icons/all';

import useAppDispatch from '../../hooks/useAppDispatch';
import { deleteCommentPostAsync } from '../../redux/post/thunks';

type PreviewCommentProps = {
  comment: Instalike.Comment;
  keyTab: number;

  isFeed: boolean;
};

const PreviewComment = ({ comment, keyTab, isFeed }: PreviewCommentProps) => {
  const refactorCommentText = (commentText: string) => {
    if (commentText.length >= 50) {
      return commentText.slice(0, 50) + '...'; //TODO Modifier ça si c'est pas dans le feeed
    }
    return commentText;
  };

  const dispatch = useAppDispatch();
  return (
    <>
      <div className="border-t rounded p-3 flex items-center">
        <img
          className="h-8  rounded-full"
          src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
        />
        <div className="ml-3 text-gray-400">{comment.owner.userName} : </div>
        <div className="ml-2 text-gray-700">{refactorCommentText(comment.text)}</div>
        {!isFeed && comment.owner.isViewer && (
          <button
            className="ml-auto "
            onClick={() => {
              dispatch(deleteCommentPostAsync(comment.postId, comment.id, keyTab));
            }}
          >
            <BiTrash style={{ color: 'red' }} />
          </button>
        )}
      </div>
    </>
  );
};
export default PreviewComment;
