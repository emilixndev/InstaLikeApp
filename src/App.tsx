
import './App.css';
import {useEffect} from "react";
import InstalikeApi from "./instalikeApi";
import './i18n'
import {useTranslation} from "react-i18next";
import Home from "./component/home";


function App() {

  useEffect(()=>{
    InstalikeApi.auth.login({email:"emilien.muckensturm@etu.unistra.fr",password:'DWEB2023'}).then(({data}) =>{
      console.log(data.accessToken)
      InstalikeApi.posts.find(1).fetch;
    })
  })

  const {t,i18n} =useTranslation();

  return (
    <div className="App">
    <p>{t('actions.follow')}</p>
      <h1 className="text-3xl font-bold underline ">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
