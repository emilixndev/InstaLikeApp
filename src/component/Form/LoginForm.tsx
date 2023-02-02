import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Votre logique de soumission de formulaire ici
    console.log(email, password);
  };

  return (
    <div className="flex items-center h-screen">
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
        </div>
        <button className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginForm;
