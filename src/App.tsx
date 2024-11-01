import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { AuthContext } from "./context/AuthContext";
import useAuth from "./hooks/useAuth";
import Router from "./routes/routes";
import { User } from "./types/user-type";

function App() {
  const { GetCurrentUser }: any = useAuth();
  const [currentUser, setCurrentUser] = useState<User | null>(GetCurrentUser());
  //new WOW().init();
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
