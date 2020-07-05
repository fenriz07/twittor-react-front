import React, { useState } from "react";
import SingInSingUp from "./page/SingInSingUp";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [user, setUser] = useState(true);

  return (
    <div>
      {user ? (
        <div>
          <SingInSingUp />
        </div>
      ) : (
        "No estas logeado"
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
    </div>
  );
}
