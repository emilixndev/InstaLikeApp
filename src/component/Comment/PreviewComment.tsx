import { Instalike } from '@jmetterrothan/instalike';
import { BiTrash } from 'react-icons/all';

import useAppDispatch from '../../hooks/useAppDispatch';
import { deleteOneCommentPostAsync } from '../../redux/comment/thunks';

type PreviewCommentProps = {
  comment: Instalike.Comment;
};

const PreviewComment = ({ comment }: PreviewCommentProps) => {
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
      </div>
    </>
  );
};
export default PreviewComment;
