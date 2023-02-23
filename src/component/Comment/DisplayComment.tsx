import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Instalike } from '@jmetterrothan/instalike';
import { BiTrash, TbDots, TbDotsCircleHorizontal, TbDotsVertical } from 'react-icons/all';

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
        <div className="ml-3">
          <span className="text-gray-400">{comment.owner.userName}</span> : {comment.text}
        </div>
        {comment.owner.isViewer && (
          <div className="ml-auto">
            <Menu>
              <MenuButton>
                <TbDots />
              </MenuButton>

              <MenuList>
                <MenuItem
                  color="red"
                  onClick={() => {
                    dispatch(deleteOneCommentPostAsync(comment));
                  }}
                >
                  Delete
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        )}
      </div>
    </>
  );
};
export default DisplayComment;
