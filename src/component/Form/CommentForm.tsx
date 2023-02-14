import EmojiPicker, { Emoji } from 'emoji-picker-react';
import { useState } from 'react';
import { BsEmojiLaughing } from 'react-icons/all';

const CommentForm = () => {
  const [isPickerVisible, setPickerVisible] = useState(false);

  const [comment, setComment] = useState('');
  return (
    <>
      <div className="flex justify-center ">
        <img
          className="h-8 w-8 rounded-full m-4"
          src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
        />
        <input
          type="text"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
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
          <div className="float-left absolute">
            <EmojiPicker
              onEmojiClick={(emojiData) => {
                setComment(comment + emojiData.emoji);

                setPickerVisible(!isPickerVisible);
              }}
            />
          </div>
        )}
        <div className="m-auto mr-2 cursor-pointer text-blue-700">Publier</div>
      </div>
    </>
  );
};

export default CommentForm;
