import React, { useState, createContext } from 'react';
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [resources, setResources] = useState({});
  const [userProfile, setUserProfile] = useState({})
  const [token, setToken] =  useState("")

  return (
      <div className="App">
        <Header />
        <TrackerContext.Provider value={{
            resources,
            setResources,
            userProfile,
            setUserProfile,
            loggedIn,
            setLoggedIn,
            token,
            setToken
          } }>
          <Main />
        </TrackerContext.Provider>
      </div>
  );
}

export default App;
export const TrackerContext = createContext();