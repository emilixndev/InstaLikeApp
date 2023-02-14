import { Instalike } from '@jmetterrothan/instalike';
import { Media } from '@jmetterrothan/instalike/dist/types/Instalike';
import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart, FaRegComment, FiSend, MdOutlineWhereToVote } from 'react-icons/all';
import { Navigate } from 'react-router-dom';

import useAppDispatch from '../hooks/useAppDispatch';
import { likepostAsync, unlikePostAsync } from '../redux/feed/thunks';
import PreviewComment from './Comment/PreviewComment';

type CardProps = {
  postid: number;
  username: string;
  img: Media;
  likes: number;
  location?: string;

  caption?: string;

  isLiked: boolean;

  previewdComments: Instalike.Comment[];

  date: string;

  canCommment: boolean;
};

const Card = ({
  postid,
  username,
  img,
  likes,
  location,
  caption,
  isLiked,
  previewdComments,
  date,
  canCommment,
}: CardProps) => {
  const dispatch = useAppDispatch();
  const [navigateToPost, setnavigateToPost] = useState(false);
  const displayPreviewComments = () => {
    if (previewdComments.length !== 0) {
      return <PreviewComment comments={previewdComments}></PreviewComment>;
    }
  };
  const getDays = () => {
    const today = new Date();
    const createdOn = new Date(date);
    const msInDay = 24 * 60 * 60 * 1000;

    createdOn.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diff = (+today - +createdOn) / msInDay;
    return diff;
  };

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
              <div className="flex ">
                {location && (
                  <div className="flex">
                    <span className="text-gray-600 text-xs block ">{location}</span>
                    <MdOutlineWhereToVote className="mr-3" />
                  </div>
                )}
                <div className="text-sm font-semibold antialiased block leading-tight text-xs text-gray-600  ">
                  {getDays()} days ago
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setnavigateToPost(true);
            }}
          >
            <img src={img.src} width="500" height="400" />
          </button>
          {caption && <p className="ml-3 text-gray-400">{caption}</p>}
          <div className="flex items-center justify-between mx-4 mt-3 mb-2">
            <div className="flex gap-3">
              {isLiked ? (
                <button
                  onClick={() => {
                    dispatch(unlikePostAsync(postid));
                  }}
                >
                  <AiFillHeart size={30} color="red" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(likepostAsync(postid));
                  }}
                >
                  <AiOutlineHeart size={30} />
                </button>
              )}
              <button
                onClick={() => {
                  setnavigateToPost(true);
                }}
              >
                <FaRegComment size={26} />
              </button>
              <FiSend size={26} />
            </div>
            <div className="flex">
              <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
              </svg>
            </div>
          </div>
          <div className="font-semibold text-sm mx-4 mt-2 mb-4">{likes} likes</div>

          {}
          {/*{displayommentForm()}*/}
          {displayPreviewComments()}
          {navigateToPost && <Navigate to={'/post/' + postid} />}
        </div>
      </div>
    </>
  );
};

export default Card;
