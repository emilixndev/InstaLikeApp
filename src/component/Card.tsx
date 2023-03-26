import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Instalike } from '@jmetterrothan/instalike';
import { Media } from '@jmetterrothan/instalike/src/instalike';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegComment, FiSend, MdOutlineWhereToVote, TbDotsVertical } from 'react-icons/all';
import { Navigate } from 'react-router-dom';

import useAppDispatch from '../hooks/useAppDispatch';
import useComments from '../hooks/useCommentItems';
import { fetchCommentAsync } from '../redux/comment/thunks';
import {
  followUserFeedAsync,
  likepostFeedAsync,
  unfollowUserFeedAsync,
  unlikePostFeedAsync,
} from '../redux/feed/thunks';
import { followUserPostAction } from '../redux/post/action';
import {
  addLikePostAsync,
  deleteLikePostAsync,
  deletePostAsync,
  followUserPostAsync,
  unfollowUserPostAsync,
} from '../redux/post/thunks';
import DisplayComment from './Comment/DisplayComment';
import PreviewComment from './Comment/PreviewComment';
import CommentForm from './Form/CommentForm';

type CardProps = {
  post: Instalike.Post;

  canCommment: boolean;
  inFeed: boolean;
};

const Card = ({ post, canCommment, inFeed }: CardProps) => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const [navigateToPost, setnavigateToPost] = useState(false);

  const getDays = () => {
    const today = new Date();
    const createdOn = new Date(post.createdAt);
    const msInDay = 24 * 60 * 60 * 1000;

    createdOn.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diff = (+today - +createdOn) / msInDay;
    return diff;
  };

  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const displayCommentForm = () => {
    return <CommentForm idPost={post.id} key={post.id}></CommentForm>;
  };
  const [hasClicked, setHasClicked] = useState(post.viewerHasLiked);
  const comments = useComments();

  useEffect(() => {
    return () => {
      dispatch(fetchCommentAsync(post.id, null));
    };
  }, [dispatch, post.id]);

  return (
    <>
      {post.id === -1 && <Navigate to="feed" replace={true} />}
      <div className="flex justify-center mb-10 mt-12">
        <div className="bg-white border rounded-sm w-[640px] ">
          <div className="flex items-center  mx-auto flex  justify-between px-4 py-3">
            <img
              className="h-8 w-8 rounded-full"
              src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
              alt=""
            />
            <div className="ml-3 ">
              <span className="text-sm font-semibold antialiased block leading-tight">{post.owner.userName}</span>
              <div className="flex ">
                {location && (
                  <div className="flex">
                    <MdOutlineWhereToVote />
                    <span className="text-gray-600 text-xs block ">{post.location}</span>
                  </div>
                )}
              </div>
              <div>
                <div className="text-sm font-semibold antialiased block leading-tight text-xs text-gray-600  ">
                  {getDays()} {t('card.day')}
                </div>
              </div>
            </div>
            {!post.owner.isFollowedByViewer && !post.owner.isViewer && (
              <div className="ml-3">
                <Button
                  onClick={() => {
                    if (inFeed) {
                      dispatch(followUserFeedAsync(post.id, post.owner.id));
                    } else {
                      dispatch(followUserPostAsync(post.owner.id));
                    }
                  }}
                >
                  {t('actions.follow')}
                </Button>
              </div>
            )}

            <div className="w-96"></div>
            <div className="flex">
              <Menu>
                <MenuButton>
                  <TbDotsVertical />
                </MenuButton>

                <MenuList>
                  {post.owner.isViewer && (
                    <MenuItem
                      color="red"
                      onClick={() => {
                        dispatch(deletePostAsync(post.id));
                      }}
                    >
                      {t('action.delete')}
                    </MenuItem>
                  )}

                  {post.owner.isFollowedByViewer ? (
                    <MenuItem
                      color="red"
                      onClick={() => {
                        if (inFeed) {
                          dispatch(unfollowUserFeedAsync(post.id, post.owner.id));
                        } else {
                          dispatch(unfollowUserPostAsync(post.owner.id));
                        }
                      }}
                    >
                      {t('action.unfollow')}
                    </MenuItem>
                  ) : (
                    !post.owner.isViewer && (
                      <MenuItem
                        color="blue"
                        onClick={() => {
                          if (inFeed) {
                            dispatch(followUserFeedAsync(post.id, post.owner.id));
                          } else {
                            dispatch(followUserPostAsync(post.owner.id));
                          }
                        }}
                      >
                        {t('action.follow')}
                      </MenuItem>
                    )
                  )}
                  {inFeed && (
                    <MenuItem
                      onClick={() => {
                        setnavigateToPost(true);
                      }}
                    >
                      {t('action.seePub')}
                    </MenuItem>
                  )}
                  <MenuItem
                    onClick={() => {
                      copyTextToClipboard(window.location.origin.toString() + '/post/' + post.id);
                    }}
                  >
                    {t('action.copyL')}
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
          <button
            onDoubleClick={() => {
              if (inFeed) {
                if (post.viewerHasLiked) {
                  dispatch(unlikePostFeedAsync(post.id));
                  setHasClicked(false);
                } else {
                  dispatch(likepostFeedAsync(post.id));
                  setHasClicked(true);
                }
              } else {
                if (post.viewerHasLiked) {
                  dispatch(deleteLikePostAsync(post.id));
                  setHasClicked(false);
                } else {
                  dispatch(addLikePostAsync(post.id));
                  setHasClicked(true);
                }
              }
            }}
          >
            <img src={post.resources[0].src} width="640" height="400" alt="" />
          </button>
          {post.caption && <p className="ml-3 text-gray-400">{post.caption}</p>}
          <div className="flex items-center justify-between mx-4 mt-3 mb-2">
            <div className="flex gap-3">
              <div>
                <motion.div
                  whileTap={{ scale: 5 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => {
                    if (hasClicked) {
                      if (inFeed) {
                        dispatch(unlikePostFeedAsync(post.id));
                      } else {
                        dispatch(deleteLikePostAsync(post.id));
                      }
                    } else {
                      if (inFeed) {
                        dispatch(likepostFeedAsync(post.id));
                      } else {
                        dispatch(addLikePostAsync(post.id));
                      }
                    }

                    setHasClicked(!hasClicked);
                  }}
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <svg viewBox="0 0 16 16" width="26" height="26">
                    {!hasClicked && (
                      // https://primer.style/octicons-v2/heart-16
                      <path
                        fill="black"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.25 2.5C2.91421 2.5 1.5 3.66421 1.5 5.5C1.5 7.64969 3.08041 9.64375 4.8647 11.1819C5.73533 11.9325 6.60962 12.5358 7.26796 12.952C7.56407 13.1392 7.81492 13.2875 8 13.3934C8.18508 13.2875 8.43593 13.1392 8.73204 12.952C9.39039 12.5358 10.2647 11.9325 11.1353 11.1819C12.9196 9.64375 14.5 7.64969 14.5 5.5C14.5 3.66421 13.0858 2.5 11.75 2.5C10.3768 2.5 9.14121 3.48581 8.72114 4.95604C8.62915 5.27802 8.33486 5.5 8 5.5C7.66514 5.5 7.37085 5.27802 7.27886 4.95604C6.85879 3.48581 5.62319 2.5 4.25 2.5ZM8 14.25C7.65543 14.9162 7.65523 14.9161 7.655 14.9159L7.65269 14.9147L7.64731 14.9119L7.62883 14.9022C7.61313 14.8939 7.59074 14.882 7.5621 14.8665C7.50484 14.8356 7.42254 14.7904 7.3188 14.7317C7.1114 14.6142 6.81771 14.442 6.46642 14.2199C5.76538 13.7767 4.82717 13.13 3.8853 12.3181C2.04459 10.7312 0 8.35031 0 5.5C0 2.83579 2.08579 1 4.25 1C5.79736 1 7.15289 1.80151 8 3.01995C8.84711 1.80151 10.2026 1 11.75 1C13.9142 1 16 2.83579 16 5.5C16 8.35031 13.9554 10.7312 12.1147 12.3181C11.1728 13.13 10.2346 13.7767 9.53358 14.2199C9.18229 14.442 8.8886 14.6142 8.6812 14.7317C8.57746 14.7904 8.49517 14.8356 8.4379 14.8665C8.40926 14.882 8.38687 14.8939 8.37117 14.9022L8.35269 14.9119L8.34731 14.9147L8.34501 14.9159C8.34477 14.9161 8.34457 14.9162 8 14.25ZM8 14.25L8.34501 14.9159C8.12889 15.0277 7.87111 15.0277 7.655 14.9159L8 14.25Z"
                      />
                    )}
                    {hasClicked && (
                      <path
                        fill="red"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.655 14.9159C7.65523 14.9161 7.65543 14.9162 8 14.25C8.34457 14.9162 8.34477 14.9161 8.34501 14.9159C8.12889 15.0277 7.87111 15.0277 7.655 14.9159ZM7.655 14.9159L8 14.25L8.34501 14.9159L8.34731 14.9147L8.35269 14.9119L8.37117 14.9022C8.38687 14.8939 8.40926 14.882 8.4379 14.8665C8.49516 14.8356 8.57746 14.7904 8.6812 14.7317C8.8886 14.6142 9.18229 14.442 9.53358 14.2199C10.2346 13.7767 11.1728 13.13 12.1147 12.3181C13.9554 10.7312 16 8.35031 16 5.5C16 2.83579 13.9142 1 11.75 1C10.2026 1 8.84711 1.80151 8 3.01995C7.15289 1.80151 5.79736 1 4.25 1C2.08579 1 0 2.83579 0 5.5C0 8.35031 2.04459 10.7312 3.8853 12.3181C4.82717 13.13 5.76538 13.7767 6.46642 14.2199C6.81771 14.442 7.1114 14.6142 7.3188 14.7317C7.42254 14.7904 7.50484 14.8356 7.5621 14.8665C7.59074 14.882 7.61313 14.8939 7.62883 14.9022L7.64731 14.9119L7.65269 14.9147L7.655 14.9159Z"
                      />
                    )}
                  </svg>
                </motion.div>
              </div>

              <button
                onClick={() => {
                  if (inFeed) {
                    setnavigateToPost(true);
                  }
                }}
              >
                <FaRegComment size={26} />
              </button>
              <FiSend size={26} />
            </div>
          </div>
          <div className="font-semibold text-sm mx-4 mt-2 mb-2">
            {post.likesCount} {t('card.likes')} | {post.commentsCount} {t('card.comments')}
          </div>
          <div className="h-[0.10rem] w-full bg-gray-300 "></div>
          {canCommment && displayCommentForm()}
          {inFeed &&
            post.previewComments.map((comment) => {
              return <PreviewComment comment={comment} key={comment.id}></PreviewComment>;
            })}
          {!inFeed &&
            comments.data.data.map((comment) => {
              return <DisplayComment comment={comment} key={comment.id}></DisplayComment>;
            })}
          {!inFeed && comments.data.hasMorePage && (
            <div className="text-center text-blue-500 font-bold">
              <button
                onClick={() => {
                  dispatch(fetchCommentAsync(post.id, comments.data.nextCursor));
                }}
              >
                {t('card.loadComments')}
              </button>
            </div>
          )}
          {navigateToPost && <Navigate to={'/post/' + post.id} />}
        </div>
      </div>
    </>
  );
};

export default Card;
