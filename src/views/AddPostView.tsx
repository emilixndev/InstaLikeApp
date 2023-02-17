import React, { useEffect, useState } from 'react';
import { Navigate, redirect } from 'react-router-dom';

import Menu from '../component/Menu';
import useAppDispatch from '../hooks/useAppDispatch';
import usePost from '../hooks/usePostItems';
import { addPostAsync } from '../redux/post/thunks';

const AddPostView = () => {
  const dispatch = useAppDispatch();
  const [selectedImg, setSelectedImg] = useState<File[]>([]);
  const postData = usePost().items;
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    postData.id = -1;
  }, []);

  useEffect(() => {
    if (postData.id != -1) {
      setRedirect(true);
    }
  }, [postData.id]);

  return (
    <>
      <Menu />
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(event) => {
            if (event.target.files) {
              setSelectedImg(selectedImg.concat(event.target.files[0])); //TODO REPLACE l'IMG
            }
          }}
        />

        <button
          onClick={(event) => {
            console.log(selectedImg);
            dispatch(addPostAsync(selectedImg, '', '', '', false));
          }}
        >
          test
        </button>
        {redirect && <Navigate to={'/post/' + postData.id} replace={true} />}
      </div>
    </>
  );
};

export default AddPostView;
