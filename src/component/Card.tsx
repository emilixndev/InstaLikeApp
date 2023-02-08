import { Media } from '@jmetterrothan/instalike/dist/types/Instalike';
import { Resource } from 'i18next';
import { AiFillHeart, AiOutlineHeart, FaBeer, FaRegComment, FiSend } from 'react-icons/all';

type CardProps = {
  username: string;
  img: Media;
  likes: number;
  location?: string;

  caption?: string;

  isLiked: boolean;
};

const Card = ({ username, img, likes, location, caption, isLiked }: CardProps) => {
  return (
    <>
      <div className="flex justify-center mb-10">
        <div className="bg-white border rounded-sm max-w-md">
          <div className="flex items-center px-4 py-3">
            <img
              className="h-8 w-8 rounded-full"
              src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
            />
            <div className="ml-3 ">
              <span className="text-sm font-semibold antialiased block leading-tight">{username}</span>
              {location && <span className="text-gray-600 text-xs block">{location}</span>}
            </div>
          </div>
          <img src={img.src} width="500" height="400" />
          {caption && <p className="ml-3 text-gray-400">{caption}</p>}
          <div className="flex items-center justify-between mx-4 mt-3 mb-2">
            <div className="flex gap-3">
              {isLiked ? <AiFillHeart size={30} color="red" /> : <AiOutlineHeart size={30} />}
              <FaRegComment size={26} />
              <FiSend size={26} />
            </div>
            <div className="flex">
              <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
              </svg>
            </div>
          </div>
          <div className="font-semibold text-sm mx-4 mt-2 mb-4">{likes} likes</div>
        </div>
      </div>
    </>
  );
};

export default Card;
