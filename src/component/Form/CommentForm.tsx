import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import { BsEmojiLaughing } from 'react-icons/all';

import useAppDispatch from '../../hooks/useAppDispatch';
import { postNewCommentAsync } from '../../redux/comment/thunks';

type commentProps = {
  idPost: number;
};

const CommentForm = ({ idPost }: commentProps) => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const dispatch = useAppDispatch();
  const [comment, setComment] = useState('');
  return (
    <>
      <div className="flex justify-center ">
        <img
          className="h-8 w-8 rounded-full m-4"
          src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
          alt=""
        />
        <input
          type="text"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              dispatch(postNewCommentAsync(comment, idPost));
              setComment('');
            }
          }}
          className="border border-gray-400 p-2 w-full h-1/4 m-auto"
        ></input>
        <button
          onClick={() => {
            setPickerVisible(!isPickerVisible);
          }}
        >
          <BsEmojiLaughing className="h-8 w-8 m-3" />
        </button>
        {isPickerVisible && (
          <div className="relative">
            <div className="float-left absolute bottom-16 ">
              <EmojiPicker
                onEmojiClick={(emojiData) => {
                  setComment(comment + emojiData.emoji);

                  setPickerVisible(!isPickerVisible);
                }}
                autoFocusSearch={false}
              />
            </div>
          </div>
        )}
        <button
          onClick={() => {
            dispatch(postNewCommentAsync(comment, idPost));
            setComment('');
          }}
        >
          <div className="m-auto mr-2 cursor-pointer text-blue-700">Publier</div>
        </button>
      </div>
    </>
  );
};

export default CommentForm;
