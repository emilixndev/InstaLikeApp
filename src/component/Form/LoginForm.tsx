import React, { useState, useEffect } from 'react';
import { Navigate, redirect } from 'react-router-dom';

import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import useIsAuth from '../../hooks/useIsAuth';
import { loginAsync } from '../../redux/auth/thunks';

const LoginForm = () => {
  const [email, setEmail] = useState('emilien.muckensturm@etu.unistra.fr');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.auth.errorMessage);
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginAsync(email, password));
  };

  const isAuthenticated = useIsAuth();

  useEffect(() => {
    if (isAuthenticated) {
      setRedirect(true);
    }
  }, [isAuthenticated]);

  return (
    <div className="flex items-center h-screen">
      {redirect && <Navigate to="feed" replace={true} />}
      <form className="bg-white p-6 rounded-lg shadow-xl w-1/3 m-auto" onSubmit={handleSubmit}>
        <h2 className="text-lg font-medium mb-4">Connexion</h2>
        <div className="mb-4">
          <label className="block font-medium mb-2">Adresse email</label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block font-medium mb-2">Mot de passe</label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3">
              {error.error}
            </div>
          )}
        </div>

        <button className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginForm;
