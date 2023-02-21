import { Instalike } from '@jmetterrothan/instalike';
import { BiTrash } from 'react-icons/all';

import useAppDispatch from '../../hooks/useAppDispatch';
import { deleteOneCommentPostAsync } from '../../redux/comment/thunks';

type PreviewCommentProps = {
  comment: Instalike.Comment;
};

const DisplayComment = ({ comment }: PreviewCommentProps) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className=" rounded p-3 flex items-center">
        <img
          className="h-8  rounded-full"
          src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
          alt=""
        />
        <div className="ml-3 text-gray-400">{comment.owner.userName} : </div>
        <div className="ml-2 text-gray-700">{comment.text}</div>
        {comment.owner.isViewer && (
          <button
            className="ml-auto "
            onClick={() => {
              dispatch(deleteOneCommentPostAsync(comment));
            }}
          >
            <BiTrash style={{ color: 'red' }} />
          </button>
        )}
      </div>
    </>
  );
};
export default DisplayComment;
