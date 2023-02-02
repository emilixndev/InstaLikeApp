import { AxiosError } from 'axios';
import { useEffect } from 'react';

import instalikeApi, { ACCESS_TOKEN_KEY } from '../instalikeApi';
import { logoutAsync } from '../redux/auth/thunks';
import useAppDispatch from './useAppDispatch';

const useAuthInterceptors = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const reqId = instalikeApi.driver.interceptors.request.use((config) => {
      const accessToken = window.localStorage.getItem(ACCESS_TOKEN_KEY);

      if (accessToken !== null) {
        return {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${accessToken}`,
          },
        };
      }

      return config;
    });

    const resId = instalikeApi.driver.interceptors.response.use(
      (response) => response,
      (e) => {
        if (e instanceof AxiosError) {
          if (e.response?.status === 401) {
            dispatch(logoutAsync());
          }
        }
      }
    );

    return () => {
      instalikeApi.driver.interceptors.request.eject(reqId);
      instalikeApi.driver.interceptors.response.eject(resId);
    };
  }, [dispatch]);
};

export default useAuthInterceptors;
