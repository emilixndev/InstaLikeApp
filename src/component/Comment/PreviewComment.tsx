import { Instalike } from '@jmetterrothan/instalike';

import useAppDispatch from '../../hooks/useAppDispatch';

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

  return (
    <>
      <div className=" p-3 flex items-center">
        <img
          className="h-8  rounded-full"
          src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
          alt=""
        />
        <div className="ml-3">
          <span className="text-gray-400">{comment.owner.userName}</span> : {comment.text}
        </div>
      </div>
    </>
  );
};
export default PreviewComment;
