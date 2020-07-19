import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import useAuth from "../../hooks/userAuth";
import BasicLayout from "../../layout/BasicLayout";
import { withRouter } from "react-router-dom";
import { getUserApi } from "../../api/user";
import { toast } from "react-toastify";
import BannerAvatar from "../../components/User/BannerAvatar";
import InfoUser from "../../components/User/InfoUser";

import "./index.scss";

function User(props) {
  const { match } = props;
  const [user, setUser] = useState(null);
  const { params } = match;
  const loggedUser = useAuth();

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
      <BannerAvatar user={user} loggedUser={loggedUser} />
      <InfoUser user={user} />
      <div className="user__tweets">Lista de tweets</div>
    </BasicLayout>
  );
}

export default withRouter(User);
