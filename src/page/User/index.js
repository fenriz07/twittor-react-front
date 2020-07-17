import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import BasicLayout from "../../layout/BasicLayout";
import { withRouter } from "react-router-dom";
import { getUserApi } from "../../api/user";
import { toast } from "react-toastify";

import "./index.scss";

function User(props) {
  const { match } = props;
  const [user, setUser] = useState(null);
  const { params } = match;

  useEffect(() => {
    getUserApi(params.id)
      .then((response) => {
        setUser(response);
        if (!response) {
          toast.error("El usuario que haz visitado no existe");
        }
      })
      .catch(() => {
        toast.error("El usuario que haz visitado no existe");
      });
  }, [params]);

  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2>
          {user ? `${user.nombre} ${user.apellido}` : "Usuario no existe"}
        </h2>
      </div>
      <div>Banner de usuario</div>
      <div>Info Usuario</div>
      <div className="user__tweets">Lista de tweets</div>
    </BasicLayout>
  );
}

export default withRouter(User);
