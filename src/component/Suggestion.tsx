import { AiOutlinePlus } from 'react-icons/all';

type suggestionProps = {
  username: string;
};

const Suggestion = ({ username }: suggestionProps) => {
  return (
    <>
      <li className="flex flex-col items-center">
        <div className="relative p-3">
          <div className="rounded-full overflow-hidden w-24 h-24">
            <img src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg" alt="" />
          </div>
          <button className="px-2 py-[7px] text-2xl rounded-full bg-gray-300 flex items-center justify-center absolute right-1 bottom-2">
            <AiOutlinePlus />
          </button>
        </div>
        <p className="mt-2">{username}</p>
      </li>

      {/*<div className="text-center ml-2">*/}
      {/*  <img*/}
      {/*    className="h-20 w-20 rounded-full ml-5 "*/}
      {/*    src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"*/}
      {/*  />*/}
      {/*  {username}*/}
      {/*</div>*/}
    </>
  );
};

export default Suggestion;
