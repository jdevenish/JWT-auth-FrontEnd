import React, { useState, createContext, useEffect } from 'react';
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main"
import { validToken } from './services/api-helper-userAuth'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [createModal, setCreateModal] = useState(true)
  const [resources, setResources] = useState({});
  const [userProfile, setUserProfile] = useState({});
  const [token, setToken] =  useState("");
  const [userCreds, setUserCreds] = useState({
        email: "",
        password: ""
  });


  useEffect(() => {
      const localToken = localStorage.getItem("token");
      if(localToken){
          validToken(localToken).then(resp => {
                if(resp === 200){
                    setLoggedIn(true)
                }else{
                    setLoggedIn(false)
                }
              }
          )
      }
  }, [token]);

  return (
      <div className="App">
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCreateModal={setCreateModal}/>
        <TrackerContext.Provider value={{
            resources,
            setResources,
            userProfile,
            setUserProfile,
            loggedIn,
            setLoggedIn,
            token,
            setToken,
            createModal,
            setCreateModal,
            userCreds,
            setUserCreds
          } }>
          <Main />
        </TrackerContext.Provider>
      </div>
  );
}

export default App;
export const TrackerContext = createContext();