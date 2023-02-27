import { Instalike } from '@jmetterrothan/instalike';
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/all';

import useAppDispatch from '../hooks/useAppDispatch';
import { followUserSuggestionAsync, unfollowUserSuggestionAsync } from '../redux/suggestion/thunks';

type suggestionProps = {
  user: Instalike.User;
};

const Suggestion = ({ user }: suggestionProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <li className="flex flex-col items-center">
        <div className="relative p-3">
          <div className="rounded-full overflow-hidden w-24 h-24">
            <img src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg" alt="" />
          </div>

          {user.isFollowedByViewer ? (
            <button
              className="px-2 py-[7px] text-2xl rounded-full bg-gray-300 flex items-center justify-center absolute right-1 bottom-2"
              onClick={() => {
                dispatch(unfollowUserSuggestionAsync(user));
              }}
            >
              <AiOutlineCheck />
            </button>
          ) : (
            <button
              className="px-2 py-[7px] text-2xl rounded-full bg-gray-300 flex items-center justify-center absolute right-1 bottom-2"
              onClick={() => {
                dispatch(followUserSuggestionAsync(user));
              }}
            >
              <AiOutlinePlus />
            </button>
          )}
        </div>
        <p className="mt-2">{user.userName}</p>
      </li>
    </>
  );
};

export default Suggestion;
