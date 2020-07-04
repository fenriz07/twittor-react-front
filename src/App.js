import React, { useState } from "react";
import SingInSingUp from "./page/SingInSingUp";

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
    </div>
  );
}
