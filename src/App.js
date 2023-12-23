import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useRef} from 'react';
import { Routes, Route } from 'react-router-dom';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Body from './Body';
import Filter from './Filter'
import AddCard from './AddCard';
import EssayForm from './EssayForm';
import './Css/Component.css';
import { isAuth as realyIsAuth, login, logout, get_access_token } from './auth';

function App() { 
  const [selected, setSelected] = useState([]);
  let [count_record, setCountrecord] = useState();
  const [loading, setLoading] = useState(true);
 // const [logout, setLogout] = useState(true);

  // auth
  const [isAuth, setIsAuth] = useState(realyIsAuth());
  //const [access, setAaccess] = useState(get_access_token());

  const handlerLogin = async (user, pwd) => {
    const result = await login(user, pwd);

    if(!result) {
      return result;
    }

    setIsAuth(true);
    return result;
  }

 /* const handlerLogout = async () => {
    const result = await logout();
    setIsAuth(false);
  }*/
  let content;

  if (!isAuth) {
    content = <EssayForm loading={loading} setLoading={setLoading} handlerLogin={handlerLogin}/> 
  } else {
    content = 
    <>
      <Header setLoading={setLoading} setIsAuth={setIsAuth}/>
      <Filter setSelected={setSelected} selected={selected} 
            count_record={count_record}/>
      <AddCard count_record={count_record} setCountrecord={setCountrecord}/>
      <Body selected={selected} count_record={count_record}/>
    </>
  }
 /* const content = !isAuth ? <
    EssayForm loading={loading} setLoading={setLoading} handlerLogin={handlerLogin}/> 
    :
    <div>
      <Header setLoading={setLoading}/>
      <Filter setSelected={setSelected} selected={selected} 
            count_record={count_record}/>
      <AddCard count_record={count_record} setCountrecord={setCountrecord}/>
      <Body selected={selected} count_record={count_record}/>
    </div>*/

return (
  <div>
    {isAuth ? 'залогінений' : 'не залогінений'}
    {content}
  </div>
)

}



export default App
