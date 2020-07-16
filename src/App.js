import React, { useState, useEffect } from "react";
import SingInSingUp from "./page/SingInSingUp";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./utils/context";
import { isUserLogedApi } from "./api/auth";
import Routing from "./routes/Routing";

export default function App() {
  const [user, setUser] = useState(null);
  const [loadUser, setLoadUser] = useState(false);
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);

  useEffect(() => {
    setUser(isUserLogedApi());
    setRefreshCheckLogin(false);
    setLoadUser(true);
  }, [refreshCheckLogin]);

  if (!loadUser) return null;

  return (
    <AuthContext.Provider value={user}>
      {!user ? (
        <div>
          <SingInSingUp setRefreshCheckLogin={setRefreshCheckLogin} />
        </div>
      ) : (
        <Routing setRefreshCheckLogin={setRefreshCheckLogin} />
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newesOnTop={false}
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </AuthContext.Provider>
  );
}
