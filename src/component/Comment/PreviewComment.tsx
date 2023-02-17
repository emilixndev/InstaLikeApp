import { Instalike } from '@jmetterrothan/instalike';
import { comment } from 'postcss';
import { useEffect } from 'react';
import { BiTrash } from 'react-icons/all';
import { useDispatch } from 'react-redux';

import useAppDispatch from '../../hooks/useAppDispatch';
import { deleteCommentFeedAsync } from '../../redux/feed/thunks';
import { deleteCommmentAction } from '../../redux/post/action';
import { deleteCommentPostAsync } from '../../redux/post/thunks';

type PreviewCommentProps = {
  comment: Instalike.Comment;
  keyTab: number;
};

const PreviewComment = ({ comment, keyTab }: PreviewCommentProps) => {
  const refactorCommentText = (commentText: string) => {
    if (commentText.length >= 50) {
      return commentText.slice(0, 50) + '...'; //TODO Modifier ça si c'est pas dans le feeed
    }
    return commentText;
  };

  // const displayComment = (comment: Instalike.Comment, key: number) => {
  //   return (
  //     <div className="border-t rounded p-3 flex items-center">
  //       <img
  //         className="h-8  rounded-full"
  //         src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
  //       />
  //       <div className="ml-3 text-gray-400">{comment.owner.userName} </div>
  //       <div className="ml-2 text-gray-700">{refactorCommentText(comment.text)}</div>
  //       {comment.owner.isViewer && (
  //         <button
  //           className="ml-auto "
  //           onClick={() => {
  //             dispatch(deleteCommentPostAsync(comment.postId, comment.id, key));
  //           }}
  //         >
  //           <BiTrash style={{ color: 'red' }} />
  //         </button>
  //       )}
  //     </div>
  //   );
  // };

  const dispatch = useAppDispatch();
  return (
    <>
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
