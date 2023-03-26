import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosClose } from 'react-icons/all';
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
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    postData.id = -1;
  }, []);

  useEffect(() => {
    if (postData.id != -1) {
      setRedirect(true);
    }
  }, [postData.id]);
  const { t, i18n } = useTranslation();
  return (
    <>
      <Menu />
      <div className="max-w-[640px] mx-auto border border-black  p-8 mt-20">
        <p className="font-bold text-2xl text-center ">{t('addPost.title')}</p>
        <div className="flex justify-center flex-col  mt-4 ">
          <input
            type="file"
            accept="image/*"
            className="mx-auto mt-4"
            onChange={(event) => {
              if (event.target.files) {
                setSelectedImg(selectedImg.concat(event.target.files[0]));
              }
            }}
          />
          {selectedImg.length !== 0 && <div className="font-bold p-2">{t('addPost.imgSelected')} </div>}
          {selectedImg &&
            selectedImg.map((img, index) => {
              return (
                <div key={index} className="flex">
                  {img.name}
                  <button
                    onClick={() => {
                      const index = selectedImg.findIndex((imgSearch) => imgSearch === img);
                      setSelectedImg([...selectedImg.slice(0, index), ...selectedImg.slice(index + 1)]);
                      console.log(index);
                    }}
                  >
                    <IoIosClose size={25} color="red"></IoIosClose>
                  </button>
                </div>
              );
            })}
          <label className="flex flex-col mt-4 font-bold">
            Location :
            <input
              type="text"
              className="border border-gray-400 p-2 w-full font-normal"
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            />
          </label>
          <label className="flex flex-col mt-4 font-bold">
            Description :
            <textarea
              className="border border-gray-400 p-2 w-full font-normal"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </label>
          <button
            className="mt-4 border bg-blue-600 text-white w-fit p-2 rounded"
            onClick={(event) => {
              dispatch(addPostAsync(selectedImg, location, description, '', false));
            }}
          >
            {t('addPost.publish')}
          </button>
          {redirect && <Navigate to={'/post/' + postData.id} replace={true} />}
        </div>
      </div>
    </>
  );
};

export default AddPostView;
