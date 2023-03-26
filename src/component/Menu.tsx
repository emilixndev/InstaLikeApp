import { MenuButton, MenuItem, MenuList, Menu as Menuc } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineHome, BiCompass, IoMdAddCircleOutline, RiAccountCircleLine, TbDotsVertical } from 'react-icons/all';
import { Link } from 'react-router-dom';

import useAppDispatch from '../hooks/useAppDispatch';
import { ACCESS_TOKEN_KEY } from '../instalikeApi';
import { logoutAsync } from '../redux/auth/thunks';

const Menu = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="border-b-[0.8px]">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 py-2 h-16">
          <Link to="/feed">
            <h1 className="font-['Billabong'] text-[44px]">Instalike</h1>{' '}
          </Link>
          <nav className="flex gap-5">
            <Link to="/feed">
              <AiOutlineHome size={30}></AiOutlineHome>
            </Link>
            <Link to="/discover">
              <BiCompass size={30}> </BiCompass>
            </Link>
            <Link to="/addPost">
              <IoMdAddCircleOutline size={30}></IoMdAddCircleOutline>
            </Link>
            <Menuc>
              <MenuButton>
                <RiAccountCircleLine size={30}></RiAccountCircleLine>
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    if (window.localStorage.getItem('i18nextLng') === 'en') {
                      window.localStorage.setItem('i18nextLng', 'fr');
                      window.location.reload();
                      return;
                    }
                    if (window.localStorage.getItem('i18nextLng') === 'fr') {
                      window.localStorage.setItem('i18nextLng', 'en');
                      window.location.reload();
                      return;
                    }
                    if (!window.localStorage.getItem('i18nextLng')) {
                      window.localStorage.setItem('i18nextLng', 'en');
                      window.location.reload();
                      return;
                    }
                  }}
                >
                  {t('menu.langage')}
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    dispatch(logoutAsync());
                  }}
                >
                  <div className="text-red-600">{t('menu.logout')}</div>
                </MenuItem>
              </MenuList>
            </Menuc>
            {/*<a href="#">*/}
            {/*  <FontAwesomeIcon className="text-[24px]" icon={faMoon} />*/}
            {/*</a>*/}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
